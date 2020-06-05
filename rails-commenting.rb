# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) it is the logical center of my blogpost application that allows me to coordinates the interaction between the user, the views, and the model.
class BlogPostsController < ApplicationController
  def index
    # 2)it shows all the posts that are created in Blogpost model.
    @posts = BlogPost.all
  end

  def show
    # 3)it shows a specific post given by id.
    @post = BlogPost.find(params[:id])
  end

  # 4) new method just needs to exist to route to the correct view.
  def new
  end

  def create
    # 5)it defines an instance variable that will create a new insatnce of a model with a title and a content by the user.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.delete
      redirect_to blog_posts_path
    else
      # 6)if destory method fails, it takes the user to the specific post given by id.
      redirect_to blog_post_path(@post)
    end
  end

  # 7)private methods can only be called within class in which they are defined. This method can't be called with an explicit receiver. 
  private
  def blog_post_params
    # 8)the blogpost application will require a title and a content.
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) BlogPost inherits from the Application Record.
class BlogPost < ApplicationRecord
  # 10) describing the relationship to the model of BlogPost and Comment. BlogPost has many comments. Comments have to be pluar.
  has_many :comments
end
