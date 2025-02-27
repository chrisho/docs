---
sidebar_position: 1
sidebar_label: Hardware and network requirements
title: "Hardware and network requirements"
keywords:
- Installation Requirements
Description: Outline the Harvester installation requirements
---
As an HCI solution on bare metal servers, there are minimum node hardware and network requirements to install and run Harvester.

## Hardware requirements

Harvester nodes have the following hardware requirements and recommendations for installation and testing.

| Type             | Requirements and Recommendations                                                                                                                                                                                        |
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CPU              | x86_64 only. Hardware-assisted virtualization is required. 8-core processor minimum for testing; 16-core or above recommended for production                                                            |
| Memory           | 32 GB minimum for testing; 64 GB or above recommended for production                                                                                                                                                               |
| Disk Capacity    | 200 GB minimum for testing; 500 GB or above recommended for production                                                                                                                                  |
| Disk Performance | 5,000+ random IOPS per disk(SSD/NVMe). Management nodes (first 3 nodes) must be [fast enough for Etcd](https://www.ibm.com/cloud/blog/using-fio-to-tell-whether-your-storage-is-fast-enough-for-etcd) |
| Network Card     | 1 Gbps Ethernet minimum for testing, 10Gbps Ethernet recommended for production                                                                                                                       |
| Network Switch   | Trunking of ports required for VLAN support                                                                                                                                                           |

:::note

A three-node cluster is required to realize the multi-node features of Harvester fully.
- The first node always defaults to be a management node of the cluster.
- When there are three or more nodes, the two other nodes added first are automatically promoted to management nodes to form a high availability (HA) cluster.
- We recommend server-class hardware for the best results. Laptops and nested virtualization are not officially supported.
- The `product_uuid` fetched from `/sys/class/dmi/id/product_uuid` in Linux must be unique in each node. Otherwise, features like VM live migration will be affected. For more information, refer to [#4025](https://github.com/harvester/harvester/issues/4025).

:::

## Network requirements

Harvester nodes have the following network requirements for installation.

### Inbound rules for Harvester nodes

Harvester nodes require the following port connections or inbound rules. Typically, all outbound traffic is allowed.


| Protocol  |   Port	                 |  Source	                                |   Description                           |
|:----------|:---------------------------|:-----------------------------------------|:----------------------------------------|
| TCP	    |   2379	                 |  Harvester management nodes	            |   Etcd client port                      |
| TCP       | 	2381                     | 	Harvester management nodes              | 	Etcd health checks                    |
| TCP       | 	2380                     | 	Harvester management nodes              | 	Etcd peer port                        |
| TCP       | 	10010                    | 	Harvester management and compute nodes  | 	Containerd                            |
| TCP       | 	6443                     | 	Harvester management nodes              | 	Kubernetes API                        |
| TCP       | 	9345                     | 	Harvester management nodes              | 	Kubernetes API                        |
| TCP       | 	10252                    | 	Harvester management nodes              | 	Kube-controller-manager health checks |
| TCP       | 	10257                    | 	Harvester management nodes              | 	Kube-controller-manager secure port   |
| TCP       | 	10251                    | 	Harvester management nodes              | 	Kube-scheduler health checks          |
| TCP       | 	10259                    | 	Harvester management nodes              | 	Kube-scheduler secure port            |
| TCP       | 	10250                    | 	Harvester management and compute nodes  | 	Kubelet                               |
| TCP       | 	10256                    | 	Harvester management and compute nodes  | 	Kube-proxy health checks              |
| TCP       | 	10258                    | 	Harvester management nodes              | 	Cloud-controller-manager              |
| TCP       | 	9091                     | 	Harvester management and compute nodes  | 	Canal calico-node felix               |
| TCP       | 	9099                     | 	Harvester management and compute nodes  | 	Canal CNI health checks               |
| UDP       | 	8472                     | 	Harvester management and compute nodes  | 	Canal CNI with VxLAN                  |
| TCP       | 	2112                     | 	Harvester management nodes              | 	Kube-vip                              |
| TCP       | 	6444                     | 	Harvester management and compute nodes  | 	RKE2 agent                            |
| TCP       | 	6060                     | 	Harvester management and compute nodes  | 	Node-disk-manager                     |
| TCP       | 	10246/10247/10248/10249	 |  Harvester management and compute nodes	|   Nginx worker process                  |
| TCP       | 	8181                     | 	Harvester management and compute nodes  | 	Nginx-ingress-controller              |
| TCP       | 	8444                     | 	Harvester management and compute nodes  | 	Nginx-ingress-controller              |
| TCP       | 	10245                    | 	Harvester management and compute nodes  | 	Nginx-ingress-controller              |
| TCP       | 	80                       | 	Harvester management and compute nodes  | 	Nginx                                 |
| TCP       | 	9796                     | 	Harvester management and compute nodes  | 	Node-exporter                         |
| TCP       | 	30000-32767	             |  Harvester management and compute nodes  | 	NodePort port range                   |
| TCP       | 	22                       | 	Harvester management and compute nodes  | 	sshd                                  |
| UDP       | 	68                       | 	Harvester management and compute nodes  | 	Wicked                                |
| TCP       | 	3260                     | 	Harvester management and compute nodes	|   iscsid                                |

### Inbound rules for integrating Harvester with Rancher

If you want to [integrate Harvester with Rancher](../rancher/rancher-integration.md), you need to make sure that all Harvester nodes can connect to TCP port **443** of the Rancher load balancer.

When provisioning VMs with Kubernetes clusters from Rancher into Harvester, you need to be able to connect to TCP port **443** of the Rancher load balancer. Otherwise, the cluster won't be manageable by Rancher. For more information, refer to [Rancher Architecture](https://rancher.com/docs/rancher/v2.6/en/overview/architecture/).

### Inbound rules for K3s or RKE/RKE2 clusters

For the port requirements for guest clusters deployed inside Harvester VMs, refer to the following links:
- [K3s Networking](https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/#networking)
- [RKE Ports](https://rancher.com/docs/rke/latest/en/os/#ports)
- [RKE2 Networking](https://docs.rke2.io/install/requirements#networking)
