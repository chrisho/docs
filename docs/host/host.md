---
sidebar_position: 1
sidebar_label: Host Management
title: ""
---

# Host Management

Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are three or more nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster.

:::note

Because Harvester is built on top of Kubernetes and uses etcd as its database, the maximum node fault toleration is one when there are three management nodes.

:::

![host.png](/img/v1.1/host/host.png)

## Node Maintenance

For admin users, you can click **Enable Maintenance Mode** to evict all VMs from a node automatically. It will leverage the `VM live migration` feature to migrate all VMs to other nodes automatically. Note that at least two active nodes are required to use this feature.

![node-maintenance.png](/img/v1.1/host/node-maintenance.png)

## Cordoning a Node

Cordoning a node marks it as unschedulable. This feature is useful for performing short tasks on the node during small maintenance windows, like reboots, upgrades, or decommissions. When you’re done, power back on and make the node schedulable again by uncordoning it.

![cordon-node.png](/img/v1.1/host/cordon-nodes.png)

## Deleting a Node

Deleting a node is done in two phases:

1. Delete the node from Harvester
    - Go to the **Hosts** page
    - On the node you want to modify, click **⋮ > Delete**

2. Uninstall RKE2 from the node
    - Login to the node as root
    - Run `rke2-uninstall.sh` to delete the whole RKE2 service.

:::caution

You will lose all data of the control plane node after deleing the RKE2 service.

:::

:::note

There's a [known issue](https://github.com/harvester/harvester/issues/1497) about node hard delete.
Once resolved, the last step can be skipped.

:::

![delete.png](/img/v1.1/host/delete.png)

## Multi-disk Management - `Tech Preview`

Users can view and add multiple disks as additional data volumes from the host detail page.

1. Go to the **Hosts** page.
2. On the node you want to modify, click **⋮ > Edit Config**.
2. Select the **Disks** tab and click **Add Disks**.
3. Select an additional raw block device to add as an additional data volume.
    - The `Force Formatted` option is required if the block device has never been force-formatted.

:::note

In order for Harvester to identify the disks, each disk needs to have a unique [WWN](https://en.wikipedia.org/wiki/World_Wide_Name). Otherwise, Harvester will refuse to add the disk.
If your disk does not have a WWN, you can format it with the `EXT4` filesystem to help Harvester recognize the disk.

:::

:::note

If you are testing Harvester in a QEMU environment, you'll need to use QEMU v6.0 or later. Previous versions of QEMU will always generate the same WWN for NVMe disks emulation. This will cause Harvester to not add the additional disks, as explained above.

:::

![Edit Config](/img/v1.1/host/edit-config.png)
![Add Disks](/img/v1.1/host/add-disks.png)

## Ksmtuned Mode

Ksmtuned is a KSM automation tool deployed as a DaemonSet to run Ksmtuned on each node. It can start or stop KSM by setting the available memory percentage ratio (**Threshold Coefficient**). By default, you need to manually enable Ksmtuned on each node UI. You can see the KSM statistics from the node UI (for details, see [KSM](https://www.kernel.org/doc/html/latest/admin-guide/mm/ksm.html#ksm-daemon-sysfs-interface)).

### **Quick Run**

1. Go to the **Hosts** page.
2. On the node you want to modify, click **⋮ > Edit Config**.
3. Select the **Ksmtuned** tab and **Run Strategy** in Run.
4. (Optional) You can modify **Threshold Coefficient** as needed.

![Edit Ksmtuned](/img/v1.1/host/edit-ksmtuned.png)

5. Click **Save** to update.
6. Wait at least 2 minutes and check the **Statistics**, click **⋮ >  Your Node > Ksmtuned tab.**

![View Ksmtuned Statistics](/img/v1.1/host/view-ksmtuned-statistics.png)

### **Parameters**

**Run Strategy：**

- **Stop:** Stop Ksmtuned and KSM. VMs can still use shared memory pages.
- **Run:** Run Ksmtuned.
- **Prune:** Stop Ksmtuned and prune KSM memory pages.

**Threshold Coefficient**: configures the available memory percentage ratio. If the available memory is less than the threshold, KSM will be started; otherwise, KSM will be stopped.

**Merge Across Nodes:** specifies if pages from different NUMA nodes can be merged.

**Mode:**

- **Standard:** The default mode. The control node ksmd uses about 20% of a single CPU. It uses the following parameters:

```yaml
Boost: 0
Decay: 0
Maximum Pages: 100
Minimum Pages: 100
Sleep Time: 20
```

- **High-performance:** Node ksmd uses 20% to 100% of a single CPU and has higher scanning and merging efficiency. It uses the following parameters:

```yaml
Boost: 200
Decay: 50
Maximum Pages: 100
Minimum Pages: 10000
Sleep Time: 20
```

- **Customized:** You can customize the configuration to reach the performance that you want.

Ksmtuned uses the following parameters to control KSM efficiency:

- **Boost**: The number of scanned pages is incremented each time if the available memory is less than the **Threshold Coefficient**.
- **Decay**: The number of scanned pages is decremented each time if the available memory is greater than the **Threshold Coefficient**.
- **Maximum Pages**: Maximum number of pages per scan.
- **Minimum Pages**: The minimum number of pages per scan, also the configuration for the first run.
- **Sleep Time(ms)**: The interval between two scans, which is calculated with the formula: **Sleep Time** \* 16 \* 1024 \* 1024 / Total Memory. Minimum: 10ms.

**Assume you have a 512GiB memory node that uses the following parameters:**

```yaml
Boost: 300
Decay: 100
Minimum Pages: 1000
Maximum Pages: 5000
Sleep Time: 50
```

When Ksmtuned starts, initialize `pages_to_scan` in KSM to 1000 (**Minimum Pages**) and set `sleep_millisecs` to 10 (50 \* 16 \* 1024 \* 1024 / 536870912 KiB < 10).

KSM is started when the available memory is below the **Threshold Coefficient**, and if it is detected as running in each period (1 minute), `pages_to_scan` is incremented by 300 (**Boost**) until it reaches 5000 (**Maximum Pages**).

KSM is stopped when the available memory is higher than the **Threshold Coefficient**, and if it is detected as stopped in each period, `pages_to_scan` is decremented by 100 (**Decay**) until it reaches 1000 (**Minimum Pages**).
