class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :authentication_keys => [:name]
  has_many :books, dependent: :destroy
  has_many :post_comments, dependent: :destroy
  has_many :favorites, dependent: :destroy

  has_many :active_relationships, class_name: "Relationship", foreign_key: "follower_id", dependent: :destroy
  has_many :passive_relationships, class_name: "Relationship", foreign_key: "followed_id", dependent: :destroy
  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower

  has_many :entries, dependent: :destroy
  has_many :messages, dependent: :destroy

  has_many :group_users, dependent: :destroy

  attachment :profile_image

  validates:name,
    uniqueness: true,
    length: { in: 2..20 }
  validates:introduction,
    length: { maximum: 50 }

  def follow(user_id)
    active_relationships.create(followed_id: user_id)
  end
  def unfollow(user_id)
    active_relationships.find_by(followed_id: user_id).destroy
  end
  def following?(user)
    following.include?(user)
  end

  def ratio(after,before)
    if before == 0
      "前日(前週)の投稿が0のため計算できません"
    else
    (after / before.to_f * 100).round.to_s + "%"
    end
  end

  def week_date(num)
    books.where(created_at: Date.today.ago(num.days).all_day).count
  end
end
