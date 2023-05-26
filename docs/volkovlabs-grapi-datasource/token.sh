#!/bin/sh

# Generate a new token
jsonTokenApi=$(curl -X POST -H "Content-Type: application/json" -d '{"name":"apiKey-grapi", "role": "Admin"}' \
    http://${GRAFANA_USER}:${GRAFANA_PASSWORD}@${GRAFANA_IP}:${GRAFANA_PORT}/api/auth/keys)
token=$(echo $jsonTokenApi | jq .key)

# Get Provisioned Data Source configuration
jsonDataSource=$(curl -X GET -H "Content-Type: application/json" \
    http://${GRAFANA_USER}:${GRAFANA_PASSWORD}@${GRAFANA_IP}:${GRAFANA_PORT}/api/datasources/name/grapi)
datasourceId=$(echo $jsonDataSource | jq '.id')

# Add a token to Secure JSON Data
echo $jsonDataSource | jq '. + {"secureJsonData":{"token":'$token'}}' |
    jq '. + {"secureJsonFields":{"token":true}}' >.datasource.json

# Update Data Source
curl -X PUT -H "Content-Type: application/json" -d @.datasource.json \
    http://${GRAFANA_USER}:${GRAFANA_PASSWORD}@${GRAFANA_IP}:${GRAFANA_PORT}/api/datasources/${datasourceId}
