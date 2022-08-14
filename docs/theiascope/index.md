# Theiascope™

## Introduction

Theia Scientific (experts in edge computing architectures for scientific instrumentation, data analytics, and AI model development) and Volkov Labs (an agency specializing in custom plugin development for Grafana) have teamed up to create the Theiascope™ platform, which includes an application specifically designed for AI-enhanced microscopy that makes real-time analysis on any digital microscope possible.

The application was initially prototyped as a standalone web application with tight integration between a simple website and REST API. It used a separate Grafana instance used for visualization and plotting. Constantly switching between two separate applications while doing experiments was inconvenient, so Theia Scientific migrated the AI model management and image acquisition interface into Grafana for a single interface with a better user experience (UX).

<iframe width="100%" height="500" src="https://www.youtube.com/embed/VfAC7Mf3O_4" title="Scientific microscope image recognition in Grafana | Volkov Labs and Theia Scientific Collaboration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## GrafanaCONline 2022

In this session, Theia’s production team demonstrated deployment of machine learning (ML) models on an edge computing device for real-time microscopy image analysis using Balena for remote device management and Grafana for application control and visualization. Custom panel plugins and dashboards packaged as a Grafana application are combined with a container-based, multi-service architecture to present scientists and engineers using electron microscopes with a coherent and customizable platform for automated image analysis.

In this presentation, you’ll learn about the challenges and solutions to using Grafana for ML-based image analysis in resource- and network-constrained environments through a demonstration and application walkthrough.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/WRPnTFBX4rg" title="Using Grafana and machine learning for real time microscopy image analysis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Architecture

The Theia application is based on the Grafana platform. It provides all required tools and components to interact with REST API and visualizes results in dashboard panels using custom plugins. To allow native Grafana dashboard customization, all components were separated into custom panels.

Images are acquired using various web protocols supported by all modern web browsers; individual frames are streamed into a PostgreSQL database. Then, a REST API is utilized to visualize both the acquired images and the AI-powered quantitation results within fully customizable dashboards. This powerful combination enables scientists and engineers using various forms of electron and optical digital microscopy to fully customize the UI on a per-user, per-microscope, and per-experiment basis.

![Diagram](/img/theiascope/theia-app.png)

## Grafana Blog

The Theiascope™ technology and the Theia application based on the Grafana platform have been successfully tested in production environments at the University of Michigan, Idaho National Laboratory, and Argonne National Laboratory. Grafana’s simplicity allows users to feel comfortable doing experiments within minutes.

After the Theia prototype was designed, it took less than two months for the application to be created, which is the average time it takes to make a Minimum Valuable Product (MVP) application plugin for Grafana. We will continue to add new features to transition from an MVP to a full-featured platform that will be able to compete with legacy scientific data analysis desktop applications.

Read more in the Grafana Blog post [How Theia Scientific and Volkov Labs use Grafana and AI to analyze scientific images](https://grafana.com/blog/2022/04/29/how-theia-scientific-and-volkov-labs-use-grafana-and-ai-to-analyze-scientific-images/).
