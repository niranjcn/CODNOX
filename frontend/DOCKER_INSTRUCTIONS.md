# Dockerization

This project has been dockerized. Follow the instructions below to build and run the application in a Docker container.

## Prerequisites

*   [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed on your Windows device.

## Building the Docker Image

1.  Open a terminal or command prompt.
2.  Navigate to the `frontend` directory of the project:
    ```sh
    cd E:\codnox\codnox\frontend
    ```
3.  Build the Docker image using the following command:
    ```sh
    docker build -t codnox-frontend .
    ```

## Running the Docker Container

1.  Once the image is built, you can run it as a container with the following command:
    ```sh
    docker run -d -p 8080:80 codnox-frontend
    ```
2.  The application will be accessible in your web browser at [http://localhost:8080](http://localhost:8080).

## Stopping the Docker Container

1.  To stop the container, you first need to find its ID. You can do this with the following command:
    ```sh
    docker ps
    ```
2.  Once you have the container ID, you can stop it with the following command:
    ```sh
    docker stop <container_id>
    ```
