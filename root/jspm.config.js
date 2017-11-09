SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "fs": "npm:jspm-nodelibs-fs@0.2.1",
      "path": "npm:jspm-nodelibs-path@0.2.3",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      },
      "npm:core-js@1.2.7": {
        "map": {
          "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  map: {
    "babel": "npm:babel-core@5.8.38"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "espa": "github:phongnlu/espa@0.0.1",
    "process": "npm:jspm-nodelibs-process@0.2.1"
  },
  packages: {
    "github:phongnlu/espa@0.0.1": {
      "map": {
        "promise-polyfill": "npm:promise-polyfill@6.0.2",
        "riot-observable": "npm:riot-observable@3.0.0",
        "riot-route": "npm:riot-route@3.1.2",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.3"
      }
    },
    "npm:riot-observable@3.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:riot-route@3.1.2": {
      "map": {
        "riot-observable": "npm:riot-observable@3.0.0",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    }
  }
});
