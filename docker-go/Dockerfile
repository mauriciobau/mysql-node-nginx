FROM golang:1.15 as builder

RUN mkdir -p /app
WORKDIR /app

ENV GOPROXY https://proxy.golang.org,direct

COPY . .

ENV CGO_ENABLED=0

RUN GOOS=linux go build -ldflags="-s -w" ./app.go 

FROM scratch

WORKDIR /app

COPY --from=builder /app/app .

CMD ["/app/app"]