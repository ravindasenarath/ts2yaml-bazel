"""Generate the openapi yml file from the JSON version."""

_generator = Label("//build/rules/json2yaml:yaml-generator")

def _generateYaml(ctx):
    inputs = [ctx.file.json]
    inputs.extend(ctx.attr.generator[DefaultInfo].data_runfiles.files.to_list())

    ctx.actions.run(
        inputs = inputs,
        outputs = [ctx.outputs.yaml],
        arguments = [ctx.outputs.yaml.path, ctx.file.json.path],
        executable = ctx.executable.generator,
    )

generate_yaml_from_json = rule(
    implementation = _generateYaml,
    attrs = {
        "generator": attr.label(default = _generator, executable = True, cfg = "host"),
        "json": attr.label(
            allow_single_file = True,
            mandatory = True
        ),
    },
    outputs = {
        "yaml": "openapi.yaml",
    },
)
