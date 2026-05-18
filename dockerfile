FROM ruby:3.2-slim

# 依存パッケージのインストール
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll

# Gemfileをコピーしてインストール
COPY Gemfile* ./
RUN bundle install

# その他のファイルをコピー
COPY . .

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--force_polling"]
