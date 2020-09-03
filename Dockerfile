FROM nginx:1.19.2

ENV VIRTUAL_HOST www.darrylforbes.me,darrylforbes.me
ENV LETSENCRYPT_HOST www.darrylforbes.me,darrylforbes.me

RUN rm -rf /usr/share/nginx/
COPY nginx.conf /etc/nginx/nginx.conf
