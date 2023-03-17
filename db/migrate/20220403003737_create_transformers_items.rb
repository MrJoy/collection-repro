# frozen_string_literal: true

class CreateTransformersItems < ActiveRecord::Migration[7.0]
  def change
    create_table :transformers_items do |t|
      t.string :name

      t.date :released_at

      t.timestamps
    end
  end
end
