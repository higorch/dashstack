FROM node:lts

# Define o diretório de trabalho
WORKDIR /var/www/html/frontend/dashstack

# Atualiza os repositórios e instala Node.js + npm
RUN apt-get update && \
    apt-get install -y nginx

# Copia os arquivos da aplicação para dentro do container
COPY . .

COPY .docker/nginx/nginx.conf /etc/nginx

# Expor a porta 80 dentro do container
EXPOSE 80

# Inicia o NGINX
CMD ["nginx", "-g", "daemon off;"]