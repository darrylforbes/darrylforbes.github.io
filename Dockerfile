FROM nginx:1.19.2

RUN rm -rf /usr/share/nginx/
COPY nginx.conf /etc/nginx/nginx.conf
