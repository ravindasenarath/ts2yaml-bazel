
# Install the nodejs "bootstrap" package
# This provides the basic tools for running and packaging nodejs programs in Bazel
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "b32a4713b45095e9e1921a7fcb1adf584bc05959f3336e7351bcf77f015a2d7c",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.1.0/rules_nodejs-4.1.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

# The Bazel Federation is a set of rules at versions that have been tested together to ensure interoperability.
http_archive(
    name = "bazel_federation",
    sha256 = "9d4fdf7cc533af0b50f7dd8e58bea85df3b4454b7ae00056d7090eb98e3515cc",  # pragma: allowlist secret
    strip_prefix = "bazel-federation-130c84ec6d60f31b711400e8445a8d0d4a2b5de8",
    type = "zip",
    url = "https://github.com/bazelbuild/bazel-federation/archive/130c84ec6d60f31b711400e8445a8d0d4a2b5de8.zip",
)

# Controls which version of NodeJS and Yarn to use. For more information, check
# https://bazelbuild.github.io/rules_nodejs/install.html
node_repositories(
    node_repositories = {
        "14.17.4-darwin_amd64": ("node-v14.17.4-darwin-x64.tar.gz", "node-v14.17.4-darwin-x64", "5c055a295e030cb789e2925b4c0647f7aaf461ffe5f2a08145c0605fb83ad4e0"),
        "14.17.4-linux_amd64": ("node-v14.17.4-linux-x64.tar.xz", "node-v14.17.4-linux-x64", "db18c54ebe01974d46198b08729249acbb0dcdc9aea82b53eec913f8c56035c6"),
        "14.17.4-windows_amd64": ("node-v14.17.4-win-x64.zip", "node-v14.17.4-win-x64", "d82a3ca777b4dccc97aa391eb483325cda731e0ae9b3a5669dbf34bb8defde6e"),
    },
    node_version = "14.17.4",
    yarn_version = "1.22.4",
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    # firebase-updater-* packages require explicit listing of transitive dependencies
    # which we don't want to install
    strict_visibility = False,
    yarn_lock = "//:yarn.lock",
)