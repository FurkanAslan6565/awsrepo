# Temel imaj
FROM node:18

# Uygulama dizini oluştur
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulama portu
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]
