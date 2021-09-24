# ts2yaml-bazel
Convert openapi schema files in typescript to yaml by a bazel rule

Run to generate yaml
`bazel build //services/my-sample-service:generate_yaml`

Bazel rule file `build/rules/tsnoderegister`
Package using rule to generate yaml `services/my-sample-service`
