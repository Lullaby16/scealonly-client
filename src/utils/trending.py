def calculate_trend_score(views, likes, comments):
  # calculate the trend score using a weighted average of the engagement metrics
  trend_score = (views * 0.5) + (likes * 0.3) + (comments * 0.2)
  return trend_score

def get_trending_videos(videos):
  # calculate the trend score for each video
  for video in videos:
    video['trend_score'] = calculate_trend_score(video['views'], video['likes'], video['comments'])
  
  # sort the videos by trend score in descending order
  sorted_videos = sorted(videos, key=lambda x: x['trend_score'], reverse=True)
  
  # return the top 10 trending videos
  return sorted_videos[:10]

def main():
  # example usage
  videos = [{'title': 'Video 1', 'views': 100, 'likes': 50, 'comments': 20},
            {'title': 'Video 2', 'views': 50, 'likes': 30, 'comments': 10},
            {'title': 'Video 3', 'views': 150, 'likes': 70, 'comments': 30}]
  trending_videos = get_trending_videos(videos)
  print(trending_videos)

if __name__ == '__main__':
  main()
