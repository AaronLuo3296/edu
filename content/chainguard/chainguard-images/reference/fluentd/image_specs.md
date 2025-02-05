---
title: "fluentd Image Variants"
type: "article"
unlisted: true
description: "Detailed information about the public fluentd Chainguard Image variants"
date: 2023-03-07T11:07:52+02:00
lastmod: 2023-03-07T11:07:52+02:00
draft: false
tags: ["Reference", "Chainguard Images", "Product"]
images: []
weight: 550
toc: true
---

{{< tabs >}}
{{< tab title="Overview" active=false url="/chainguard/chainguard-images/reference/fluentd/" >}}
{{< tab title="Variants" active=true url="/chainguard/chainguard-images/reference/fluentd/image_specs/" >}}
{{< tab title="Tags History" active=false url="/chainguard/chainguard-images/reference/fluentd/tags_history/" >}}
{{< tab title="Provenance" active=false url="/chainguard/chainguard-images/reference/fluentd/provenance_info/" >}}
{{</ tabs >}}

This page shows detailed information about all public variants of the Chainguard **fluentd** Image.

## Variants Compared
The **fluentd** Chainguard Image currently has 2 public variants: 

- `latest-dev`
- `latest`

The table has detailed information about each of these variants.

|              | latest-dev     | latest         |
|--------------|----------------|----------------|
| Default User | `fluent`       | `fluent`       |
| Entrypoint   | Service Bundle | Service Bundle |
| CMD          | not specified  | not specified  |
| Workdir      | not specified  | not specified  |
| Has apk?     | yes            | no             |
| Has a shell? | yes            | no             |

Check the [tags history page](/chainguard/chainguard-images/reference/fluentd/tags_history/) for the full list of available tags.

## Packages Included
The table shows package distribution across variants.

|                           | latest-dev | latest |
|---------------------------|------------|--------|
| `apk-tools`               | X          |        |
| `bash`                    | X          |        |
| `binutils`                | X          |        |
| `build-base`              | X          |        |
| `busybox`                 | X          |        |
| `ca-certificates-bundle`  | X          | X      |
| `execline`                | X          | X      |
| `gcc`                     | X          |        |
| `git`                     | X          |        |
| `glibc`                   | X          | X      |
| `glibc-dev`               | X          |        |
| `glibc-locale-posix`      | X          | X      |
| `gmp`                     | X          |        |
| `isl`                     | X          |        |
| `ld-linux`                | X          | X      |
| `libatomic`               | X          |        |
| `libbrotlicommon1`        | X          |        |
| `libbrotlidec1`           | X          |        |
| `libcrypt1`               | X          | X      |
| `libcrypto3`              | X          | X      |
| `libcurl-openssl4`        | X          |        |
| `libexpat1`               | X          |        |
| `libffi`                  | X          | X      |
| `libgcc`                  | X          | X      |
| `libgo`                   | X          |        |
| `libgomp`                 | X          |        |
| `libnghttp2-14`           | X          |        |
| `libpcre2-8-0`            | X          |        |
| `libpq-11`                | X          | X      |
| `libssl3`                 | X          | X      |
| `libstdc++`               | X          |        |
| `libstdc++-dev`           | X          |        |
| `linux-headers`           | X          |        |
| `make`                    | X          |        |
| `mpc`                     | X          |        |
| `mpfr`                    | X          |        |
| `ncurses`                 | X          | X      |
| `ncurses-terminfo-base`   | X          | X      |
| `nss-db`                  | X          |        |
| `nss-hesiod`              | X          |        |
| `openssl-config`          | X          | X      |
| `pkgconf`                 | X          |        |
| `posix-cc-wrappers`       | X          |        |
| `readline`                | X          | X      |
| `ruby-3.2`                | X          | X      |
| `ruby-3.2-dev`            | X          |        |
| `ruby3.2-bundler`         | X          | X      |
| `ruby3.2-concurrent-ruby` | X          | X      |
| `ruby3.2-cool.io`         | X          | X      |
| `ruby3.2-fluentd`         | X          | X      |
| `ruby3.2-http_parser.rb`  | X          | X      |
| `ruby3.2-msgpack`         | X          | X      |
| `ruby3.2-serverengine`    | X          | X      |
| `ruby3.2-sigdump`         | X          | X      |
| `ruby3.2-strptime`        | X          | X      |
| `ruby3.2-tzinfo`          | X          | X      |
| `ruby3.2-tzinfo-data`     | X          | X      |
| `ruby3.2-webrick`         | X          | X      |
| `ruby3.2-yajl-ruby`       | X          | X      |
| `s6`                      | X          | X      |
| `skalibs`                 | X          | X      |
| `wolfi-baselayout`        | X          | X      |
| `yaml`                    | X          | X      |
| `zlib`                    | X          | X      |

