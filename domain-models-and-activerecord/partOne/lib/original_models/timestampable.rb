# frozen_string_literal: true

module Timestampable
  private

  def update_timestamps
    now = Time.now
    @updated_at = now
    @created_at ||= now
  end
end
