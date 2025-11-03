운영진 입장에서 기획-디자인 및 기획-개발자 매칭 시스템 관리가 불편한 상황을 개선하는 플랫폼을 기획합니다.

아래는 주요 요구사항입니다:

- **Plan 챌린저(기획자)**
  - 본인 기획 소개 (Notion 링크 제공)
  - 지원자 선별 및 확정, 지원 상태: DRAFT, PENDING, REJECTED, ACCEPTED
  - UMC 중앙운영사무국의 최소 선발 규칙 준수
  - 지원서 폼 생성(객관식, 주관식, 필수 지정 가능)

- **Develop 챌린저(개발자)**
  - 본인 지부 프로젝트 조회 및 지원
  - 모집 일정 자동 준수
  - 한 번 제출한 지원서는 철회 불가
  - 동차 지원 내역 및 원본 지원서 조회 가능
  - 임시 저장 기능 제공

- **운영진(관리자)**
  - 지원 현황/통계 조회
  - 차수별 팀 구성 및 결과 발표(합격자 색상 구분, TO 표시)
  - 랜덤 매칭 기능(1~3차 매칭 실패 시 자동 매칭)
  - 탈부자 관리(매칭 후 탈부자 발생 시 관리 가능)
  - 지원서 삭제, 지원 프로젝트별/차수별 지원자 상태 변경
  - 기획별 TO 변경 가능

### 화면 목록:

- 로그인
- 비밀번호 변경
- 지원서 폼 생성
- 지원서 작성/제출(프로젝트 목록에서 진입, 독립 접근 불가, 임시저장/제출 버튼 필요)
- 지부별 프로젝트 조회(지원하기 버튼, TO 모두 찰 경우 비활성화, 각 스택별 TO 표시)
- 관리자 화면(지원 현황, 배치 결과, 개인별 지원내역, 지원서 상태 변경, TO 변경)

### Backend OpenAPI Json

- 아래에 JSON format으로 제공, 요구사항 처리 시 참고할 것.

```json
{
  "openapi": "3.0.0",
  "paths": {
    "/v1/auth/register": {
      "post": {
        "description": "관리자 전용입니다. 사용자 정보를 입력해서 새로운 사용자를 생성합니다.",
        "operationId": "AuthV1Controller_register_v1",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateUserRequestDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[ADMIN] 회원가입",
        "tags": ["인증/인가"]
      }
    },
    "/v1/auth/login": {
      "post": {
        "description": "학교, 학번, 비밀번호로 로그인 합니다.AccessToken만 제공되며, 유효기간은 24시간 입니다.",
        "operationId": "AuthV1Controller_login_v1",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginRequestDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "로그인",
        "tags": ["인증/인가"]
      }
    },
    "/v1/auth/deactivate/{userId}": {
      "delete": {
        "description": "특정 챌린저를 삭제합니다. 관리자만 가능합니다.",
        "operationId": "AuthV1Controller_deleteAccount_v1",
        "parameters": [
          {
            "name": "userId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[ADMIN] 회원 탈퇴",
        "tags": ["인증/인가"]
      }
    },
    "/v1/auth/change-password": {
      "post": {
        "description": "로그인 되어 있는 사용자가, 현재 비밀번호를 올바르게 제공했을 때 새 비밀번호로 변경이 가능합니다.",
        "operationId": "AuthV1Controller_changePassword_v1",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ChangePasswordRequestDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "비밀번호 변경",
        "tags": ["인증/인가"]
      }
    },
    "/v1/auth/schools": {
      "get": {
        "description": "등록된 학교들의 목록을 조회합니다.",
        "operationId": "AuthV1Controller_getSchoolList_v1",
        "parameters": [],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "학교 목록 조회",
        "tags": ["인증/인가"]
      }
    },
    "/v1/auth/school": {
      "post": {
        "description": "새로운 학교를 생성합니다.",
        "operationId": "AuthV1Controller_createSchool_v1",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateSchoolRequestDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "학교 생성",
        "tags": ["인증/인가"]
      }
    },
    "/v1/auth/drop-all/{type}": {
      "post": {
        "operationId": "AuthV1Controller_dropAll_v1",
        "parameters": [
          {
            "name": "test/type",
            "required": true,
            "in": "path",
            "description": "삭제할 데이터 타입",
            "schema": {
              "enum": ["school", "challenger"],
              "type": "string"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[TEST] 모든 데이터 삭제",
        "tags": ["인증/인가", "테스트 API"]
      }
    },
    "/v1/auth/test/school/init": {
      "post": {
        "description": "기존 학교는 모두 drop 처리합니다.",
        "operationId": "AuthV1Controller_initSchool_v1",
        "parameters": [],
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[TEST] 9th Leo 지부 학교 추가",
        "tags": ["인증/인가", "테스트 API"]
      }
    },
    "/v1/auth/test/user/init": {
      "post": {
        "operationId": "AuthV1Controller_createSampleUser_v1",
        "parameters": [],
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[TEST] 유령 박경운 생성",
        "tags": ["인증/인가", "테스트 API"]
      }
    },
    "/auth/test/protected": {
      "get": {
        "description": "GET 요청을 보냈을 때 JwtGuard를 통과했는지 확인합니다.",
        "operationId": "AuthTestController_tokenCheck",
        "parameters": [],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[TEST] 토큰 검증 API",
        "tags": ["테스트 API"]
      }
    },
    "/auth/test/token": {
      "get": {
        "description": "Query String으로 userId를 첨부하세요.",
        "operationId": "AuthTestController_getTestToken",
        "parameters": [
          {
            "name": "userId",
            "required": true,
            "in": "query",
            "description": "토큰을 생성할 사용자 ID",
            "schema": {
              "example": "1",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[TEST] 테스트 토큰 생성 API",
        "tags": ["테스트 API"]
      }
    },
    "/auth/test/cookie": {
      "get": {
        "operationId": "AuthTestController_checkCookie",
        "parameters": [],
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[TEST] 요청에 포함된 쿠키 반환",
        "tags": ["테스트 API"]
      }
    },
    "/v1/users/me": {
      "get": {
        "operationId": "UsersV1Controller_getLoggedInUserInfo_v1",
        "parameters": [],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "tags": ["사용자"]
      }
    },
    "/test/error/exception": {
      "get": {
        "description": "Query String에 Error type을 명시하면 됩니다.",
        "operationId": "ErrorTestController_raiseError",
        "parameters": [
          {
            "name": "type",
            "required": true,
            "in": "query",
            "schema": {
              "example": "CUSTOM",
              "type": "string",
              "enum": ["HTTP", "NORMAL", "CUSTOM"]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "string"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "Normal Error 발생 테스트 API",
        "tags": ["테스트 API"]
      }
    },
    "/test/db/mongo/create-test": {
      "post": {
        "deprecated": true,
        "operationId": "DBTestController_mongoCreateTest",
        "parameters": [],
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[TEST] mongoDB test, 현재 비어있음",
        "tags": ["테스트 API"]
      }
    },
    "/test/basic/mirror": {
      "get": {
        "operationId": "BasicTestController_mirror",
        "parameters": [],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[TEST] 요청의 Body & Query 그대로 반환",
        "tags": ["테스트 API"]
      }
    },
    "/test/basic/hello": {
      "get": {
        "description": "서버 상태 확인 및 ApiBaseResponse를 확인하기 위한 API 입니다.\n    \nHello World!를 return 합니다.",
        "operationId": "BasicTestController_getHello",
        "parameters": [],
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "string"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[TEST] Health-Check API",
        "tags": ["테스트 API"]
      }
    },
    "/test/basic/als": {
      "get": {
        "operationId": "BasicTestController_getRequestContext",
        "parameters": [],
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RequestContext"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[TEST] Async Local Storage Context 반환",
        "tags": ["테스트 API"]
      }
    },
    "/v1/projects": {
      "get": {
        "description": "",
        "operationId": "ProjectsController_getProjectList_v1",
        "parameters": [],
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "프로젝트 목록 조회",
        "tags": ["프로젝트"]
      },
      "post": {
        "description": "Plan 챌린저만 가능합니다.",
        "operationId": "ProjectsController_createProject_v1",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateProjectRequestDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "새로운 프로젝트 생성",
        "tags": ["프로젝트"]
      }
    },
    "/v1/projects/{projectId}": {
      "get": {
        "description": "",
        "operationId": "ProjectsController_getProjectDetails_v1",
        "parameters": [
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "프로젝트 상세 보기",
        "tags": ["프로젝트"]
      },
      "patch": {
        "description": "프로젝트 내용을 수정합니다.",
        "operationId": "ProjectsController_updateProject_v1",
        "parameters": [
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UpdateProjectRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "프로젝트 내용 수정",
        "tags": ["프로젝트"]
      },
      "delete": {
        "description": "[ADMIN] 프로젝트를 삭제합니다.",
        "operationId": "ProjectsController_deleteProject_v1",
        "parameters": [
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "description": "폼을 생성할 프로젝트의 ID",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "프로젝트 삭제",
        "tags": ["프로젝트"]
      }
    },
    "/v1/projects/{projectId}/form": {
      "post": {
        "description": "폼을 먼저 생성하고, 질문은 formId를 제공해서 추가해야 합니다.즉 FE에는, 폼 추가하기 버튼을 클릭하면 현재 API를 통해 생성한 후, 별도 페이지에서 formId를 받아서 추가해야 합니다.폼을 생성할 떄, 가능한 차수를 기입하여야 합니다.",
        "operationId": "ProjectsController_createProjectApplicationForm_v1",
        "parameters": [
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "description": "폼을 생성할 프로젝트의 ID",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateFormRequestDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "프로젝트 지원용 폼 생성 (틀 생성, 질문은 따로)",
        "tags": ["프로젝트"]
      }
    },
    "/v1/projects/{projectId}/form/{formId}": {
      "get": {
        "description": "",
        "operationId": "ProjectsController_getProjectApplicationForm_v1",
        "parameters": [
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "formId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            }
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "formId에 해당하는 form의 정보를 조회",
        "tags": ["프로젝트"]
      },
      "delete": {
        "description": "",
        "operationId": "ProjectsController_deleteProjectApplicationForm_v1",
        "parameters": [
          {
            "name": "formId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "formId로 폼을 삭제",
        "tags": ["프로젝트"]
      },
      "patch": {
        "description": "",
        "operationId": "ProjectsController_editProjectApplicationForm_v1",
        "parameters": [
          {
            "name": "formId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UpdateFormRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "formId로 폼 수정",
        "tags": ["프로젝트"]
      }
    },
    "/v1/projects/{projectId}/forms/{formId}/questions": {
      "post": {
        "description": "",
        "operationId": "ProjectsController_addQuestionsToForm_v1",
        "parameters": [
          {
            "name": "formId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateQuestionRequestDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "form에 질문 추가",
        "tags": ["프로젝트"]
      },
      "patch": {
        "description": "",
        "operationId": "ProjectsController_editQuestionsFromForm_v1",
        "parameters": [
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "formId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UpdateQuestionRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "form에 질문 수정",
        "tags": ["프로젝트"]
      }
    },
    "/v1/projects/{projectId}/form/{formId}/apply": {
      "post": {
        "description": "",
        "operationId": "ProjectsController_applyToProject_v1",
        "parameters": [
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "formId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ApplyToProjectRequestDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "프로젝트 지원하기",
        "tags": ["프로젝트"]
      }
    },
    "/v1/projects/{projectId}/apply/{applicationId}": {
      "get": {
        "description": "",
        "operationId": "ProjectsController_getApplication_v1",
        "parameters": [
          {
            "name": "applicationId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "schema": {}
          }
        ],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "applicationId로 지원서 조회하기",
        "tags": ["프로젝트"]
      },
      "delete": {
        "description": "",
        "operationId": "ProjectsController_deleteApplicationForm_v1",
        "parameters": [
          {
            "name": "applicationId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "schema": {}
          }
        ],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "applicationId로 지원서 삭제하기",
        "tags": ["프로젝트"]
      }
    },
    "/v1/projects/{projectId}/apply/{applicationId}/status": {
      "post": {
        "operationId": "ProjectsController_changeApplicationStatus_v1",
        "parameters": [
          {
            "name": "projectId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "applicationId",
            "required": true,
            "in": "path",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ChangeApplicationStatus"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "tags": ["프로젝트"]
      }
    },
    "/v1/projects/matching-round/current": {
      "get": {
        "description": "현재 시간을 기준으로 매칭 세션을 가져옵니다. 여러 개의 매칭 세션이 있을 경우, 그 중 시작시간이 가장 늦은 것을 기준으로 가져옵니다.",
        "operationId": "ProjectsController_getCurrentMatchingRound_v1",
        "parameters": [],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "현재 매칭 세션 가져오기",
        "tags": ["프로젝트"]
      }
    },
    "/v1/projects/matching-round": {
      "post": {
        "description": "이름, 시작 시간, 종료 시간을 기준으로 매칭 라운드를 생성합니다.",
        "operationId": "ProjectsController_createMatchingRound_v1",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ApplyToQuestionRequestDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "매칭 라운드 생성",
        "tags": ["프로젝트"]
      }
    },
    "/v1/projects/test/matching-round": {
      "post": {
        "description": "현재 시간 기준 1시간 전부터 1시간 후까지의 매칭 라운드를 생성합니다.",
        "operationId": "ProjectsController_testCreateMatchingRound_v1",
        "parameters": [],
        "responses": {
          "201": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "[테스트용] 매칭 라운드 생성",
        "tags": ["프로젝트", "테스트 API"]
      }
    }
  },
  "info": {
    "title": "UPMS API Docs",
    "description": "## UMC Project Matching System, UPMS\n\n#### Made By : 중앙대학교 하늘/박경운, 보니/정보운\n\n##### Suppoted By : 중앙대학교 벨라/황지원",
    "version": "0.1.0",
    "contact": {},
    "license": {
      "name": "MIT",
      "url": "https://opensource.org/license/mit/"
    }
  },
  "tags": [
    {
      "name": "프로젝트",
      "description": "APIs"
    },
    {
      "name": "인증/인가",
      "description": "APIs"
    },
    {
      "name": "사용자",
      "description": "APIs"
    },
    {
      "name": "테스트 API",
      "description": "APIs"
    }
  ],
  "servers": [
    {
      "url": "http://localhost:9999",
      "description": "Local"
    },
    {
      "url": "https://api.upms.kyeoungwoon.kr",
      "description": "Production"
    }
  ],
  "components": {
    "securitySchemes": {
      "bearer": {
        "scheme": "bearer",
        "bearerFormat": "JWT",
        "type": "http"
      }
    },
    "schemas": {
      "CreateUserRequestDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "이름"
          },
          "nickname": {
            "type": "string",
            "description": "닉네임"
          },
          "introduction": {
            "type": "string",
            "description": "사용자 한 줄 소개",
            "example": "나는 말하는 감자입니다."
          },
          "school": {
            "type": "string",
            "description": "학교명"
          },
          "studentId": {
            "type": "string",
            "description": "학번"
          },
          "password": {
            "type": "string",
            "description": "비밀번호"
          },
          "part": {
            "type": "string",
            "description": "챌린저 파트",
            "enum": ["PLAN", "DESIGN", "WEB", "ANDROID", "IOS", "SPRINGBOOT", "NODEJS", "ADMIN"]
          }
        },
        "required": ["name", "nickname", "school", "studentId", "password", "part"]
      },
      "LoginRequestDto": {
        "type": "object",
        "properties": {
          "school": {
            "type": "string"
          },
          "studentId": {
            "type": "string"
          },
          "password": {
            "type": "string"
          }
        },
        "required": ["school", "studentId", "password"]
      },
      "ChangePasswordRequestDto": {
        "type": "object",
        "properties": {
          "currentPassword": {
            "type": "string"
          },
          "newPassword": {
            "type": "string"
          }
        },
        "required": ["currentPassword", "newPassword"]
      },
      "CreateSchoolRequestDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "handle": {
            "type": "string"
          }
        },
        "required": ["name", "handle"]
      },
      "RequestContext": {
        "type": "object",
        "properties": {}
      },
      "CreateProjectRequestDto": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "link": {
            "type": "string"
          },
          "planId": {
            "type": "string"
          }
        },
        "required": ["title", "description", "link", "planId"]
      },
      "UpdateProjectRequestDto": {
        "type": "object",
        "properties": {
          "projectId": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "link": {
            "type": "string"
          }
        },
        "required": ["projectId"]
      },
      "CreateFormRequestDto": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "required": ["title"]
      },
      "UpdateFormRequestDto": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        }
      },
      "CreateFormQuestionDto": {
        "type": "object",
        "properties": {
          "questionNo": {
            "type": "number",
            "description": "질문 번호",
            "example": 1
          },
          "title": {
            "type": "string",
            "description": "질문 제목",
            "example": "예시 질문입니다."
          },
          "description": {
            "type": "string",
            "description": "질문에 대한 설명입니다.",
            "example": "질문 설명 예시입니다."
          },
          "type": {
            "type": "string",
            "description": "질문 유형",
            "enum": ["SINGLE_CHOICE", "MULTIPLE_CHOICE", "SUBJECTIVE"],
            "example": "SINGLE_CHOICE"
          },
          "isRequired": {
            "type": "boolean",
            "description": "질문 필수응답 여부"
          },
          "options": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": ["questionNo", "title", "description", "type", "isRequired", "options"]
      },
      "CreateQuestionRequestDto": {
        "type": "object",
        "properties": {
          "questions": {
            "minItems": 1,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CreateFormQuestionDto"
            }
          }
        },
        "required": ["questions"]
      },
      "UpdateFormQuestionDto": {
        "type": "object",
        "properties": {
          "questionNo": {
            "type": "number",
            "description": "질문 번호",
            "example": 1
          },
          "title": {
            "type": "string",
            "description": "질문 제목",
            "example": "예시 질문입니다."
          },
          "description": {
            "type": "string",
            "description": "질문에 대한 설명입니다.",
            "example": "질문 설명 예시입니다."
          },
          "isRequired": {
            "type": "boolean",
            "description": "질문 필수응답 여부"
          },
          "id": {
            "type": "string"
          },
          "options": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": ["id"]
      },
      "UpdateQuestionRequestDto": {
        "type": "object",
        "properties": {
          "questions": {
            "minItems": 1,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UpdateFormQuestionDto"
            }
          }
        },
        "required": ["questions"]
      },
      "AnswerDto": {
        "type": "object",
        "properties": {
          "questionId": {
            "type": "string"
          },
          "value": {
            "minItems": 1,
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": ["questionId", "value"]
      },
      "ApplyToProjectRequestDto": {
        "type": "object",
        "properties": {
          "answers": {
            "minItems": 1,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AnswerDto"
            }
          }
        },
        "required": ["answers"]
      },
      "ChangeApplicationStatus": {
        "type": "object",
        "properties": {
          "status": {
            "type": "string",
            "description": "변경할 지원 상태",
            "enum": ["DRAFT", "SUBMITTED", "CONFIRMED", "REJECTED"],
            "example": "CONFIRMED"
          }
        },
        "required": ["status"]
      },
      "ApplyToQuestionRequestDto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "매칭 라운드 이름",
            "example": "1차 매칭"
          },
          "startDatetime": {
            "format": "date-time",
            "type": "string",
            "description": "매칭 시작 일시, UTC 시간으로 제공하세요.",
            "example": "2024-07-01T10:00:00Z"
          },
          "endDatetime": {
            "format": "date-time",
            "type": "string",
            "description": "매칭 종료 일시, UTC 시간으로 제공하세요.",
            "example": "2024-07-01T10:00:00Z"
          }
        },
        "required": ["name", "startDatetime", "endDatetime"]
      }
    }
  }
}
```

**Instruction:**  
위 요구사항을 바탕으로

1. 데이터베이스 엔티티 및 관계 설계
2. 핵심 워크플로우에 대한 API 구조 제안
3. 역할별 사용자 플로우 정리
4. 지원서 상태 및 전이 요약 표 생성
5. API Request의 경우 OpenAPI 문서 참고.

**모든 답변과 설명, 도표는 반드시 한국어로 작성해주세요.**
