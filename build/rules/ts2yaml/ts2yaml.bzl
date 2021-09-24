"""Generate the openapi yml file from the JSON version."""
_generator = Label("//build/rules/ts2yaml:yaml-generator")

def _generateYaml(ctx):
    inputs = []
    inputs.extend(ctx.attr.generator[DefaultInfo].data_runfiles.files.to_list())

    ctx.actions.run(
        inputs = inputs,
        outputs = [ctx.outputs.yaml],
        arguments = [ctx.outputs.yaml.path],
        executable = ctx.executable.generator,
    )

generate_yaml_from_ts = rule(
    implementation = _generateYaml,
    attrs = {
        "generator": attr.label(default = _generator, executable = True, cfg = "host"),
    },
    outputs = {
        "yaml": "openapi.yaml",
    },
)
    