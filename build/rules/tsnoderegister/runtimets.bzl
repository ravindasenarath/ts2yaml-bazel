"""Generate the openapi yml file from the JSON version."""
def _generateYaml(ctx):
    inputs = [] + ctx.files.schemas
    inputs.extend(ctx.attr.generator[DefaultInfo].data_runfiles.files.to_list())

    ctx.actions.run(
        inputs = inputs,
        outputs = [ctx.outputs.yaml],
        arguments = [ctx.outputs.yaml.path, ctx.file.main_file.path],
        executable = ctx.executable.generator,
    )

ts_2_yaml = rule(
    implementation = _generateYaml,
    attrs = {
        "generator": attr.label(
            default = "//build/rules/tsnoderegister:ys-2-yaml",
            cfg = "target",
            executable = True,
        ),
        "schemas": attr.label_list(default = [], allow_files = True),
        "main_file": attr.label(
            allow_single_file = True,
            mandatory = True,
        ),
    },
    outputs = {
        "yaml": "openapi.yaml",
    },
)
    