import { Repository } from "typeorm";

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Post } from "./post.entity";
import { PostInput } from "./post.input";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  async createPost(data: PostInput): Promise<Post> {
    let post = new Post();
    post.title = data.title;
    post.model = data.model;
    post.body = data.body;

    await this.postRepository.save(post);

    return post;
  }

  async getPosts() {
    return await this.postRepository.find();
  }

  async page(offset, limit): Promise<[Post[], number]> {
    return this.postRepository.findAndCount({ 
      where: { 
        // any business logic you might have
      },
      skip: offset,
      take: limit
    })
  }
}
