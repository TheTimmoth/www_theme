# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "www_theme"
  spec.version       = "0.2.0"
  spec.authors       = ["Tim Schlottmann"]
  spec.email         = ["coding@timsc.de"]

  spec.summary       = "Jekyll theme based on jekyll/minima (https://github.com/jekyll/minima)."
  spec.homepage      = "https://github.com/thetimmoth/www_theme"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
  end

  spec.add_runtime_dependency "jekyll", ">= 3.5", "< 5.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"
  spec.add_runtime_dependency "jekyll-paginate"
  spec.add_development_dependency "bundler", ">= 1.15"
end
