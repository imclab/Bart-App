class User < ActiveRecord::Base
  attr_accessible :name, :phone_number
  
  validates :name, :phone_number, presence: true
  validates :name, length: {maximum: 12}
  
  validates :phone_number, numericality: { only_integer: true }
  validates :phone_number, length: { is: 10 }
  
   def create_session_token  
     token = SecureRandom.urlsafe_base64  
     self.session_token = token
     self.save!
     token
   end
end