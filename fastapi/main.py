# main.py

from fastapi import FastAPI
from fastapi.responses import JSONResponse

# 1. FastAPI 앱 인스턴스 생성
app = FastAPI(
    debug=True, )


@app.get("/")
def read_root():
    # 3. JSON 형태로 응답 반환
    return {"Hello": "World"}
