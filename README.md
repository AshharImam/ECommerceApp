# React Native eCommerce App

Welcome to the React Native eCommerce App repository! This app serves as a demonstration of a basic eCommerce platform built with React Native. It allows users to browse products, add them to their cart, and manage their cart items.

## Table of Contents

- [Description](#description)
- [Folder Structure](#folder-structure)
- [Architecture](#architecture)

## Description

This app showcases the implementation of a simple eCommerce platform using React Native. Users can view a list of products, add them to their cart, and navigate to their cart to manage items.

## Folder Structure

The app follows a modular folder structure that promotes organization and maintainability. Below is an overview of the main directories and their contents:

- `api`: APIs and data-fetching related files.
- `models`: Data models for representing products and cart items.
- `redux`: Redux-related code for state management.
  - `slices`: Redux slices for actions and reducers.
- `types`: Type definitions used throughout the app.
- `view-controllers`: Files related to the business logic of the views.
- `components`: Reusable UI components.
- `navigations`: Navigation-related code for routing between screens.
- `screens`: Top-level screen components that define the app's screens.
- `utils`: Utility functions.
- `view-models`: View models that handle data and logic for the views.

## Architecture

The app is built upon the Model-View-ViewModel (MVVM) architecture pattern along with Redux for state management. Key architectural components include:

- **Views**: Render UI screens and pass data from ViewModels.
- **ViewModels**: Handle business logic, interact with Redux, and provide data to Views.
- **Redux**: Global state management with actions and reducers in slices.
- **Services**: Fetch data from APIs, used by ViewModels.
- **Models**: Define data structures for products and cart items.
