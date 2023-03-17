# frozen_string_literal: true

class MonthField < Avo::Fields::TextField
  attr_reader :picker_format
  attr_reader :disable_mobile
  attr_reader :format
  attr_reader :picker_options

  def initialize(id, **args, &)
    super(id, **args, &)

    add_string_prop args, :picker_format, "Y-m"
    add_string_prop args, :format, "yyyy-LL"
    add_boolean_prop args, :disable_mobile
    add_object_prop args, :picker_options
  end

  def formatted_value
    return if value.blank?

    value.iso8601
  end

  def edit_formatted_value
    return nil if value.nil?

    value.iso8601
  end
end
