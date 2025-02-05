---
title: "Image Overview: haproxy"
linktitle: "haproxy"
type: "article"
layout: "single"
description: "Overview: haproxy Chainguard Image"
date: 2022-11-01T11:07:52+02:00
lastmod: 2022-11-01T11:07:52+02:00
draft: false
tags: ["Reference", "Chainguard Images", "Product"]
images: []
menu:
  docs:
    parent: "images-reference"
weight: 500
toc: true
---

{{< tabs >}}
{{< tab title="Overview" active=true url="/chainguard/chainguard-images/reference/haproxy/" >}}
{{< tab title="Variants" active=false url="/chainguard/chainguard-images/reference/haproxy/image_specs/" >}}
{{< tab title="Tags History" active=false url="/chainguard/chainguard-images/reference/haproxy/tags_history/" >}}
{{< tab title="Provenance" active=false url="/chainguard/chainguard-images/reference/haproxy/provenance_info/" >}}
{{</ tabs >}}









A minimal haproxy base image rebuilt every night from source.

## Get It!

The image is available on `cgr.dev`:

```
docker pull cgr.dev/chainguard/haproxy:latest
```

## Usage

Similar to the `docker-library/haproxy` image, this image does not come with any default configuration.

Please refer to [upstream's excellent (and comprehensive) documentation](https://docs.haproxy.org/) on the subject of configuring HAProxy for your needs.

Let say you have a `haproxy.cfg` config file is current working directory. To test that configuration file, you can run the following command

```
docker run -it --rm -v "$(pwd):/etc/haproxy" --name haproxy-syntax-check cgr.dev/chainguard/haproxy haproxy -c -f /etc/haproxy/haproxy.cfg
```

In order for the container to work, you need to mount your custom `haproxy.cfg` file in the container. The following example runs HAProxy with a custom configuration file:

```
docker run -it --rm -v "$(pwd):/etc/haproxy" cgr.dev/chainguard/haproxy haproxy -f /etc/haproxy/haproxy.cfg
```

