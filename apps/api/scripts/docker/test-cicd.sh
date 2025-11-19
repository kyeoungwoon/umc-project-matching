# docker buildx build \
#   --platform linux/amd64 \
#   -t my-admin-image:amd64 \
#   -f apps/api/scripts/docker/dockerfile \
#   --load \
#   .

ENV_FILE=""

IMAGE_NAME="my-test-image:amd64"
CONTAINER_NAME="my-test-container"

docker run --rm --env-file "$ENV_FILE" -p 8080:9999 \
--name "$CONTAINER_NAME" "$IMAGE_NAME"