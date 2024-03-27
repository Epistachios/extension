# Source Code Review Instructions

This document outlines the steps required for reviewing and testing the Epistache extension from its source code. Please follow these instructions to ensure a thorough evaluation of the extension's code and functionality.

## Prerequisites

Before proceeding with the review, ensure you have the following prerequisites installed on your system:

- Node.js
- pnpm

## Step 1: Unzip the Package

Locate the zipped file containing the extension, use your preferred unzipping tool to extract the contents to a folder of your choice.

## Step 2: Prepare Your Environment

Open a terminal window. You can use the `cd` command followed by the directory path to navigate to the unzipped package. For example:

```bash
cd path/to/unzipped/package
```

## Step 3: Install Dependencies

Once you're in the project's root directory in the terminal, run the following command to install the necessary dependencies:
```bash
pnpm install
```

## Step 4: Build the Extension

To build the extension, run the following command in the terminal:

**Firefox:**
```bash
pnpm build:firefox
```

**Chrome:**
```bash
pnpm build
```

You have now successfully built the extension! Proceed with your testing and review.
