load("@npm//ts-node:index.bzl", "ts_node")

def yaml_generator_macro(name, srcs, visibility = ["//visibility:public"], **kwargs):
    ts_node(
        name = name,
        data = [
            "//build/rules/ts2yaml:generateYml.ts",
            "tsconfig.json",
            "@npm//yaml",
            "@npm//openapi-core",
        ] + srcs,
        # templated_args = [
        #     "--bazel_patch_module_resolver",
        #     "--project",
        #     "$(rootpath tsconfig.json)",
        #     "$$(rlocation $(rootpath :generateYml.ts))",
        # ],
        visibility = ["//visibility:public"],
    )
