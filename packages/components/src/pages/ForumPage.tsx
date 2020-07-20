import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useServices } from '../services';
import { ForumPosts } from '../schemas/Forum.schema';

export const ForumPage: React.FC = () => {
  const [posts, setPosts] = useState<ForumPosts[]>([]);
  const { forumService } = useServices();

  const fetchPosts = async () => {
    const data = await forumService.fetchPosts(1);
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return <Text> {posts.length} </Text>;
};

export default ForumPage;
