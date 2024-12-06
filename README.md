# React Router Dom Catch-all Route Issue

This repository demonstrates a problem with React Router Dom's catch-all route functionality.  When navigating to a route that doesn't exist, the 404 page defined by the catch-all route does not render correctly. Instead, a blank screen is displayed.

## Problem Description

The application uses `react-router-dom` v6.  The expected behavior is that navigating to a non-existent route should render the `NotFound` component. However, this is not happening. The issue likely stems from an incorrect configuration of routes or a missing component.