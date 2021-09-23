"""Generate the openapi yml file from the JSON version."""
load("@npm//ts-node:index.bzl", "ts_node")
# _generator = Label("//build/rules/ts2yaml:yaml-generator")
_new_generator = ts_node(
        name = 'test',
        data = [
            "generateYml.ts",
            "tsconfig.json",
            "//:tsconfig.json",
            "@npm//yaml",
            "@npm//openapi-core",
        ],
        templated_args = [
            "--bazel_patch_module_resolver",
            "--project",
            "$(rlocation tsconfig.json)",
            "$$(rlocation $(rootpath :generateYml.ts))",
        ],
        visibility = ["//visibility:public"],
    )

def _generateYaml(ctx):

    

    inputs = [ctx.file.schema]
    inputs.extend(ctx.attr.generator[DefaultInfo].data_runfiles.files.to_list())

    ctx.actions.run(
        inputs = inputs,
        outputs = [ctx.outputs.yaml],
        arguments = [ctx.outputs.yaml.path, ctx.file.schema.path],
        executable = ctx.attrs.generator,
    )

generate_yaml_from_ts = rule(
    implementation = _generateYaml,
    attrs = {
        "generator": attr.label(default = _new_generator, executable = True, cfg = "host"),
        "schema": attr.label(
            allow_single_file = True,
            mandatory = True
        ),
    },
    outputs = {
        "yaml": "openapi.yaml",
    },
)
    