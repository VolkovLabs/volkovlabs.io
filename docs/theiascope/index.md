# Theiascope™

## Introduction

Theia Scientific (experts in edge computing architectures for scientific instrumentation, data analytics, and AI model development) and Volkov Labs (an agency specializing in custom plugin development for Grafana) have teamed up to create the Theiascope™ platform, which includes an application specifically designed for AI-enhanced microscopy that makes real-time analysis on any digital microscope possible.

The application was initially prototyped as a standalone web application with tight integration between a simple website and REST API. It used a separate Grafana instance used for visualization and plotting. Constantly switching between two separate applications while doing experiments was inconvenient, so Theia Scientific migrated the AI model management and image acquisition interface into Grafana for a single interface with a better user experience (UX).

<iframe width="728" height="410" src="https://www.youtube.com/embed/VfAC7Mf3O_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Architecture

The Theia application is based on the Grafana platform. It provides all required tools and components to interact with REST API and visualizes results in dashboard panels using custom plugins. To allow native Grafana dashboard customization, all components were separated into custom panels.

Images are acquired using various web protocols supported by all modern web browsers; individual frames are streamed into a PostgreSQL database. Then, a REST API is utilized to visualize both the acquired images and the AI-powered quantitation results within fully customizable dashboards. This powerful combination enables scientists and engineers using various forms of electron and optical digital microscopy to fully customize the UI on a per-user, per-microscope, and per-experiment basis.

![Diagram](/img/theiascope/theia-app.png)

Read more in the Grafana Blog post [How Theia Scientific and Volkov Labs use Grafana and AI to analyze scientific images](https://grafana.com/blog/2022/04/29/how-theia-scientific-and-volkov-labs-use-grafana-and-ai-to-analyze-scientific-images/).
