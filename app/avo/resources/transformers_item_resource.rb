# frozen_string_literal: true

class TransformersItemResource < Avo::BaseResource
  heading "Figure"
  field :name,        as: :text,                      sortable: true
  field :released_at, as: :month, hide_on: %i[index], sortable: true

  field :created_at, as: :date, hide_on: %i[show new edit], sortable: true, format: "yyyy-MM-dd"
  field :updated_at, as: :date, hide_on: %i[show new edit], sortable: true, format: "yyyy-MM-dd"
end
