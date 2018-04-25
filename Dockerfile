FROM scratch

ADD ./build/www /build/www/
COPY Caddyfile /
COPY caddy-linux /

EXPOSE 8000
ENTRYPOINT ["/caddy-linux"]
