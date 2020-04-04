import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { Post } from "./post.entity";
import { PostService } from "./post.service";
import { PostInput } from "./post.input";

import { RelayedQuery, RelayLimitOffset, RelayLimitOffsetArgs } from 'auto-relay';

@Resolver(of => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  /*
  @Query(() => [Post])
  async posts() {
    return this.postService.getPosts();
  } */

  @RelayedQuery(() => Post)
  async allPosts(
    @RelayLimitOffset() {limit, offset}: RelayLimitOffsetArgs
  ): Promise<[Post[], number]> {
    return this.postService.page(offset, limit)
  }

  @Mutation(() => Post)
  async createPost(@Args("data") data: PostInput) {
    return this.postService.createPost(data);
  }
}
