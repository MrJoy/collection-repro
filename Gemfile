# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby File.read(".ruby-version").chomp

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "pg", "~> 1.1"
gem "puma", "~> 6.0"
gem "rails", "~> 7.0.2", ">= 7.0.2.3"
# gem "bcrypt", "~> 3.1.7" # https://guides.rubyonrails.org/active_model_basics.html#securepassword

gem "bootsnap", require: false
gem "cssbundling-rails" # https://github.com/rails/cssbundling-rails
gem "jbuilder" # https://github.com/rails/jbuilder
gem "jsbundling-rails" # https://github.com/rails/jsbundling-rails
gem "propshaft" # https://github.com/rails/propshaft
gem "stimulus-rails" # https://stimulus.hotwired.dev
gem "turbo-rails" # https://turbo.hotwired.dev
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]
# gem "kredis" # https://github.com/rails/kredis

gem "nokogiri", "~> 1.14"

gem "avo",       "~> 2.28.0"
gem "chartkick", "~> 5.0.1"
gem "pundit",    "~> 2.3.0"
gem "ransack",   ">= 2.6.0"

group :development, :test do
  # rubocop:disable Bundler/GemVersion
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[mri mingw x64_mingw]
  # rubocop:enable Bundler/GemVersion

  gem "pry"
  gem "pry-rails"
end

group :development do
  # gem "better_errors", "~> 2.9.1"
  # gem "binding_of_caller", "~> 1.0" # Optional, but necessary to use Better Errors' advanced
  #                                   # features (REPL, local/instance variable inspection, pretty
  #                                   # stack frame names).

  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

group :test do
  # rubocop:disable Bundler/GemVersion
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  # gem "capybara"
  # gem "selenium-webdriver"
  # gem "webdrivers"
  # rubocop:enable Bundler/GemVersion
end
