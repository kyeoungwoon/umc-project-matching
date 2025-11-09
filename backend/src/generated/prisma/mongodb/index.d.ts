
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ProjectTo
 * 
 */
export type ProjectTo = $Result.DefaultSelection<Prisma.$ProjectToPayload>
/**
 * Model Challenger
 * 
 */
export type Challenger = $Result.DefaultSelection<Prisma.$ChallengerPayload>
/**
 * Model MatchingRound
 * 
 */
export type MatchingRound = $Result.DefaultSelection<Prisma.$MatchingRoundPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Form
 * 
 */
export type Form = $Result.DefaultSelection<Prisma.$FormPayload>
/**
 * Model FormQuestion
 * 
 */
export type FormQuestion = $Result.DefaultSelection<Prisma.$FormQuestionPayload>
/**
 * Model ProjectMember
 * 
 */
export type ProjectMember = $Result.DefaultSelection<Prisma.$ProjectMemberPayload>
/**
 * Model FormAnswer
 * 
 */
export type FormAnswer = $Result.DefaultSelection<Prisma.$FormAnswerPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserPartEnum: {
  PLAN: 'PLAN',
  DESIGN: 'DESIGN',
  WEB: 'WEB',
  ANDROID: 'ANDROID',
  IOS: 'IOS',
  SPRINGBOOT: 'SPRINGBOOT',
  NODEJS: 'NODEJS',
  ADMIN: 'ADMIN'
};

export type UserPartEnum = (typeof UserPartEnum)[keyof typeof UserPartEnum]


export const UserStatusEnum: {
  ACTIVE: 'ACTIVE',
  DROPPED: 'DROPPED',
  MATCHED: 'MATCHED',
  PENDING: 'PENDING'
};

export type UserStatusEnum = (typeof UserStatusEnum)[keyof typeof UserStatusEnum]


export const QuestionTypeEnum: {
  SINGLE_CHOICE: 'SINGLE_CHOICE',
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  SUBJECTIVE: 'SUBJECTIVE'
};

export type QuestionTypeEnum = (typeof QuestionTypeEnum)[keyof typeof QuestionTypeEnum]


export const ApplicationStatusEnum: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  CONFIRMED: 'CONFIRMED',
  REJECTED: 'REJECTED'
};

export type ApplicationStatusEnum = (typeof ApplicationStatusEnum)[keyof typeof ApplicationStatusEnum]


export const UserRoleEnum: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRoleEnum = (typeof UserRoleEnum)[keyof typeof UserRoleEnum]


export const GenderEnum: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type GenderEnum = (typeof GenderEnum)[keyof typeof GenderEnum]


export const ChallengerChapterEnum: {
  LEO_9TH: 'LEO_9TH'
};

export type ChallengerChapterEnum = (typeof ChallengerChapterEnum)[keyof typeof ChallengerChapterEnum]

}

export type UserPartEnum = $Enums.UserPartEnum

export const UserPartEnum: typeof $Enums.UserPartEnum

export type UserStatusEnum = $Enums.UserStatusEnum

export const UserStatusEnum: typeof $Enums.UserStatusEnum

export type QuestionTypeEnum = $Enums.QuestionTypeEnum

export const QuestionTypeEnum: typeof $Enums.QuestionTypeEnum

export type ApplicationStatusEnum = $Enums.ApplicationStatusEnum

export const ApplicationStatusEnum: typeof $Enums.ApplicationStatusEnum

export type UserRoleEnum = $Enums.UserRoleEnum

export const UserRoleEnum: typeof $Enums.UserRoleEnum

export type GenderEnum = $Enums.GenderEnum

export const GenderEnum: typeof $Enums.GenderEnum

export type ChallengerChapterEnum = $Enums.ChallengerChapterEnum

export const ChallengerChapterEnum: typeof $Enums.ChallengerChapterEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Challengers
 * const challengers = await prisma.challenger.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Challengers
   * const challengers = await prisma.challenger.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.challenger`: Exposes CRUD operations for the **Challenger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challengers
    * const challengers = await prisma.challenger.findMany()
    * ```
    */
  get challenger(): Prisma.ChallengerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchingRound`: Exposes CRUD operations for the **MatchingRound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchingRounds
    * const matchingRounds = await prisma.matchingRound.findMany()
    * ```
    */
  get matchingRound(): Prisma.MatchingRoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formQuestion`: Exposes CRUD operations for the **FormQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormQuestions
    * const formQuestions = await prisma.formQuestion.findMany()
    * ```
    */
  get formQuestion(): Prisma.FormQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMember`: Exposes CRUD operations for the **ProjectMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMembers
    * const projectMembers = await prisma.projectMember.findMany()
    * ```
    */
  get projectMember(): Prisma.ProjectMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formAnswer`: Exposes CRUD operations for the **FormAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormAnswers
    * const formAnswers = await prisma.formAnswer.findMany()
    * ```
    */
  get formAnswer(): Prisma.FormAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Challenger: 'Challenger',
    MatchingRound: 'MatchingRound',
    Project: 'Project',
    Form: 'Form',
    FormQuestion: 'FormQuestion',
    ProjectMember: 'ProjectMember',
    FormAnswer: 'FormAnswer',
    Application: 'Application',
    School: 'School'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "challenger" | "matchingRound" | "project" | "form" | "formQuestion" | "projectMember" | "formAnswer" | "application" | "school"
      txIsolationLevel: never
    }
    model: {
      Challenger: {
        payload: Prisma.$ChallengerPayload<ExtArgs>
        fields: Prisma.ChallengerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerPayload>
          }
          findFirst: {
            args: Prisma.ChallengerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerPayload>
          }
          findMany: {
            args: Prisma.ChallengerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerPayload>[]
          }
          create: {
            args: Prisma.ChallengerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerPayload>
          }
          createMany: {
            args: Prisma.ChallengerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChallengerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerPayload>
          }
          update: {
            args: Prisma.ChallengerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerPayload>
          }
          deleteMany: {
            args: Prisma.ChallengerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChallengerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerPayload>
          }
          aggregate: {
            args: Prisma.ChallengerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenger>
          }
          groupBy: {
            args: Prisma.ChallengerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChallengerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChallengerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ChallengerCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengerCountAggregateOutputType> | number
          }
        }
      }
      MatchingRound: {
        payload: Prisma.$MatchingRoundPayload<ExtArgs>
        fields: Prisma.MatchingRoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchingRoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingRoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchingRoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingRoundPayload>
          }
          findFirst: {
            args: Prisma.MatchingRoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingRoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchingRoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingRoundPayload>
          }
          findMany: {
            args: Prisma.MatchingRoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingRoundPayload>[]
          }
          create: {
            args: Prisma.MatchingRoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingRoundPayload>
          }
          createMany: {
            args: Prisma.MatchingRoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MatchingRoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingRoundPayload>
          }
          update: {
            args: Prisma.MatchingRoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingRoundPayload>
          }
          deleteMany: {
            args: Prisma.MatchingRoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchingRoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatchingRoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingRoundPayload>
          }
          aggregate: {
            args: Prisma.MatchingRoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchingRound>
          }
          groupBy: {
            args: Prisma.MatchingRoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchingRoundGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MatchingRoundFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MatchingRoundAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MatchingRoundCountArgs<ExtArgs>
            result: $Utils.Optional<MatchingRoundCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProjectFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProjectAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Form: {
        payload: Prisma.$FormPayload<ExtArgs>
        fields: Prisma.FormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findFirst: {
            args: Prisma.FormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findMany: {
            args: Prisma.FormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          create: {
            args: Prisma.FormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          createMany: {
            args: Prisma.FormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          update: {
            args: Prisma.FormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          deleteMany: {
            args: Prisma.FormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          aggregate: {
            args: Prisma.FormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForm>
          }
          groupBy: {
            args: Prisma.FormGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FormFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FormAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FormCountArgs<ExtArgs>
            result: $Utils.Optional<FormCountAggregateOutputType> | number
          }
        }
      }
      FormQuestion: {
        payload: Prisma.$FormQuestionPayload<ExtArgs>
        fields: Prisma.FormQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormQuestionPayload>
          }
          findFirst: {
            args: Prisma.FormQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormQuestionPayload>
          }
          findMany: {
            args: Prisma.FormQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormQuestionPayload>[]
          }
          create: {
            args: Prisma.FormQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormQuestionPayload>
          }
          createMany: {
            args: Prisma.FormQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FormQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormQuestionPayload>
          }
          update: {
            args: Prisma.FormQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormQuestionPayload>
          }
          deleteMany: {
            args: Prisma.FormQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FormQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormQuestionPayload>
          }
          aggregate: {
            args: Prisma.FormQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormQuestion>
          }
          groupBy: {
            args: Prisma.FormQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormQuestionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FormQuestionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FormQuestionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FormQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<FormQuestionCountAggregateOutputType> | number
          }
        }
      }
      ProjectMember: {
        payload: Prisma.$ProjectMemberPayload<ExtArgs>
        fields: Prisma.ProjectMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findFirst: {
            args: Prisma.ProjectMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findMany: {
            args: Prisma.ProjectMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          create: {
            args: Prisma.ProjectMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          createMany: {
            args: Prisma.ProjectMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          update: {
            args: Prisma.ProjectMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          aggregate: {
            args: Prisma.ProjectMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMember>
          }
          groupBy: {
            args: Prisma.ProjectMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProjectMemberFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProjectMemberAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProjectMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberCountAggregateOutputType> | number
          }
        }
      }
      FormAnswer: {
        payload: Prisma.$FormAnswerPayload<ExtArgs>
        fields: Prisma.FormAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>
          }
          findFirst: {
            args: Prisma.FormAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>
          }
          findMany: {
            args: Prisma.FormAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>[]
          }
          create: {
            args: Prisma.FormAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>
          }
          createMany: {
            args: Prisma.FormAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FormAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>
          }
          update: {
            args: Prisma.FormAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>
          }
          deleteMany: {
            args: Prisma.FormAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FormAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormAnswerPayload>
          }
          aggregate: {
            args: Prisma.FormAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormAnswer>
          }
          groupBy: {
            args: Prisma.FormAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormAnswerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FormAnswerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FormAnswerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FormAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<FormAnswerCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ApplicationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ApplicationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SchoolFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SchoolAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    challenger?: ChallengerOmit
    matchingRound?: MatchingRoundOmit
    project?: ProjectOmit
    form?: FormOmit
    formQuestion?: FormQuestionOmit
    projectMember?: ProjectMemberOmit
    formAnswer?: FormAnswerOmit
    application?: ApplicationOmit
    school?: SchoolOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ChallengerCountOutputType
   */

  export type ChallengerCountOutputType = {
    applications: number
    projects: number
    ProjectMember: number
  }

  export type ChallengerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | ChallengerCountOutputTypeCountApplicationsArgs
    projects?: boolean | ChallengerCountOutputTypeCountProjectsArgs
    ProjectMember?: boolean | ChallengerCountOutputTypeCountProjectMemberArgs
  }

  // Custom InputTypes
  /**
   * ChallengerCountOutputType without action
   */
  export type ChallengerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerCountOutputType
     */
    select?: ChallengerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengerCountOutputType without action
   */
  export type ChallengerCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * ChallengerCountOutputType without action
   */
  export type ChallengerCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * ChallengerCountOutputType without action
   */
  export type ChallengerCountOutputTypeCountProjectMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }


  /**
   * Count Type MatchingRoundCountOutputType
   */

  export type MatchingRoundCountOutputType = {
    applicationsInRound: number
  }

  export type MatchingRoundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicationsInRound?: boolean | MatchingRoundCountOutputTypeCountApplicationsInRoundArgs
  }

  // Custom InputTypes
  /**
   * MatchingRoundCountOutputType without action
   */
  export type MatchingRoundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRoundCountOutputType
     */
    select?: MatchingRoundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchingRoundCountOutputType without action
   */
  export type MatchingRoundCountOutputTypeCountApplicationsInRoundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    projectMember: number
    projectForms: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMember?: boolean | ProjectCountOutputTypeCountProjectMemberArgs
    projectForms?: boolean | ProjectCountOutputTypeCountProjectFormsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
  }


  /**
   * Count Type FormCountOutputType
   */

  export type FormCountOutputType = {
    applications: number
    questions: number
  }

  export type FormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | FormCountOutputTypeCountApplicationsArgs
    questions?: boolean | FormCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormCountOutputType
     */
    select?: FormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormQuestionWhereInput
  }


  /**
   * Count Type FormQuestionCountOutputType
   */

  export type FormQuestionCountOutputType = {
    formAnswers: number
  }

  export type FormQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formAnswers?: boolean | FormQuestionCountOutputTypeCountFormAnswersArgs
  }

  // Custom InputTypes
  /**
   * FormQuestionCountOutputType without action
   */
  export type FormQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestionCountOutputType
     */
    select?: FormQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormQuestionCountOutputType without action
   */
  export type FormQuestionCountOutputTypeCountFormAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormAnswerWhereInput
  }


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    formAnswers: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formAnswers?: boolean | ApplicationCountOutputTypeCountFormAnswersArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountFormAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormAnswerWhereInput
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    challengers: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challengers?: boolean | SchoolCountOutputTypeCountChallengersArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountChallengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ProjectTo
   */





  export type ProjectToSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    part?: boolean
    to?: boolean
  }, ExtArgs["result"]["projectTo"]>



  export type ProjectToSelectScalar = {
    part?: boolean
    to?: boolean
  }

  export type ProjectToOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"part" | "to", ExtArgs["result"]["projectTo"]>

  export type $ProjectToPayload = {
    name: "ProjectTo"
    objects: {}
    scalars: {
      part: $Enums.UserPartEnum
      to: number
    }
    composites: {}
  }

  type ProjectToGetPayload<S extends boolean | null | undefined | ProjectToDefaultArgs> = $Result.GetResult<Prisma.$ProjectToPayload, S>





  /**
   * Fields of the ProjectTo model
   */
  interface ProjectToFieldRefs {
    readonly part: FieldRef<"ProjectTo", 'UserPartEnum'>
    readonly to: FieldRef<"ProjectTo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTo without action
   */
  export type ProjectToDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTo
     */
    select?: ProjectToSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTo
     */
    omit?: ProjectToOmit<ExtArgs> | null
  }


  /**
   * Model Challenger
   */

  export type AggregateChallenger = {
    _count: ChallengerCountAggregateOutputType | null
    _min: ChallengerMinAggregateOutputType | null
    _max: ChallengerMaxAggregateOutputType | null
  }

  export type ChallengerMinAggregateOutputType = {
    id: string | null
    umsbChallengerId: string | null
    name: string | null
    nickname: string | null
    introduction: string | null
    school: string | null
    studentId: string | null
    password: string | null
    part: $Enums.UserPartEnum | null
    role: $Enums.UserRoleEnum | null
    gender: $Enums.GenderEnum | null
    chapter: $Enums.ChallengerChapterEnum | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengerMaxAggregateOutputType = {
    id: string | null
    umsbChallengerId: string | null
    name: string | null
    nickname: string | null
    introduction: string | null
    school: string | null
    studentId: string | null
    password: string | null
    part: $Enums.UserPartEnum | null
    role: $Enums.UserRoleEnum | null
    gender: $Enums.GenderEnum | null
    chapter: $Enums.ChallengerChapterEnum | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengerCountAggregateOutputType = {
    id: number
    umsbChallengerId: number
    name: number
    nickname: number
    introduction: number
    school: number
    studentId: number
    password: number
    part: number
    role: number
    gender: number
    chapter: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChallengerMinAggregateInputType = {
    id?: true
    umsbChallengerId?: true
    name?: true
    nickname?: true
    introduction?: true
    school?: true
    studentId?: true
    password?: true
    part?: true
    role?: true
    gender?: true
    chapter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengerMaxAggregateInputType = {
    id?: true
    umsbChallengerId?: true
    name?: true
    nickname?: true
    introduction?: true
    school?: true
    studentId?: true
    password?: true
    part?: true
    role?: true
    gender?: true
    chapter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengerCountAggregateInputType = {
    id?: true
    umsbChallengerId?: true
    name?: true
    nickname?: true
    introduction?: true
    school?: true
    studentId?: true
    password?: true
    part?: true
    role?: true
    gender?: true
    chapter?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChallengerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenger to aggregate.
     */
    where?: ChallengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challengers to fetch.
     */
    orderBy?: ChallengerOrderByWithRelationInput | ChallengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challengers
    **/
    _count?: true | ChallengerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengerMaxAggregateInputType
  }

  export type GetChallengerAggregateType<T extends ChallengerAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenger[P]>
      : GetScalarType<T[P], AggregateChallenger[P]>
  }




  export type ChallengerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengerWhereInput
    orderBy?: ChallengerOrderByWithAggregationInput | ChallengerOrderByWithAggregationInput[]
    by: ChallengerScalarFieldEnum[] | ChallengerScalarFieldEnum
    having?: ChallengerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengerCountAggregateInputType | true
    _min?: ChallengerMinAggregateInputType
    _max?: ChallengerMaxAggregateInputType
  }

  export type ChallengerGroupByOutputType = {
    id: string
    umsbChallengerId: string | null
    name: string
    nickname: string
    introduction: string | null
    school: string
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role: $Enums.UserRoleEnum
    gender: $Enums.GenderEnum | null
    chapter: $Enums.ChallengerChapterEnum | null
    createdAt: Date
    updatedAt: Date
    _count: ChallengerCountAggregateOutputType | null
    _min: ChallengerMinAggregateOutputType | null
    _max: ChallengerMaxAggregateOutputType | null
  }

  type GetChallengerGroupByPayload<T extends ChallengerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengerGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengerGroupByOutputType[P]>
        }
      >
    >


  export type ChallengerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    umsbChallengerId?: boolean
    name?: boolean
    nickname?: boolean
    introduction?: boolean
    school?: boolean
    studentId?: boolean
    password?: boolean
    part?: boolean
    role?: boolean
    gender?: boolean
    chapter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applications?: boolean | Challenger$applicationsArgs<ExtArgs>
    projects?: boolean | Challenger$projectsArgs<ExtArgs>
    ProjectMember?: boolean | Challenger$ProjectMemberArgs<ExtArgs>
    challengerSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    _count?: boolean | ChallengerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenger"]>



  export type ChallengerSelectScalar = {
    id?: boolean
    umsbChallengerId?: boolean
    name?: boolean
    nickname?: boolean
    introduction?: boolean
    school?: boolean
    studentId?: boolean
    password?: boolean
    part?: boolean
    role?: boolean
    gender?: boolean
    chapter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChallengerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "umsbChallengerId" | "name" | "nickname" | "introduction" | "school" | "studentId" | "password" | "part" | "role" | "gender" | "chapter" | "createdAt" | "updatedAt", ExtArgs["result"]["challenger"]>
  export type ChallengerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | Challenger$applicationsArgs<ExtArgs>
    projects?: boolean | Challenger$projectsArgs<ExtArgs>
    ProjectMember?: boolean | Challenger$ProjectMemberArgs<ExtArgs>
    challengerSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    _count?: boolean | ChallengerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChallengerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenger"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      ProjectMember: Prisma.$ProjectMemberPayload<ExtArgs>[]
      challengerSchool: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      umsbChallengerId: string | null
      name: string
      nickname: string
      introduction: string | null
      school: string
      studentId: string
      password: string
      part: $Enums.UserPartEnum
      role: $Enums.UserRoleEnum
      gender: $Enums.GenderEnum | null
      chapter: $Enums.ChallengerChapterEnum | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["challenger"]>
    composites: {}
  }

  type ChallengerGetPayload<S extends boolean | null | undefined | ChallengerDefaultArgs> = $Result.GetResult<Prisma.$ChallengerPayload, S>

  type ChallengerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengerCountAggregateInputType | true
    }

  export interface ChallengerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenger'], meta: { name: 'Challenger' } }
    /**
     * Find zero or one Challenger that matches the filter.
     * @param {ChallengerFindUniqueArgs} args - Arguments to find a Challenger
     * @example
     * // Get one Challenger
     * const challenger = await prisma.challenger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengerFindUniqueArgs>(args: SelectSubset<T, ChallengerFindUniqueArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengerFindUniqueOrThrowArgs} args - Arguments to find a Challenger
     * @example
     * // Get one Challenger
     * const challenger = await prisma.challenger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengerFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerFindFirstArgs} args - Arguments to find a Challenger
     * @example
     * // Get one Challenger
     * const challenger = await prisma.challenger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengerFindFirstArgs>(args?: SelectSubset<T, ChallengerFindFirstArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerFindFirstOrThrowArgs} args - Arguments to find a Challenger
     * @example
     * // Get one Challenger
     * const challenger = await prisma.challenger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengerFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challengers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challengers
     * const challengers = await prisma.challenger.findMany()
     * 
     * // Get first 10 Challengers
     * const challengers = await prisma.challenger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengerWithIdOnly = await prisma.challenger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengerFindManyArgs>(args?: SelectSubset<T, ChallengerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenger.
     * @param {ChallengerCreateArgs} args - Arguments to create a Challenger.
     * @example
     * // Create one Challenger
     * const Challenger = await prisma.challenger.create({
     *   data: {
     *     // ... data to create a Challenger
     *   }
     * })
     * 
     */
    create<T extends ChallengerCreateArgs>(args: SelectSubset<T, ChallengerCreateArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challengers.
     * @param {ChallengerCreateManyArgs} args - Arguments to create many Challengers.
     * @example
     * // Create many Challengers
     * const challenger = await prisma.challenger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengerCreateManyArgs>(args?: SelectSubset<T, ChallengerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Challenger.
     * @param {ChallengerDeleteArgs} args - Arguments to delete one Challenger.
     * @example
     * // Delete one Challenger
     * const Challenger = await prisma.challenger.delete({
     *   where: {
     *     // ... filter to delete one Challenger
     *   }
     * })
     * 
     */
    delete<T extends ChallengerDeleteArgs>(args: SelectSubset<T, ChallengerDeleteArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenger.
     * @param {ChallengerUpdateArgs} args - Arguments to update one Challenger.
     * @example
     * // Update one Challenger
     * const challenger = await prisma.challenger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengerUpdateArgs>(args: SelectSubset<T, ChallengerUpdateArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challengers.
     * @param {ChallengerDeleteManyArgs} args - Arguments to filter Challengers to delete.
     * @example
     * // Delete a few Challengers
     * const { count } = await prisma.challenger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengerDeleteManyArgs>(args?: SelectSubset<T, ChallengerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challengers
     * const challenger = await prisma.challenger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengerUpdateManyArgs>(args: SelectSubset<T, ChallengerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Challenger.
     * @param {ChallengerUpsertArgs} args - Arguments to update or create a Challenger.
     * @example
     * // Update or create a Challenger
     * const challenger = await prisma.challenger.upsert({
     *   create: {
     *     // ... data to create a Challenger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenger we want to update
     *   }
     * })
     */
    upsert<T extends ChallengerUpsertArgs>(args: SelectSubset<T, ChallengerUpsertArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challengers that matches the filter.
     * @param {ChallengerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const challenger = await prisma.challenger.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ChallengerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Challenger.
     * @param {ChallengerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const challenger = await prisma.challenger.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ChallengerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Challengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerCountArgs} args - Arguments to filter Challengers to count.
     * @example
     * // Count the number of Challengers
     * const count = await prisma.challenger.count({
     *   where: {
     *     // ... the filter for the Challengers we want to count
     *   }
     * })
    **/
    count<T extends ChallengerCountArgs>(
      args?: Subset<T, ChallengerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengerAggregateArgs>(args: Subset<T, ChallengerAggregateArgs>): Prisma.PrismaPromise<GetChallengerAggregateType<T>>

    /**
     * Group by Challenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengerGroupByArgs['orderBy'] }
        : { orderBy?: ChallengerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenger model
   */
  readonly fields: ChallengerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends Challenger$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Challenger$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Challenger$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Challenger$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProjectMember<T extends Challenger$ProjectMemberArgs<ExtArgs> = {}>(args?: Subset<T, Challenger$ProjectMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    challengerSchool<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Challenger model
   */
  interface ChallengerFieldRefs {
    readonly id: FieldRef<"Challenger", 'String'>
    readonly umsbChallengerId: FieldRef<"Challenger", 'String'>
    readonly name: FieldRef<"Challenger", 'String'>
    readonly nickname: FieldRef<"Challenger", 'String'>
    readonly introduction: FieldRef<"Challenger", 'String'>
    readonly school: FieldRef<"Challenger", 'String'>
    readonly studentId: FieldRef<"Challenger", 'String'>
    readonly password: FieldRef<"Challenger", 'String'>
    readonly part: FieldRef<"Challenger", 'UserPartEnum'>
    readonly role: FieldRef<"Challenger", 'UserRoleEnum'>
    readonly gender: FieldRef<"Challenger", 'GenderEnum'>
    readonly chapter: FieldRef<"Challenger", 'ChallengerChapterEnum'>
    readonly createdAt: FieldRef<"Challenger", 'DateTime'>
    readonly updatedAt: FieldRef<"Challenger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Challenger findUnique
   */
  export type ChallengerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerInclude<ExtArgs> | null
    /**
     * Filter, which Challenger to fetch.
     */
    where: ChallengerWhereUniqueInput
  }

  /**
   * Challenger findUniqueOrThrow
   */
  export type ChallengerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerInclude<ExtArgs> | null
    /**
     * Filter, which Challenger to fetch.
     */
    where: ChallengerWhereUniqueInput
  }

  /**
   * Challenger findFirst
   */
  export type ChallengerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerInclude<ExtArgs> | null
    /**
     * Filter, which Challenger to fetch.
     */
    where?: ChallengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challengers to fetch.
     */
    orderBy?: ChallengerOrderByWithRelationInput | ChallengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challengers.
     */
    cursor?: ChallengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challengers.
     */
    distinct?: ChallengerScalarFieldEnum | ChallengerScalarFieldEnum[]
  }

  /**
   * Challenger findFirstOrThrow
   */
  export type ChallengerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerInclude<ExtArgs> | null
    /**
     * Filter, which Challenger to fetch.
     */
    where?: ChallengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challengers to fetch.
     */
    orderBy?: ChallengerOrderByWithRelationInput | ChallengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challengers.
     */
    cursor?: ChallengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challengers.
     */
    distinct?: ChallengerScalarFieldEnum | ChallengerScalarFieldEnum[]
  }

  /**
   * Challenger findMany
   */
  export type ChallengerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerInclude<ExtArgs> | null
    /**
     * Filter, which Challengers to fetch.
     */
    where?: ChallengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challengers to fetch.
     */
    orderBy?: ChallengerOrderByWithRelationInput | ChallengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challengers.
     */
    cursor?: ChallengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challengers.
     */
    skip?: number
    distinct?: ChallengerScalarFieldEnum | ChallengerScalarFieldEnum[]
  }

  /**
   * Challenger create
   */
  export type ChallengerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenger.
     */
    data: XOR<ChallengerCreateInput, ChallengerUncheckedCreateInput>
  }

  /**
   * Challenger createMany
   */
  export type ChallengerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challengers.
     */
    data: ChallengerCreateManyInput | ChallengerCreateManyInput[]
  }

  /**
   * Challenger update
   */
  export type ChallengerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenger.
     */
    data: XOR<ChallengerUpdateInput, ChallengerUncheckedUpdateInput>
    /**
     * Choose, which Challenger to update.
     */
    where: ChallengerWhereUniqueInput
  }

  /**
   * Challenger updateMany
   */
  export type ChallengerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challengers.
     */
    data: XOR<ChallengerUpdateManyMutationInput, ChallengerUncheckedUpdateManyInput>
    /**
     * Filter which Challengers to update
     */
    where?: ChallengerWhereInput
    /**
     * Limit how many Challengers to update.
     */
    limit?: number
  }

  /**
   * Challenger upsert
   */
  export type ChallengerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenger to update in case it exists.
     */
    where: ChallengerWhereUniqueInput
    /**
     * In case the Challenger found by the `where` argument doesn't exist, create a new Challenger with this data.
     */
    create: XOR<ChallengerCreateInput, ChallengerUncheckedCreateInput>
    /**
     * In case the Challenger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengerUpdateInput, ChallengerUncheckedUpdateInput>
  }

  /**
   * Challenger delete
   */
  export type ChallengerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerInclude<ExtArgs> | null
    /**
     * Filter which Challenger to delete.
     */
    where: ChallengerWhereUniqueInput
  }

  /**
   * Challenger deleteMany
   */
  export type ChallengerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challengers to delete
     */
    where?: ChallengerWhereInput
    /**
     * Limit how many Challengers to delete.
     */
    limit?: number
  }

  /**
   * Challenger findRaw
   */
  export type ChallengerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Challenger aggregateRaw
   */
  export type ChallengerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Challenger.applications
   */
  export type Challenger$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Challenger.projects
   */
  export type Challenger$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Challenger.ProjectMember
   */
  export type Challenger$ProjectMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * Challenger without action
   */
  export type ChallengerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerInclude<ExtArgs> | null
  }


  /**
   * Model MatchingRound
   */

  export type AggregateMatchingRound = {
    _count: MatchingRoundCountAggregateOutputType | null
    _min: MatchingRoundMinAggregateOutputType | null
    _max: MatchingRoundMaxAggregateOutputType | null
  }

  export type MatchingRoundMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDatetime: Date | null
    endDatetime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchingRoundMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDatetime: Date | null
    endDatetime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchingRoundCountAggregateOutputType = {
    id: number
    name: number
    startDatetime: number
    endDatetime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchingRoundMinAggregateInputType = {
    id?: true
    name?: true
    startDatetime?: true
    endDatetime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchingRoundMaxAggregateInputType = {
    id?: true
    name?: true
    startDatetime?: true
    endDatetime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchingRoundCountAggregateInputType = {
    id?: true
    name?: true
    startDatetime?: true
    endDatetime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchingRoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchingRound to aggregate.
     */
    where?: MatchingRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingRounds to fetch.
     */
    orderBy?: MatchingRoundOrderByWithRelationInput | MatchingRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchingRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchingRounds
    **/
    _count?: true | MatchingRoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchingRoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchingRoundMaxAggregateInputType
  }

  export type GetMatchingRoundAggregateType<T extends MatchingRoundAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchingRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchingRound[P]>
      : GetScalarType<T[P], AggregateMatchingRound[P]>
  }




  export type MatchingRoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchingRoundWhereInput
    orderBy?: MatchingRoundOrderByWithAggregationInput | MatchingRoundOrderByWithAggregationInput[]
    by: MatchingRoundScalarFieldEnum[] | MatchingRoundScalarFieldEnum
    having?: MatchingRoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchingRoundCountAggregateInputType | true
    _min?: MatchingRoundMinAggregateInputType
    _max?: MatchingRoundMaxAggregateInputType
  }

  export type MatchingRoundGroupByOutputType = {
    id: string
    name: string
    startDatetime: Date
    endDatetime: Date
    createdAt: Date
    updatedAt: Date
    _count: MatchingRoundCountAggregateOutputType | null
    _min: MatchingRoundMinAggregateOutputType | null
    _max: MatchingRoundMaxAggregateOutputType | null
  }

  type GetMatchingRoundGroupByPayload<T extends MatchingRoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchingRoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchingRoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchingRoundGroupByOutputType[P]>
            : GetScalarType<T[P], MatchingRoundGroupByOutputType[P]>
        }
      >
    >


  export type MatchingRoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDatetime?: boolean
    endDatetime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicationsInRound?: boolean | MatchingRound$applicationsInRoundArgs<ExtArgs>
    _count?: boolean | MatchingRoundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchingRound"]>



  export type MatchingRoundSelectScalar = {
    id?: boolean
    name?: boolean
    startDatetime?: boolean
    endDatetime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchingRoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDatetime" | "endDatetime" | "createdAt" | "updatedAt", ExtArgs["result"]["matchingRound"]>
  export type MatchingRoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicationsInRound?: boolean | MatchingRound$applicationsInRoundArgs<ExtArgs>
    _count?: boolean | MatchingRoundCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MatchingRoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchingRound"
    objects: {
      applicationsInRound: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDatetime: Date
      endDatetime: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matchingRound"]>
    composites: {}
  }

  type MatchingRoundGetPayload<S extends boolean | null | undefined | MatchingRoundDefaultArgs> = $Result.GetResult<Prisma.$MatchingRoundPayload, S>

  type MatchingRoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchingRoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchingRoundCountAggregateInputType | true
    }

  export interface MatchingRoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchingRound'], meta: { name: 'MatchingRound' } }
    /**
     * Find zero or one MatchingRound that matches the filter.
     * @param {MatchingRoundFindUniqueArgs} args - Arguments to find a MatchingRound
     * @example
     * // Get one MatchingRound
     * const matchingRound = await prisma.matchingRound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchingRoundFindUniqueArgs>(args: SelectSubset<T, MatchingRoundFindUniqueArgs<ExtArgs>>): Prisma__MatchingRoundClient<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchingRound that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchingRoundFindUniqueOrThrowArgs} args - Arguments to find a MatchingRound
     * @example
     * // Get one MatchingRound
     * const matchingRound = await prisma.matchingRound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchingRoundFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchingRoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchingRoundClient<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchingRound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingRoundFindFirstArgs} args - Arguments to find a MatchingRound
     * @example
     * // Get one MatchingRound
     * const matchingRound = await prisma.matchingRound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchingRoundFindFirstArgs>(args?: SelectSubset<T, MatchingRoundFindFirstArgs<ExtArgs>>): Prisma__MatchingRoundClient<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchingRound that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingRoundFindFirstOrThrowArgs} args - Arguments to find a MatchingRound
     * @example
     * // Get one MatchingRound
     * const matchingRound = await prisma.matchingRound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchingRoundFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchingRoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchingRoundClient<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchingRounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingRoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchingRounds
     * const matchingRounds = await prisma.matchingRound.findMany()
     * 
     * // Get first 10 MatchingRounds
     * const matchingRounds = await prisma.matchingRound.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchingRoundWithIdOnly = await prisma.matchingRound.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchingRoundFindManyArgs>(args?: SelectSubset<T, MatchingRoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchingRound.
     * @param {MatchingRoundCreateArgs} args - Arguments to create a MatchingRound.
     * @example
     * // Create one MatchingRound
     * const MatchingRound = await prisma.matchingRound.create({
     *   data: {
     *     // ... data to create a MatchingRound
     *   }
     * })
     * 
     */
    create<T extends MatchingRoundCreateArgs>(args: SelectSubset<T, MatchingRoundCreateArgs<ExtArgs>>): Prisma__MatchingRoundClient<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchingRounds.
     * @param {MatchingRoundCreateManyArgs} args - Arguments to create many MatchingRounds.
     * @example
     * // Create many MatchingRounds
     * const matchingRound = await prisma.matchingRound.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchingRoundCreateManyArgs>(args?: SelectSubset<T, MatchingRoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MatchingRound.
     * @param {MatchingRoundDeleteArgs} args - Arguments to delete one MatchingRound.
     * @example
     * // Delete one MatchingRound
     * const MatchingRound = await prisma.matchingRound.delete({
     *   where: {
     *     // ... filter to delete one MatchingRound
     *   }
     * })
     * 
     */
    delete<T extends MatchingRoundDeleteArgs>(args: SelectSubset<T, MatchingRoundDeleteArgs<ExtArgs>>): Prisma__MatchingRoundClient<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchingRound.
     * @param {MatchingRoundUpdateArgs} args - Arguments to update one MatchingRound.
     * @example
     * // Update one MatchingRound
     * const matchingRound = await prisma.matchingRound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchingRoundUpdateArgs>(args: SelectSubset<T, MatchingRoundUpdateArgs<ExtArgs>>): Prisma__MatchingRoundClient<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchingRounds.
     * @param {MatchingRoundDeleteManyArgs} args - Arguments to filter MatchingRounds to delete.
     * @example
     * // Delete a few MatchingRounds
     * const { count } = await prisma.matchingRound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchingRoundDeleteManyArgs>(args?: SelectSubset<T, MatchingRoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchingRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingRoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchingRounds
     * const matchingRound = await prisma.matchingRound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchingRoundUpdateManyArgs>(args: SelectSubset<T, MatchingRoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatchingRound.
     * @param {MatchingRoundUpsertArgs} args - Arguments to update or create a MatchingRound.
     * @example
     * // Update or create a MatchingRound
     * const matchingRound = await prisma.matchingRound.upsert({
     *   create: {
     *     // ... data to create a MatchingRound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchingRound we want to update
     *   }
     * })
     */
    upsert<T extends MatchingRoundUpsertArgs>(args: SelectSubset<T, MatchingRoundUpsertArgs<ExtArgs>>): Prisma__MatchingRoundClient<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchingRounds that matches the filter.
     * @param {MatchingRoundFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const matchingRound = await prisma.matchingRound.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MatchingRoundFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MatchingRound.
     * @param {MatchingRoundAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const matchingRound = await prisma.matchingRound.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MatchingRoundAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MatchingRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingRoundCountArgs} args - Arguments to filter MatchingRounds to count.
     * @example
     * // Count the number of MatchingRounds
     * const count = await prisma.matchingRound.count({
     *   where: {
     *     // ... the filter for the MatchingRounds we want to count
     *   }
     * })
    **/
    count<T extends MatchingRoundCountArgs>(
      args?: Subset<T, MatchingRoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchingRoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchingRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingRoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchingRoundAggregateArgs>(args: Subset<T, MatchingRoundAggregateArgs>): Prisma.PrismaPromise<GetMatchingRoundAggregateType<T>>

    /**
     * Group by MatchingRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchingRoundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchingRoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchingRoundGroupByArgs['orderBy'] }
        : { orderBy?: MatchingRoundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchingRoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchingRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchingRound model
   */
  readonly fields: MatchingRoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchingRound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchingRoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicationsInRound<T extends MatchingRound$applicationsInRoundArgs<ExtArgs> = {}>(args?: Subset<T, MatchingRound$applicationsInRoundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchingRound model
   */
  interface MatchingRoundFieldRefs {
    readonly id: FieldRef<"MatchingRound", 'String'>
    readonly name: FieldRef<"MatchingRound", 'String'>
    readonly startDatetime: FieldRef<"MatchingRound", 'DateTime'>
    readonly endDatetime: FieldRef<"MatchingRound", 'DateTime'>
    readonly createdAt: FieldRef<"MatchingRound", 'DateTime'>
    readonly updatedAt: FieldRef<"MatchingRound", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchingRound findUnique
   */
  export type MatchingRoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRound
     */
    select?: MatchingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingRound
     */
    omit?: MatchingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingRoundInclude<ExtArgs> | null
    /**
     * Filter, which MatchingRound to fetch.
     */
    where: MatchingRoundWhereUniqueInput
  }

  /**
   * MatchingRound findUniqueOrThrow
   */
  export type MatchingRoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRound
     */
    select?: MatchingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingRound
     */
    omit?: MatchingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingRoundInclude<ExtArgs> | null
    /**
     * Filter, which MatchingRound to fetch.
     */
    where: MatchingRoundWhereUniqueInput
  }

  /**
   * MatchingRound findFirst
   */
  export type MatchingRoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRound
     */
    select?: MatchingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingRound
     */
    omit?: MatchingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingRoundInclude<ExtArgs> | null
    /**
     * Filter, which MatchingRound to fetch.
     */
    where?: MatchingRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingRounds to fetch.
     */
    orderBy?: MatchingRoundOrderByWithRelationInput | MatchingRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchingRounds.
     */
    cursor?: MatchingRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchingRounds.
     */
    distinct?: MatchingRoundScalarFieldEnum | MatchingRoundScalarFieldEnum[]
  }

  /**
   * MatchingRound findFirstOrThrow
   */
  export type MatchingRoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRound
     */
    select?: MatchingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingRound
     */
    omit?: MatchingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingRoundInclude<ExtArgs> | null
    /**
     * Filter, which MatchingRound to fetch.
     */
    where?: MatchingRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingRounds to fetch.
     */
    orderBy?: MatchingRoundOrderByWithRelationInput | MatchingRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchingRounds.
     */
    cursor?: MatchingRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchingRounds.
     */
    distinct?: MatchingRoundScalarFieldEnum | MatchingRoundScalarFieldEnum[]
  }

  /**
   * MatchingRound findMany
   */
  export type MatchingRoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRound
     */
    select?: MatchingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingRound
     */
    omit?: MatchingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingRoundInclude<ExtArgs> | null
    /**
     * Filter, which MatchingRounds to fetch.
     */
    where?: MatchingRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchingRounds to fetch.
     */
    orderBy?: MatchingRoundOrderByWithRelationInput | MatchingRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchingRounds.
     */
    cursor?: MatchingRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchingRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchingRounds.
     */
    skip?: number
    distinct?: MatchingRoundScalarFieldEnum | MatchingRoundScalarFieldEnum[]
  }

  /**
   * MatchingRound create
   */
  export type MatchingRoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRound
     */
    select?: MatchingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingRound
     */
    omit?: MatchingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingRoundInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchingRound.
     */
    data: XOR<MatchingRoundCreateInput, MatchingRoundUncheckedCreateInput>
  }

  /**
   * MatchingRound createMany
   */
  export type MatchingRoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchingRounds.
     */
    data: MatchingRoundCreateManyInput | MatchingRoundCreateManyInput[]
  }

  /**
   * MatchingRound update
   */
  export type MatchingRoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRound
     */
    select?: MatchingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingRound
     */
    omit?: MatchingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingRoundInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchingRound.
     */
    data: XOR<MatchingRoundUpdateInput, MatchingRoundUncheckedUpdateInput>
    /**
     * Choose, which MatchingRound to update.
     */
    where: MatchingRoundWhereUniqueInput
  }

  /**
   * MatchingRound updateMany
   */
  export type MatchingRoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchingRounds.
     */
    data: XOR<MatchingRoundUpdateManyMutationInput, MatchingRoundUncheckedUpdateManyInput>
    /**
     * Filter which MatchingRounds to update
     */
    where?: MatchingRoundWhereInput
    /**
     * Limit how many MatchingRounds to update.
     */
    limit?: number
  }

  /**
   * MatchingRound upsert
   */
  export type MatchingRoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRound
     */
    select?: MatchingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingRound
     */
    omit?: MatchingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingRoundInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchingRound to update in case it exists.
     */
    where: MatchingRoundWhereUniqueInput
    /**
     * In case the MatchingRound found by the `where` argument doesn't exist, create a new MatchingRound with this data.
     */
    create: XOR<MatchingRoundCreateInput, MatchingRoundUncheckedCreateInput>
    /**
     * In case the MatchingRound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchingRoundUpdateInput, MatchingRoundUncheckedUpdateInput>
  }

  /**
   * MatchingRound delete
   */
  export type MatchingRoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRound
     */
    select?: MatchingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingRound
     */
    omit?: MatchingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingRoundInclude<ExtArgs> | null
    /**
     * Filter which MatchingRound to delete.
     */
    where: MatchingRoundWhereUniqueInput
  }

  /**
   * MatchingRound deleteMany
   */
  export type MatchingRoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchingRounds to delete
     */
    where?: MatchingRoundWhereInput
    /**
     * Limit how many MatchingRounds to delete.
     */
    limit?: number
  }

  /**
   * MatchingRound findRaw
   */
  export type MatchingRoundFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MatchingRound aggregateRaw
   */
  export type MatchingRoundAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MatchingRound.applicationsInRound
   */
  export type MatchingRound$applicationsInRoundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * MatchingRound without action
   */
  export type MatchingRoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRound
     */
    select?: MatchingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingRound
     */
    omit?: MatchingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchingRoundInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    link: string | null
    bannerImage: string | null
    planId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    link: string | null
    bannerImage: string | null
    planId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    link: number
    bannerImage: number
    planId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    bannerImage?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    bannerImage?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    bannerImage?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    description: string
    link: string
    bannerImage: string | null
    planId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    bannerImage?: boolean
    planId?: boolean
    partTo?: boolean | ProjectToDefaultArgs<ExtArgs>
    createdAt?: boolean
    updatedAt?: boolean
    projectMember?: boolean | Project$projectMemberArgs<ExtArgs>
    projectForms?: boolean | Project$projectFormsArgs<ExtArgs>
    projectPlan?: boolean | ChallengerDefaultArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    bannerImage?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "link" | "bannerImage" | "planId" | "partTo" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMember?: boolean | Project$projectMemberArgs<ExtArgs>
    projectForms?: boolean | Project$projectFormsArgs<ExtArgs>
    projectPlan?: boolean | ChallengerDefaultArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      projectMember: Prisma.$ProjectMemberPayload<ExtArgs>[]
      projectForms: Prisma.$FormPayload<ExtArgs>[]
      projectPlan: Prisma.$ChallengerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      link: string
      bannerImage: string | null
      planId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {
      partTo: Prisma.$ProjectToPayload[]
    }
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * @param {ProjectFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const project = await prisma.project.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProjectFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Project.
     * @param {ProjectAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const project = await prisma.project.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProjectAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectMember<T extends Project$projectMemberArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectForms<T extends Project$projectFormsArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectFormsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectPlan<T extends ChallengerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengerDefaultArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly link: FieldRef<"Project", 'String'>
    readonly bannerImage: FieldRef<"Project", 'String'>
    readonly planId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project findRaw
   */
  export type ProjectFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Project aggregateRaw
   */
  export type ProjectAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Project.projectMember
   */
  export type Project$projectMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * Project.projectForms
   */
  export type Project$projectFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    where?: FormWhereInput
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    cursor?: FormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Form
   */

  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    projectId: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    availableMatchingRounds: number
    _all: number
  }


  export type FormMinAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    availableMatchingRounds?: true
    _all?: true
  }

  export type FormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Form to aggregate.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
    orderBy?: FormOrderByWithAggregationInput | FormOrderByWithAggregationInput[]
    by: FormScalarFieldEnum[] | FormScalarFieldEnum
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }

  export type FormGroupByOutputType = {
    id: string
    projectId: string
    title: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    availableMatchingRounds: string[]
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    availableMatchingRounds?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    applications?: boolean | Form$applicationsArgs<ExtArgs>
    questions?: boolean | Form$questionsArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>



  export type FormSelectScalar = {
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    availableMatchingRounds?: boolean
  }

  export type FormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "title" | "description" | "createdAt" | "updatedAt" | "availableMatchingRounds", ExtArgs["result"]["form"]>
  export type FormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    applications?: boolean | Form$applicationsArgs<ExtArgs>
    questions?: boolean | Form$questionsArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Form"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      questions: Prisma.$FormQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      title: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      availableMatchingRounds: string[]
    }, ExtArgs["result"]["form"]>
    composites: {}
  }

  type FormGetPayload<S extends boolean | null | undefined | FormDefaultArgs> = $Result.GetResult<Prisma.$FormPayload, S>

  type FormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface FormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Form'], meta: { name: 'Form' } }
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormFindUniqueArgs>(args: SelectSubset<T, FormFindUniqueArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Form that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs>(args: SelectSubset<T, FormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormFindFirstArgs>(args?: SelectSubset<T, FormFindFirstArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs>(args?: SelectSubset<T, FormFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormFindManyArgs>(args?: SelectSubset<T, FormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
     */
    create<T extends FormCreateArgs>(args: SelectSubset<T, FormCreateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forms.
     * @param {FormCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormCreateManyArgs>(args?: SelectSubset<T, FormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
     */
    delete<T extends FormDeleteArgs>(args: SelectSubset<T, FormDeleteArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormUpdateArgs>(args: SelectSubset<T, FormUpdateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormDeleteManyArgs>(args?: SelectSubset<T, FormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormUpdateManyArgs>(args: SelectSubset<T, FormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
     */
    upsert<T extends FormUpsertArgs>(args: SelectSubset<T, FormUpsertArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * @param {FormFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const form = await prisma.form.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FormFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Form.
     * @param {FormAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const form = await prisma.form.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FormAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): Prisma.PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Form model
   */
  readonly fields: FormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applications<T extends Form$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Form$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends Form$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Form$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Form model
   */
  interface FormFieldRefs {
    readonly id: FieldRef<"Form", 'String'>
    readonly projectId: FieldRef<"Form", 'String'>
    readonly title: FieldRef<"Form", 'String'>
    readonly description: FieldRef<"Form", 'String'>
    readonly createdAt: FieldRef<"Form", 'DateTime'>
    readonly updatedAt: FieldRef<"Form", 'DateTime'>
    readonly availableMatchingRounds: FieldRef<"Form", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Form findUnique
   */
  export type FormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findFirst
   */
  export type FormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findMany
   */
  export type FormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form create
   */
  export type FormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to create a Form.
     */
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }

  /**
   * Form createMany
   */
  export type FormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
  }

  /**
   * Form update
   */
  export type FormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to update a Form.
     */
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Form upsert
   */
  export type FormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The filter to search for the Form to update in case it exists.
     */
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     */
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }

  /**
   * Form delete
   */
  export type FormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter which Form to delete.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to delete.
     */
    limit?: number
  }

  /**
   * Form findRaw
   */
  export type FormFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Form aggregateRaw
   */
  export type FormAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Form.applications
   */
  export type Form$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Form.questions
   */
  export type Form$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionInclude<ExtArgs> | null
    where?: FormQuestionWhereInput
    orderBy?: FormQuestionOrderByWithRelationInput | FormQuestionOrderByWithRelationInput[]
    cursor?: FormQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormQuestionScalarFieldEnum | FormQuestionScalarFieldEnum[]
  }

  /**
   * Form without action
   */
  export type FormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
  }


  /**
   * Model FormQuestion
   */

  export type AggregateFormQuestion = {
    _count: FormQuestionCountAggregateOutputType | null
    _avg: FormQuestionAvgAggregateOutputType | null
    _sum: FormQuestionSumAggregateOutputType | null
    _min: FormQuestionMinAggregateOutputType | null
    _max: FormQuestionMaxAggregateOutputType | null
  }

  export type FormQuestionAvgAggregateOutputType = {
    questionNo: number | null
  }

  export type FormQuestionSumAggregateOutputType = {
    questionNo: number | null
  }

  export type FormQuestionMinAggregateOutputType = {
    id: string | null
    formId: string | null
    questionNo: number | null
    title: string | null
    description: string | null
    type: $Enums.QuestionTypeEnum | null
    isRequired: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormQuestionMaxAggregateOutputType = {
    id: string | null
    formId: string | null
    questionNo: number | null
    title: string | null
    description: string | null
    type: $Enums.QuestionTypeEnum | null
    isRequired: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormQuestionCountAggregateOutputType = {
    id: number
    formId: number
    questionNo: number
    title: number
    description: number
    type: number
    options: number
    isRequired: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormQuestionAvgAggregateInputType = {
    questionNo?: true
  }

  export type FormQuestionSumAggregateInputType = {
    questionNo?: true
  }

  export type FormQuestionMinAggregateInputType = {
    id?: true
    formId?: true
    questionNo?: true
    title?: true
    description?: true
    type?: true
    isRequired?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormQuestionMaxAggregateInputType = {
    id?: true
    formId?: true
    questionNo?: true
    title?: true
    description?: true
    type?: true
    isRequired?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormQuestionCountAggregateInputType = {
    id?: true
    formId?: true
    questionNo?: true
    title?: true
    description?: true
    type?: true
    options?: true
    isRequired?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormQuestion to aggregate.
     */
    where?: FormQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormQuestions to fetch.
     */
    orderBy?: FormQuestionOrderByWithRelationInput | FormQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormQuestions
    **/
    _count?: true | FormQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormQuestionMaxAggregateInputType
  }

  export type GetFormQuestionAggregateType<T extends FormQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateFormQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormQuestion[P]>
      : GetScalarType<T[P], AggregateFormQuestion[P]>
  }




  export type FormQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormQuestionWhereInput
    orderBy?: FormQuestionOrderByWithAggregationInput | FormQuestionOrderByWithAggregationInput[]
    by: FormQuestionScalarFieldEnum[] | FormQuestionScalarFieldEnum
    having?: FormQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormQuestionCountAggregateInputType | true
    _avg?: FormQuestionAvgAggregateInputType
    _sum?: FormQuestionSumAggregateInputType
    _min?: FormQuestionMinAggregateInputType
    _max?: FormQuestionMaxAggregateInputType
  }

  export type FormQuestionGroupByOutputType = {
    id: string
    formId: string
    questionNo: number
    title: string
    description: string | null
    type: $Enums.QuestionTypeEnum
    options: string[]
    isRequired: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: FormQuestionCountAggregateOutputType | null
    _avg: FormQuestionAvgAggregateOutputType | null
    _sum: FormQuestionSumAggregateOutputType | null
    _min: FormQuestionMinAggregateOutputType | null
    _max: FormQuestionMaxAggregateOutputType | null
  }

  type GetFormQuestionGroupByPayload<T extends FormQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], FormQuestionGroupByOutputType[P]>
        }
      >
    >


  export type FormQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    questionNo?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    options?: boolean
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
    formAnswers?: boolean | FormQuestion$formAnswersArgs<ExtArgs>
    _count?: boolean | FormQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formQuestion"]>



  export type FormQuestionSelectScalar = {
    id?: boolean
    formId?: boolean
    questionNo?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    options?: boolean
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formId" | "questionNo" | "title" | "description" | "type" | "options" | "isRequired" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["formQuestion"]>
  export type FormQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
    formAnswers?: boolean | FormQuestion$formAnswersArgs<ExtArgs>
    _count?: boolean | FormQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FormQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormQuestion"
    objects: {
      form: Prisma.$FormPayload<ExtArgs>
      formAnswers: Prisma.$FormAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formId: string
      questionNo: number
      title: string
      description: string | null
      type: $Enums.QuestionTypeEnum
      options: string[]
      isRequired: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["formQuestion"]>
    composites: {}
  }

  type FormQuestionGetPayload<S extends boolean | null | undefined | FormQuestionDefaultArgs> = $Result.GetResult<Prisma.$FormQuestionPayload, S>

  type FormQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormQuestionCountAggregateInputType | true
    }

  export interface FormQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormQuestion'], meta: { name: 'FormQuestion' } }
    /**
     * Find zero or one FormQuestion that matches the filter.
     * @param {FormQuestionFindUniqueArgs} args - Arguments to find a FormQuestion
     * @example
     * // Get one FormQuestion
     * const formQuestion = await prisma.formQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormQuestionFindUniqueArgs>(args: SelectSubset<T, FormQuestionFindUniqueArgs<ExtArgs>>): Prisma__FormQuestionClient<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormQuestionFindUniqueOrThrowArgs} args - Arguments to find a FormQuestion
     * @example
     * // Get one FormQuestion
     * const formQuestion = await prisma.formQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, FormQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormQuestionClient<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormQuestionFindFirstArgs} args - Arguments to find a FormQuestion
     * @example
     * // Get one FormQuestion
     * const formQuestion = await prisma.formQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormQuestionFindFirstArgs>(args?: SelectSubset<T, FormQuestionFindFirstArgs<ExtArgs>>): Prisma__FormQuestionClient<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormQuestionFindFirstOrThrowArgs} args - Arguments to find a FormQuestion
     * @example
     * // Get one FormQuestion
     * const formQuestion = await prisma.formQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, FormQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormQuestionClient<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormQuestions
     * const formQuestions = await prisma.formQuestion.findMany()
     * 
     * // Get first 10 FormQuestions
     * const formQuestions = await prisma.formQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formQuestionWithIdOnly = await prisma.formQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormQuestionFindManyArgs>(args?: SelectSubset<T, FormQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormQuestion.
     * @param {FormQuestionCreateArgs} args - Arguments to create a FormQuestion.
     * @example
     * // Create one FormQuestion
     * const FormQuestion = await prisma.formQuestion.create({
     *   data: {
     *     // ... data to create a FormQuestion
     *   }
     * })
     * 
     */
    create<T extends FormQuestionCreateArgs>(args: SelectSubset<T, FormQuestionCreateArgs<ExtArgs>>): Prisma__FormQuestionClient<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormQuestions.
     * @param {FormQuestionCreateManyArgs} args - Arguments to create many FormQuestions.
     * @example
     * // Create many FormQuestions
     * const formQuestion = await prisma.formQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormQuestionCreateManyArgs>(args?: SelectSubset<T, FormQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FormQuestion.
     * @param {FormQuestionDeleteArgs} args - Arguments to delete one FormQuestion.
     * @example
     * // Delete one FormQuestion
     * const FormQuestion = await prisma.formQuestion.delete({
     *   where: {
     *     // ... filter to delete one FormQuestion
     *   }
     * })
     * 
     */
    delete<T extends FormQuestionDeleteArgs>(args: SelectSubset<T, FormQuestionDeleteArgs<ExtArgs>>): Prisma__FormQuestionClient<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormQuestion.
     * @param {FormQuestionUpdateArgs} args - Arguments to update one FormQuestion.
     * @example
     * // Update one FormQuestion
     * const formQuestion = await prisma.formQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormQuestionUpdateArgs>(args: SelectSubset<T, FormQuestionUpdateArgs<ExtArgs>>): Prisma__FormQuestionClient<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormQuestions.
     * @param {FormQuestionDeleteManyArgs} args - Arguments to filter FormQuestions to delete.
     * @example
     * // Delete a few FormQuestions
     * const { count } = await prisma.formQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormQuestionDeleteManyArgs>(args?: SelectSubset<T, FormQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormQuestions
     * const formQuestion = await prisma.formQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormQuestionUpdateManyArgs>(args: SelectSubset<T, FormQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FormQuestion.
     * @param {FormQuestionUpsertArgs} args - Arguments to update or create a FormQuestion.
     * @example
     * // Update or create a FormQuestion
     * const formQuestion = await prisma.formQuestion.upsert({
     *   create: {
     *     // ... data to create a FormQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormQuestion we want to update
     *   }
     * })
     */
    upsert<T extends FormQuestionUpsertArgs>(args: SelectSubset<T, FormQuestionUpsertArgs<ExtArgs>>): Prisma__FormQuestionClient<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormQuestions that matches the filter.
     * @param {FormQuestionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const formQuestion = await prisma.formQuestion.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FormQuestionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FormQuestion.
     * @param {FormQuestionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const formQuestion = await prisma.formQuestion.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FormQuestionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FormQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormQuestionCountArgs} args - Arguments to filter FormQuestions to count.
     * @example
     * // Count the number of FormQuestions
     * const count = await prisma.formQuestion.count({
     *   where: {
     *     // ... the filter for the FormQuestions we want to count
     *   }
     * })
    **/
    count<T extends FormQuestionCountArgs>(
      args?: Subset<T, FormQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormQuestionAggregateArgs>(args: Subset<T, FormQuestionAggregateArgs>): Prisma.PrismaPromise<GetFormQuestionAggregateType<T>>

    /**
     * Group by FormQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormQuestionGroupByArgs['orderBy'] }
        : { orderBy?: FormQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormQuestion model
   */
  readonly fields: FormQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formAnswers<T extends FormQuestion$formAnswersArgs<ExtArgs> = {}>(args?: Subset<T, FormQuestion$formAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormQuestion model
   */
  interface FormQuestionFieldRefs {
    readonly id: FieldRef<"FormQuestion", 'String'>
    readonly formId: FieldRef<"FormQuestion", 'String'>
    readonly questionNo: FieldRef<"FormQuestion", 'Int'>
    readonly title: FieldRef<"FormQuestion", 'String'>
    readonly description: FieldRef<"FormQuestion", 'String'>
    readonly type: FieldRef<"FormQuestion", 'QuestionTypeEnum'>
    readonly options: FieldRef<"FormQuestion", 'String[]'>
    readonly isRequired: FieldRef<"FormQuestion", 'Boolean'>
    readonly isDeleted: FieldRef<"FormQuestion", 'Boolean'>
    readonly createdAt: FieldRef<"FormQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"FormQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormQuestion findUnique
   */
  export type FormQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionInclude<ExtArgs> | null
    /**
     * Filter, which FormQuestion to fetch.
     */
    where: FormQuestionWhereUniqueInput
  }

  /**
   * FormQuestion findUniqueOrThrow
   */
  export type FormQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionInclude<ExtArgs> | null
    /**
     * Filter, which FormQuestion to fetch.
     */
    where: FormQuestionWhereUniqueInput
  }

  /**
   * FormQuestion findFirst
   */
  export type FormQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionInclude<ExtArgs> | null
    /**
     * Filter, which FormQuestion to fetch.
     */
    where?: FormQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormQuestions to fetch.
     */
    orderBy?: FormQuestionOrderByWithRelationInput | FormQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormQuestions.
     */
    cursor?: FormQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormQuestions.
     */
    distinct?: FormQuestionScalarFieldEnum | FormQuestionScalarFieldEnum[]
  }

  /**
   * FormQuestion findFirstOrThrow
   */
  export type FormQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionInclude<ExtArgs> | null
    /**
     * Filter, which FormQuestion to fetch.
     */
    where?: FormQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormQuestions to fetch.
     */
    orderBy?: FormQuestionOrderByWithRelationInput | FormQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormQuestions.
     */
    cursor?: FormQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormQuestions.
     */
    distinct?: FormQuestionScalarFieldEnum | FormQuestionScalarFieldEnum[]
  }

  /**
   * FormQuestion findMany
   */
  export type FormQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionInclude<ExtArgs> | null
    /**
     * Filter, which FormQuestions to fetch.
     */
    where?: FormQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormQuestions to fetch.
     */
    orderBy?: FormQuestionOrderByWithRelationInput | FormQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormQuestions.
     */
    cursor?: FormQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormQuestions.
     */
    skip?: number
    distinct?: FormQuestionScalarFieldEnum | FormQuestionScalarFieldEnum[]
  }

  /**
   * FormQuestion create
   */
  export type FormQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a FormQuestion.
     */
    data: XOR<FormQuestionCreateInput, FormQuestionUncheckedCreateInput>
  }

  /**
   * FormQuestion createMany
   */
  export type FormQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormQuestions.
     */
    data: FormQuestionCreateManyInput | FormQuestionCreateManyInput[]
  }

  /**
   * FormQuestion update
   */
  export type FormQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a FormQuestion.
     */
    data: XOR<FormQuestionUpdateInput, FormQuestionUncheckedUpdateInput>
    /**
     * Choose, which FormQuestion to update.
     */
    where: FormQuestionWhereUniqueInput
  }

  /**
   * FormQuestion updateMany
   */
  export type FormQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormQuestions.
     */
    data: XOR<FormQuestionUpdateManyMutationInput, FormQuestionUncheckedUpdateManyInput>
    /**
     * Filter which FormQuestions to update
     */
    where?: FormQuestionWhereInput
    /**
     * Limit how many FormQuestions to update.
     */
    limit?: number
  }

  /**
   * FormQuestion upsert
   */
  export type FormQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the FormQuestion to update in case it exists.
     */
    where: FormQuestionWhereUniqueInput
    /**
     * In case the FormQuestion found by the `where` argument doesn't exist, create a new FormQuestion with this data.
     */
    create: XOR<FormQuestionCreateInput, FormQuestionUncheckedCreateInput>
    /**
     * In case the FormQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormQuestionUpdateInput, FormQuestionUncheckedUpdateInput>
  }

  /**
   * FormQuestion delete
   */
  export type FormQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionInclude<ExtArgs> | null
    /**
     * Filter which FormQuestion to delete.
     */
    where: FormQuestionWhereUniqueInput
  }

  /**
   * FormQuestion deleteMany
   */
  export type FormQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormQuestions to delete
     */
    where?: FormQuestionWhereInput
    /**
     * Limit how many FormQuestions to delete.
     */
    limit?: number
  }

  /**
   * FormQuestion findRaw
   */
  export type FormQuestionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FormQuestion aggregateRaw
   */
  export type FormQuestionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FormQuestion.formAnswers
   */
  export type FormQuestion$formAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    where?: FormAnswerWhereInput
    orderBy?: FormAnswerOrderByWithRelationInput | FormAnswerOrderByWithRelationInput[]
    cursor?: FormAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormAnswerScalarFieldEnum | FormAnswerScalarFieldEnum[]
  }

  /**
   * FormQuestion without action
   */
  export type FormQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMember
   */

  export type AggregateProjectMember = {
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  export type ProjectMemberMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMemberMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMemberCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMemberMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMemberMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMemberCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMember to aggregate.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMembers
    **/
    _count?: true | ProjectMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type GetProjectMemberAggregateType<T extends ProjectMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMember[P]>
      : GetScalarType<T[P], AggregateProjectMember[P]>
  }




  export type ProjectMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithAggregationInput | ProjectMemberOrderByWithAggregationInput[]
    by: ProjectMemberScalarFieldEnum[] | ProjectMemberScalarFieldEnum
    having?: ProjectMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMemberCountAggregateInputType | true
    _min?: ProjectMemberMinAggregateInputType
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type ProjectMemberGroupByOutputType = {
    id: string
    projectId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  type GetProjectMemberGroupByPayload<T extends ProjectMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ChallengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>



  export type ProjectMemberSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["projectMember"]>
  export type ProjectMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ChallengerDefaultArgs<ExtArgs>
  }

  export type $ProjectMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMember"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$ChallengerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectMember"]>
    composites: {}
  }

  type ProjectMemberGetPayload<S extends boolean | null | undefined | ProjectMemberDefaultArgs> = $Result.GetResult<Prisma.$ProjectMemberPayload, S>

  type ProjectMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMemberCountAggregateInputType | true
    }

  export interface ProjectMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMember'], meta: { name: 'ProjectMember' } }
    /**
     * Find zero or one ProjectMember that matches the filter.
     * @param {ProjectMemberFindUniqueArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMemberFindUniqueArgs>(args: SelectSubset<T, ProjectMemberFindUniqueArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMemberFindUniqueOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMemberFindFirstArgs>(args?: SelectSubset<T, ProjectMemberFindFirstArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany()
     * 
     * // Get first 10 ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectMemberFindManyArgs>(args?: SelectSubset<T, ProjectMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMember.
     * @param {ProjectMemberCreateArgs} args - Arguments to create a ProjectMember.
     * @example
     * // Create one ProjectMember
     * const ProjectMember = await prisma.projectMember.create({
     *   data: {
     *     // ... data to create a ProjectMember
     *   }
     * })
     * 
     */
    create<T extends ProjectMemberCreateArgs>(args: SelectSubset<T, ProjectMemberCreateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMembers.
     * @param {ProjectMemberCreateManyArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMemberCreateManyArgs>(args?: SelectSubset<T, ProjectMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectMember.
     * @param {ProjectMemberDeleteArgs} args - Arguments to delete one ProjectMember.
     * @example
     * // Delete one ProjectMember
     * const ProjectMember = await prisma.projectMember.delete({
     *   where: {
     *     // ... filter to delete one ProjectMember
     *   }
     * })
     * 
     */
    delete<T extends ProjectMemberDeleteArgs>(args: SelectSubset<T, ProjectMemberDeleteArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMember.
     * @param {ProjectMemberUpdateArgs} args - Arguments to update one ProjectMember.
     * @example
     * // Update one ProjectMember
     * const projectMember = await prisma.projectMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMemberUpdateArgs>(args: SelectSubset<T, ProjectMemberUpdateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMembers.
     * @param {ProjectMemberDeleteManyArgs} args - Arguments to filter ProjectMembers to delete.
     * @example
     * // Delete a few ProjectMembers
     * const { count } = await prisma.projectMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMemberDeleteManyArgs>(args?: SelectSubset<T, ProjectMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMemberUpdateManyArgs>(args: SelectSubset<T, ProjectMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectMember.
     * @param {ProjectMemberUpsertArgs} args - Arguments to update or create a ProjectMember.
     * @example
     * // Update or create a ProjectMember
     * const projectMember = await prisma.projectMember.upsert({
     *   create: {
     *     // ... data to create a ProjectMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMember we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMemberUpsertArgs>(args: SelectSubset<T, ProjectMemberUpsertArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMembers that matches the filter.
     * @param {ProjectMemberFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const projectMember = await prisma.projectMember.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProjectMemberFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProjectMember.
     * @param {ProjectMemberAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const projectMember = await prisma.projectMember.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProjectMemberAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberCountArgs} args - Arguments to filter ProjectMembers to count.
     * @example
     * // Count the number of ProjectMembers
     * const count = await prisma.projectMember.count({
     *   where: {
     *     // ... the filter for the ProjectMembers we want to count
     *   }
     * })
    **/
    count<T extends ProjectMemberCountArgs>(
      args?: Subset<T, ProjectMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectMemberAggregateArgs>(args: Subset<T, ProjectMemberAggregateArgs>): Prisma.PrismaPromise<GetProjectMemberAggregateType<T>>

    /**
     * Group by ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMemberGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMember model
   */
  readonly fields: ProjectMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends ChallengerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengerDefaultArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectMember model
   */
  interface ProjectMemberFieldRefs {
    readonly id: FieldRef<"ProjectMember", 'String'>
    readonly projectId: FieldRef<"ProjectMember", 'String'>
    readonly userId: FieldRef<"ProjectMember", 'String'>
    readonly createdAt: FieldRef<"ProjectMember", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMember findUnique
   */
  export type ProjectMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findUniqueOrThrow
   */
  export type ProjectMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findFirst
   */
  export type ProjectMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findFirstOrThrow
   */
  export type ProjectMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findMany
   */
  export type ProjectMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember create
   */
  export type ProjectMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMember.
     */
    data: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
  }

  /**
   * ProjectMember createMany
   */
  export type ProjectMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
  }

  /**
   * ProjectMember update
   */
  export type ProjectMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMember.
     */
    data: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
    /**
     * Choose, which ProjectMember to update.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember updateMany
   */
  export type ProjectMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number
  }

  /**
   * ProjectMember upsert
   */
  export type ProjectMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMember to update in case it exists.
     */
    where: ProjectMemberWhereUniqueInput
    /**
     * In case the ProjectMember found by the `where` argument doesn't exist, create a new ProjectMember with this data.
     */
    create: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
    /**
     * In case the ProjectMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
  }

  /**
   * ProjectMember delete
   */
  export type ProjectMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter which ProjectMember to delete.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember deleteMany
   */
  export type ProjectMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMembers to delete
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to delete.
     */
    limit?: number
  }

  /**
   * ProjectMember findRaw
   */
  export type ProjectMemberFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ProjectMember aggregateRaw
   */
  export type ProjectMemberAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ProjectMember without action
   */
  export type ProjectMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
  }


  /**
   * Model FormAnswer
   */

  export type AggregateFormAnswer = {
    _count: FormAnswerCountAggregateOutputType | null
    _min: FormAnswerMinAggregateOutputType | null
    _max: FormAnswerMaxAggregateOutputType | null
  }

  export type FormAnswerMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    questionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormAnswerMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    questionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormAnswerCountAggregateOutputType = {
    id: number
    applicationId: number
    questionId: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormAnswerMinAggregateInputType = {
    id?: true
    applicationId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormAnswerMaxAggregateInputType = {
    id?: true
    applicationId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormAnswerCountAggregateInputType = {
    id?: true
    applicationId?: true
    questionId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormAnswer to aggregate.
     */
    where?: FormAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormAnswers to fetch.
     */
    orderBy?: FormAnswerOrderByWithRelationInput | FormAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormAnswers
    **/
    _count?: true | FormAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormAnswerMaxAggregateInputType
  }

  export type GetFormAnswerAggregateType<T extends FormAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateFormAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormAnswer[P]>
      : GetScalarType<T[P], AggregateFormAnswer[P]>
  }




  export type FormAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormAnswerWhereInput
    orderBy?: FormAnswerOrderByWithAggregationInput | FormAnswerOrderByWithAggregationInput[]
    by: FormAnswerScalarFieldEnum[] | FormAnswerScalarFieldEnum
    having?: FormAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormAnswerCountAggregateInputType | true
    _min?: FormAnswerMinAggregateInputType
    _max?: FormAnswerMaxAggregateInputType
  }

  export type FormAnswerGroupByOutputType = {
    id: string
    applicationId: string
    questionId: string
    value: string[]
    createdAt: Date
    updatedAt: Date
    _count: FormAnswerCountAggregateOutputType | null
    _min: FormAnswerMinAggregateOutputType | null
    _max: FormAnswerMaxAggregateOutputType | null
  }

  type GetFormAnswerGroupByPayload<T extends FormAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], FormAnswerGroupByOutputType[P]>
        }
      >
    >


  export type FormAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    questionId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    question?: boolean | FormQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formAnswer"]>



  export type FormAnswerSelectScalar = {
    id?: boolean
    applicationId?: boolean
    questionId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "questionId" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["formAnswer"]>
  export type FormAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    question?: boolean | FormQuestionDefaultArgs<ExtArgs>
  }

  export type $FormAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormAnswer"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
      question: Prisma.$FormQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      questionId: string
      value: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["formAnswer"]>
    composites: {}
  }

  type FormAnswerGetPayload<S extends boolean | null | undefined | FormAnswerDefaultArgs> = $Result.GetResult<Prisma.$FormAnswerPayload, S>

  type FormAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormAnswerCountAggregateInputType | true
    }

  export interface FormAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormAnswer'], meta: { name: 'FormAnswer' } }
    /**
     * Find zero or one FormAnswer that matches the filter.
     * @param {FormAnswerFindUniqueArgs} args - Arguments to find a FormAnswer
     * @example
     * // Get one FormAnswer
     * const formAnswer = await prisma.formAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormAnswerFindUniqueArgs>(args: SelectSubset<T, FormAnswerFindUniqueArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormAnswerFindUniqueOrThrowArgs} args - Arguments to find a FormAnswer
     * @example
     * // Get one FormAnswer
     * const formAnswer = await prisma.formAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, FormAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerFindFirstArgs} args - Arguments to find a FormAnswer
     * @example
     * // Get one FormAnswer
     * const formAnswer = await prisma.formAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormAnswerFindFirstArgs>(args?: SelectSubset<T, FormAnswerFindFirstArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerFindFirstOrThrowArgs} args - Arguments to find a FormAnswer
     * @example
     * // Get one FormAnswer
     * const formAnswer = await prisma.formAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, FormAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormAnswers
     * const formAnswers = await prisma.formAnswer.findMany()
     * 
     * // Get first 10 FormAnswers
     * const formAnswers = await prisma.formAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formAnswerWithIdOnly = await prisma.formAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormAnswerFindManyArgs>(args?: SelectSubset<T, FormAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormAnswer.
     * @param {FormAnswerCreateArgs} args - Arguments to create a FormAnswer.
     * @example
     * // Create one FormAnswer
     * const FormAnswer = await prisma.formAnswer.create({
     *   data: {
     *     // ... data to create a FormAnswer
     *   }
     * })
     * 
     */
    create<T extends FormAnswerCreateArgs>(args: SelectSubset<T, FormAnswerCreateArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormAnswers.
     * @param {FormAnswerCreateManyArgs} args - Arguments to create many FormAnswers.
     * @example
     * // Create many FormAnswers
     * const formAnswer = await prisma.formAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormAnswerCreateManyArgs>(args?: SelectSubset<T, FormAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FormAnswer.
     * @param {FormAnswerDeleteArgs} args - Arguments to delete one FormAnswer.
     * @example
     * // Delete one FormAnswer
     * const FormAnswer = await prisma.formAnswer.delete({
     *   where: {
     *     // ... filter to delete one FormAnswer
     *   }
     * })
     * 
     */
    delete<T extends FormAnswerDeleteArgs>(args: SelectSubset<T, FormAnswerDeleteArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormAnswer.
     * @param {FormAnswerUpdateArgs} args - Arguments to update one FormAnswer.
     * @example
     * // Update one FormAnswer
     * const formAnswer = await prisma.formAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormAnswerUpdateArgs>(args: SelectSubset<T, FormAnswerUpdateArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormAnswers.
     * @param {FormAnswerDeleteManyArgs} args - Arguments to filter FormAnswers to delete.
     * @example
     * // Delete a few FormAnswers
     * const { count } = await prisma.formAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormAnswerDeleteManyArgs>(args?: SelectSubset<T, FormAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormAnswers
     * const formAnswer = await prisma.formAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormAnswerUpdateManyArgs>(args: SelectSubset<T, FormAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FormAnswer.
     * @param {FormAnswerUpsertArgs} args - Arguments to update or create a FormAnswer.
     * @example
     * // Update or create a FormAnswer
     * const formAnswer = await prisma.formAnswer.upsert({
     *   create: {
     *     // ... data to create a FormAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormAnswer we want to update
     *   }
     * })
     */
    upsert<T extends FormAnswerUpsertArgs>(args: SelectSubset<T, FormAnswerUpsertArgs<ExtArgs>>): Prisma__FormAnswerClient<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormAnswers that matches the filter.
     * @param {FormAnswerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const formAnswer = await prisma.formAnswer.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FormAnswerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FormAnswer.
     * @param {FormAnswerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const formAnswer = await prisma.formAnswer.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FormAnswerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FormAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerCountArgs} args - Arguments to filter FormAnswers to count.
     * @example
     * // Count the number of FormAnswers
     * const count = await prisma.formAnswer.count({
     *   where: {
     *     // ... the filter for the FormAnswers we want to count
     *   }
     * })
    **/
    count<T extends FormAnswerCountArgs>(
      args?: Subset<T, FormAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormAnswerAggregateArgs>(args: Subset<T, FormAnswerAggregateArgs>): Prisma.PrismaPromise<GetFormAnswerAggregateType<T>>

    /**
     * Group by FormAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormAnswerGroupByArgs['orderBy'] }
        : { orderBy?: FormAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormAnswer model
   */
  readonly fields: FormAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends FormQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormQuestionDefaultArgs<ExtArgs>>): Prisma__FormQuestionClient<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormAnswer model
   */
  interface FormAnswerFieldRefs {
    readonly id: FieldRef<"FormAnswer", 'String'>
    readonly applicationId: FieldRef<"FormAnswer", 'String'>
    readonly questionId: FieldRef<"FormAnswer", 'String'>
    readonly value: FieldRef<"FormAnswer", 'String[]'>
    readonly createdAt: FieldRef<"FormAnswer", 'DateTime'>
    readonly updatedAt: FieldRef<"FormAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormAnswer findUnique
   */
  export type FormAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FormAnswer to fetch.
     */
    where: FormAnswerWhereUniqueInput
  }

  /**
   * FormAnswer findUniqueOrThrow
   */
  export type FormAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FormAnswer to fetch.
     */
    where: FormAnswerWhereUniqueInput
  }

  /**
   * FormAnswer findFirst
   */
  export type FormAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FormAnswer to fetch.
     */
    where?: FormAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormAnswers to fetch.
     */
    orderBy?: FormAnswerOrderByWithRelationInput | FormAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormAnswers.
     */
    cursor?: FormAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormAnswers.
     */
    distinct?: FormAnswerScalarFieldEnum | FormAnswerScalarFieldEnum[]
  }

  /**
   * FormAnswer findFirstOrThrow
   */
  export type FormAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FormAnswer to fetch.
     */
    where?: FormAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormAnswers to fetch.
     */
    orderBy?: FormAnswerOrderByWithRelationInput | FormAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormAnswers.
     */
    cursor?: FormAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormAnswers.
     */
    distinct?: FormAnswerScalarFieldEnum | FormAnswerScalarFieldEnum[]
  }

  /**
   * FormAnswer findMany
   */
  export type FormAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FormAnswers to fetch.
     */
    where?: FormAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormAnswers to fetch.
     */
    orderBy?: FormAnswerOrderByWithRelationInput | FormAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormAnswers.
     */
    cursor?: FormAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormAnswers.
     */
    skip?: number
    distinct?: FormAnswerScalarFieldEnum | FormAnswerScalarFieldEnum[]
  }

  /**
   * FormAnswer create
   */
  export type FormAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a FormAnswer.
     */
    data: XOR<FormAnswerCreateInput, FormAnswerUncheckedCreateInput>
  }

  /**
   * FormAnswer createMany
   */
  export type FormAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormAnswers.
     */
    data: FormAnswerCreateManyInput | FormAnswerCreateManyInput[]
  }

  /**
   * FormAnswer update
   */
  export type FormAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a FormAnswer.
     */
    data: XOR<FormAnswerUpdateInput, FormAnswerUncheckedUpdateInput>
    /**
     * Choose, which FormAnswer to update.
     */
    where: FormAnswerWhereUniqueInput
  }

  /**
   * FormAnswer updateMany
   */
  export type FormAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormAnswers.
     */
    data: XOR<FormAnswerUpdateManyMutationInput, FormAnswerUncheckedUpdateManyInput>
    /**
     * Filter which FormAnswers to update
     */
    where?: FormAnswerWhereInput
    /**
     * Limit how many FormAnswers to update.
     */
    limit?: number
  }

  /**
   * FormAnswer upsert
   */
  export type FormAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the FormAnswer to update in case it exists.
     */
    where: FormAnswerWhereUniqueInput
    /**
     * In case the FormAnswer found by the `where` argument doesn't exist, create a new FormAnswer with this data.
     */
    create: XOR<FormAnswerCreateInput, FormAnswerUncheckedCreateInput>
    /**
     * In case the FormAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormAnswerUpdateInput, FormAnswerUncheckedUpdateInput>
  }

  /**
   * FormAnswer delete
   */
  export type FormAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    /**
     * Filter which FormAnswer to delete.
     */
    where: FormAnswerWhereUniqueInput
  }

  /**
   * FormAnswer deleteMany
   */
  export type FormAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormAnswers to delete
     */
    where?: FormAnswerWhereInput
    /**
     * Limit how many FormAnswers to delete.
     */
    limit?: number
  }

  /**
   * FormAnswer findRaw
   */
  export type FormAnswerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FormAnswer aggregateRaw
   */
  export type FormAnswerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FormAnswer without action
   */
  export type FormAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    applicantId: string | null
    formId: string | null
    status: $Enums.ApplicationStatusEnum | null
    matchingRoundId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    applicantId: string | null
    formId: string | null
    status: $Enums.ApplicationStatusEnum | null
    matchingRoundId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    applicantId: number
    formId: number
    status: number
    matchingRoundId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    applicantId?: true
    formId?: true
    status?: true
    matchingRoundId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    applicantId?: true
    formId?: true
    status?: true
    matchingRoundId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    applicantId?: true
    formId?: true
    status?: true
    matchingRoundId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    applicantId: string
    formId: string
    status: $Enums.ApplicationStatusEnum
    matchingRoundId: string
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    formId?: boolean
    status?: boolean
    matchingRoundId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ChallengerDefaultArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
    matchingRound?: boolean | MatchingRoundDefaultArgs<ExtArgs>
    formAnswers?: boolean | Application$formAnswersArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>



  export type ApplicationSelectScalar = {
    id?: boolean
    applicantId?: boolean
    formId?: boolean
    status?: boolean
    matchingRoundId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicantId" | "formId" | "status" | "matchingRoundId" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ChallengerDefaultArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
    matchingRound?: boolean | MatchingRoundDefaultArgs<ExtArgs>
    formAnswers?: boolean | Application$formAnswersArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      applicant: Prisma.$ChallengerPayload<ExtArgs>
      form: Prisma.$FormPayload<ExtArgs>
      matchingRound: Prisma.$MatchingRoundPayload<ExtArgs>
      formAnswers: Prisma.$FormAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicantId: string
      formId: string
      status: $Enums.ApplicationStatusEnum
      matchingRoundId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * @param {ApplicationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const application = await prisma.application.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ApplicationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Application.
     * @param {ApplicationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const application = await prisma.application.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ApplicationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ChallengerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengerDefaultArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matchingRound<T extends MatchingRoundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchingRoundDefaultArgs<ExtArgs>>): Prisma__MatchingRoundClient<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formAnswers<T extends Application$formAnswersArgs<ExtArgs> = {}>(args?: Subset<T, Application$formAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly applicantId: FieldRef<"Application", 'String'>
    readonly formId: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'ApplicationStatusEnum'>
    readonly matchingRoundId: FieldRef<"Application", 'String'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application findRaw
   */
  export type ApplicationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Application aggregateRaw
   */
  export type ApplicationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Application.formAnswers
   */
  export type Application$formAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormAnswer
     */
    select?: FormAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormAnswer
     */
    omit?: FormAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormAnswerInclude<ExtArgs> | null
    where?: FormAnswerWhereInput
    orderBy?: FormAnswerOrderByWithRelationInput | FormAnswerOrderByWithRelationInput[]
    cursor?: FormAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormAnswerScalarFieldEnum | FormAnswerScalarFieldEnum[]
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    handle: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolMaxAggregateOutputType = {
    handle: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolCountAggregateOutputType = {
    handle: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    handle?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolMaxAggregateInputType = {
    handle?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolCountAggregateInputType = {
    handle?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    handle: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    handle?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challengers?: boolean | School$challengersArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>



  export type SchoolSelectScalar = {
    handle?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"handle" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challengers?: boolean | School$challengersArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      challengers: Prisma.$ChallengerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      handle: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `handle`
     * const schoolWithHandleOnly = await prisma.school.findMany({ select: { handle: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * @param {SchoolFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const school = await prisma.school.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SchoolFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a School.
     * @param {SchoolAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const school = await prisma.school.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SchoolAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challengers<T extends School$challengersArgs<ExtArgs> = {}>(args?: Subset<T, School$challengersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly handle: FieldRef<"School", 'String'>
    readonly name: FieldRef<"School", 'String'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
    readonly updatedAt: FieldRef<"School", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School findRaw
   */
  export type SchoolFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * School aggregateRaw
   */
  export type SchoolAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * School.challengers
   */
  export type School$challengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerInclude<ExtArgs> | null
    where?: ChallengerWhereInput
    orderBy?: ChallengerOrderByWithRelationInput | ChallengerOrderByWithRelationInput[]
    cursor?: ChallengerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengerScalarFieldEnum | ChallengerScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ChallengerScalarFieldEnum: {
    id: 'id',
    umsbChallengerId: 'umsbChallengerId',
    name: 'name',
    nickname: 'nickname',
    introduction: 'introduction',
    school: 'school',
    studentId: 'studentId',
    password: 'password',
    part: 'part',
    role: 'role',
    gender: 'gender',
    chapter: 'chapter',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChallengerScalarFieldEnum = (typeof ChallengerScalarFieldEnum)[keyof typeof ChallengerScalarFieldEnum]


  export const MatchingRoundScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDatetime: 'startDatetime',
    endDatetime: 'endDatetime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchingRoundScalarFieldEnum = (typeof MatchingRoundScalarFieldEnum)[keyof typeof MatchingRoundScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    link: 'link',
    bannerImage: 'bannerImage',
    planId: 'planId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const FormScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    availableMatchingRounds: 'availableMatchingRounds'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const FormQuestionScalarFieldEnum: {
    id: 'id',
    formId: 'formId',
    questionNo: 'questionNo',
    title: 'title',
    description: 'description',
    type: 'type',
    options: 'options',
    isRequired: 'isRequired',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormQuestionScalarFieldEnum = (typeof FormQuestionScalarFieldEnum)[keyof typeof FormQuestionScalarFieldEnum]


  export const ProjectMemberScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectMemberScalarFieldEnum = (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum]


  export const FormAnswerScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    questionId: 'questionId',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormAnswerScalarFieldEnum = (typeof FormAnswerScalarFieldEnum)[keyof typeof FormAnswerScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    applicantId: 'applicantId',
    formId: 'formId',
    status: 'status',
    matchingRoundId: 'matchingRoundId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    handle: 'handle',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserPartEnum'
   */
  export type EnumUserPartEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserPartEnum'>
    


  /**
   * Reference to a field of type 'UserPartEnum[]'
   */
  export type ListEnumUserPartEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserPartEnum[]'>
    


  /**
   * Reference to a field of type 'UserRoleEnum'
   */
  export type EnumUserRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoleEnum'>
    


  /**
   * Reference to a field of type 'UserRoleEnum[]'
   */
  export type ListEnumUserRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoleEnum[]'>
    


  /**
   * Reference to a field of type 'GenderEnum'
   */
  export type EnumGenderEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderEnum'>
    


  /**
   * Reference to a field of type 'GenderEnum[]'
   */
  export type ListEnumGenderEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderEnum[]'>
    


  /**
   * Reference to a field of type 'ChallengerChapterEnum'
   */
  export type EnumChallengerChapterEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChallengerChapterEnum'>
    


  /**
   * Reference to a field of type 'ChallengerChapterEnum[]'
   */
  export type ListEnumChallengerChapterEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChallengerChapterEnum[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'QuestionTypeEnum'
   */
  export type EnumQuestionTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionTypeEnum'>
    


  /**
   * Reference to a field of type 'QuestionTypeEnum[]'
   */
  export type ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionTypeEnum[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ApplicationStatusEnum'
   */
  export type EnumApplicationStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatusEnum'>
    


  /**
   * Reference to a field of type 'ApplicationStatusEnum[]'
   */
  export type ListEnumApplicationStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatusEnum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ChallengerWhereInput = {
    AND?: ChallengerWhereInput | ChallengerWhereInput[]
    OR?: ChallengerWhereInput[]
    NOT?: ChallengerWhereInput | ChallengerWhereInput[]
    id?: StringFilter<"Challenger"> | string
    umsbChallengerId?: StringNullableFilter<"Challenger"> | string | null
    name?: StringFilter<"Challenger"> | string
    nickname?: StringFilter<"Challenger"> | string
    introduction?: StringNullableFilter<"Challenger"> | string | null
    school?: StringFilter<"Challenger"> | string
    studentId?: StringFilter<"Challenger"> | string
    password?: StringFilter<"Challenger"> | string
    part?: EnumUserPartEnumFilter<"Challenger"> | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFilter<"Challenger"> | $Enums.UserRoleEnum
    gender?: EnumGenderEnumNullableFilter<"Challenger"> | $Enums.GenderEnum | null
    chapter?: EnumChallengerChapterEnumNullableFilter<"Challenger"> | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFilter<"Challenger"> | Date | string
    updatedAt?: DateTimeFilter<"Challenger"> | Date | string
    applications?: ApplicationListRelationFilter
    projects?: ProjectListRelationFilter
    ProjectMember?: ProjectMemberListRelationFilter
    challengerSchool?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type ChallengerOrderByWithRelationInput = {
    id?: SortOrder
    umsbChallengerId?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    introduction?: SortOrder
    school?: SortOrder
    studentId?: SortOrder
    password?: SortOrder
    part?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    chapter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    ProjectMember?: ProjectMemberOrderByRelationAggregateInput
    challengerSchool?: SchoolOrderByWithRelationInput
  }

  export type ChallengerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    school_studentId?: ChallengerSchoolStudentIdCompoundUniqueInput
    AND?: ChallengerWhereInput | ChallengerWhereInput[]
    OR?: ChallengerWhereInput[]
    NOT?: ChallengerWhereInput | ChallengerWhereInput[]
    umsbChallengerId?: StringNullableFilter<"Challenger"> | string | null
    name?: StringFilter<"Challenger"> | string
    nickname?: StringFilter<"Challenger"> | string
    introduction?: StringNullableFilter<"Challenger"> | string | null
    school?: StringFilter<"Challenger"> | string
    studentId?: StringFilter<"Challenger"> | string
    password?: StringFilter<"Challenger"> | string
    part?: EnumUserPartEnumFilter<"Challenger"> | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFilter<"Challenger"> | $Enums.UserRoleEnum
    gender?: EnumGenderEnumNullableFilter<"Challenger"> | $Enums.GenderEnum | null
    chapter?: EnumChallengerChapterEnumNullableFilter<"Challenger"> | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFilter<"Challenger"> | Date | string
    updatedAt?: DateTimeFilter<"Challenger"> | Date | string
    applications?: ApplicationListRelationFilter
    projects?: ProjectListRelationFilter
    ProjectMember?: ProjectMemberListRelationFilter
    challengerSchool?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id" | "school_studentId">

  export type ChallengerOrderByWithAggregationInput = {
    id?: SortOrder
    umsbChallengerId?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    introduction?: SortOrder
    school?: SortOrder
    studentId?: SortOrder
    password?: SortOrder
    part?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    chapter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChallengerCountOrderByAggregateInput
    _max?: ChallengerMaxOrderByAggregateInput
    _min?: ChallengerMinOrderByAggregateInput
  }

  export type ChallengerScalarWhereWithAggregatesInput = {
    AND?: ChallengerScalarWhereWithAggregatesInput | ChallengerScalarWhereWithAggregatesInput[]
    OR?: ChallengerScalarWhereWithAggregatesInput[]
    NOT?: ChallengerScalarWhereWithAggregatesInput | ChallengerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Challenger"> | string
    umsbChallengerId?: StringNullableWithAggregatesFilter<"Challenger"> | string | null
    name?: StringWithAggregatesFilter<"Challenger"> | string
    nickname?: StringWithAggregatesFilter<"Challenger"> | string
    introduction?: StringNullableWithAggregatesFilter<"Challenger"> | string | null
    school?: StringWithAggregatesFilter<"Challenger"> | string
    studentId?: StringWithAggregatesFilter<"Challenger"> | string
    password?: StringWithAggregatesFilter<"Challenger"> | string
    part?: EnumUserPartEnumWithAggregatesFilter<"Challenger"> | $Enums.UserPartEnum
    role?: EnumUserRoleEnumWithAggregatesFilter<"Challenger"> | $Enums.UserRoleEnum
    gender?: EnumGenderEnumNullableWithAggregatesFilter<"Challenger"> | $Enums.GenderEnum | null
    chapter?: EnumChallengerChapterEnumNullableWithAggregatesFilter<"Challenger"> | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeWithAggregatesFilter<"Challenger"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Challenger"> | Date | string
  }

  export type MatchingRoundWhereInput = {
    AND?: MatchingRoundWhereInput | MatchingRoundWhereInput[]
    OR?: MatchingRoundWhereInput[]
    NOT?: MatchingRoundWhereInput | MatchingRoundWhereInput[]
    id?: StringFilter<"MatchingRound"> | string
    name?: StringFilter<"MatchingRound"> | string
    startDatetime?: DateTimeFilter<"MatchingRound"> | Date | string
    endDatetime?: DateTimeFilter<"MatchingRound"> | Date | string
    createdAt?: DateTimeFilter<"MatchingRound"> | Date | string
    updatedAt?: DateTimeFilter<"MatchingRound"> | Date | string
    applicationsInRound?: ApplicationListRelationFilter
  }

  export type MatchingRoundOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicationsInRound?: ApplicationOrderByRelationAggregateInput
  }

  export type MatchingRoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchingRoundWhereInput | MatchingRoundWhereInput[]
    OR?: MatchingRoundWhereInput[]
    NOT?: MatchingRoundWhereInput | MatchingRoundWhereInput[]
    name?: StringFilter<"MatchingRound"> | string
    startDatetime?: DateTimeFilter<"MatchingRound"> | Date | string
    endDatetime?: DateTimeFilter<"MatchingRound"> | Date | string
    createdAt?: DateTimeFilter<"MatchingRound"> | Date | string
    updatedAt?: DateTimeFilter<"MatchingRound"> | Date | string
    applicationsInRound?: ApplicationListRelationFilter
  }, "id">

  export type MatchingRoundOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchingRoundCountOrderByAggregateInput
    _max?: MatchingRoundMaxOrderByAggregateInput
    _min?: MatchingRoundMinOrderByAggregateInput
  }

  export type MatchingRoundScalarWhereWithAggregatesInput = {
    AND?: MatchingRoundScalarWhereWithAggregatesInput | MatchingRoundScalarWhereWithAggregatesInput[]
    OR?: MatchingRoundScalarWhereWithAggregatesInput[]
    NOT?: MatchingRoundScalarWhereWithAggregatesInput | MatchingRoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchingRound"> | string
    name?: StringWithAggregatesFilter<"MatchingRound"> | string
    startDatetime?: DateTimeWithAggregatesFilter<"MatchingRound"> | Date | string
    endDatetime?: DateTimeWithAggregatesFilter<"MatchingRound"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MatchingRound"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchingRound"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    link?: StringFilter<"Project"> | string
    bannerImage?: StringNullableFilter<"Project"> | string | null
    planId?: StringFilter<"Project"> | string
    partTo?: ProjectToCompositeListFilter | ProjectToObjectEqualityInput[]
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    projectMember?: ProjectMemberListRelationFilter
    projectForms?: FormListRelationFilter
    projectPlan?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    bannerImage?: SortOrder
    planId?: SortOrder
    partTo?: ProjectToOrderByCompositeAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectMember?: ProjectMemberOrderByRelationAggregateInput
    projectForms?: FormOrderByRelationAggregateInput
    projectPlan?: ChallengerOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    link?: StringFilter<"Project"> | string
    bannerImage?: StringNullableFilter<"Project"> | string | null
    planId?: StringFilter<"Project"> | string
    partTo?: ProjectToCompositeListFilter | ProjectToObjectEqualityInput[]
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    projectMember?: ProjectMemberListRelationFilter
    projectForms?: FormListRelationFilter
    projectPlan?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    bannerImage?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    link?: StringWithAggregatesFilter<"Project"> | string
    bannerImage?: StringNullableWithAggregatesFilter<"Project"> | string | null
    planId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type FormWhereInput = {
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    id?: StringFilter<"Form"> | string
    projectId?: StringFilter<"Form"> | string
    title?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    availableMatchingRounds?: StringNullableListFilter<"Form">
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    applications?: ApplicationListRelationFilter
    questions?: FormQuestionListRelationFilter
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availableMatchingRounds?: SortOrder
    project?: ProjectOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
    questions?: FormQuestionOrderByRelationAggregateInput
  }

  export type FormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    projectId?: StringFilter<"Form"> | string
    title?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    availableMatchingRounds?: StringNullableListFilter<"Form">
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    applications?: ApplicationListRelationFilter
    questions?: FormQuestionListRelationFilter
  }, "id">

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availableMatchingRounds?: SortOrder
    _count?: FormCountOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    OR?: FormScalarWhereWithAggregatesInput[]
    NOT?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Form"> | string
    projectId?: StringWithAggregatesFilter<"Form"> | string
    title?: StringWithAggregatesFilter<"Form"> | string
    description?: StringNullableWithAggregatesFilter<"Form"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
    availableMatchingRounds?: StringNullableListFilter<"Form">
  }

  export type FormQuestionWhereInput = {
    AND?: FormQuestionWhereInput | FormQuestionWhereInput[]
    OR?: FormQuestionWhereInput[]
    NOT?: FormQuestionWhereInput | FormQuestionWhereInput[]
    id?: StringFilter<"FormQuestion"> | string
    formId?: StringFilter<"FormQuestion"> | string
    questionNo?: IntFilter<"FormQuestion"> | number
    title?: StringFilter<"FormQuestion"> | string
    description?: StringNullableFilter<"FormQuestion"> | string | null
    type?: EnumQuestionTypeEnumFilter<"FormQuestion"> | $Enums.QuestionTypeEnum
    options?: StringNullableListFilter<"FormQuestion">
    isRequired?: BoolFilter<"FormQuestion"> | boolean
    isDeleted?: BoolFilter<"FormQuestion"> | boolean
    createdAt?: DateTimeFilter<"FormQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"FormQuestion"> | Date | string
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
    formAnswers?: FormAnswerListRelationFilter
  }

  export type FormQuestionOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    questionNo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    options?: SortOrder
    isRequired?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    form?: FormOrderByWithRelationInput
    formAnswers?: FormAnswerOrderByRelationAggregateInput
  }

  export type FormQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormQuestionWhereInput | FormQuestionWhereInput[]
    OR?: FormQuestionWhereInput[]
    NOT?: FormQuestionWhereInput | FormQuestionWhereInput[]
    formId?: StringFilter<"FormQuestion"> | string
    questionNo?: IntFilter<"FormQuestion"> | number
    title?: StringFilter<"FormQuestion"> | string
    description?: StringNullableFilter<"FormQuestion"> | string | null
    type?: EnumQuestionTypeEnumFilter<"FormQuestion"> | $Enums.QuestionTypeEnum
    options?: StringNullableListFilter<"FormQuestion">
    isRequired?: BoolFilter<"FormQuestion"> | boolean
    isDeleted?: BoolFilter<"FormQuestion"> | boolean
    createdAt?: DateTimeFilter<"FormQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"FormQuestion"> | Date | string
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
    formAnswers?: FormAnswerListRelationFilter
  }, "id">

  export type FormQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    questionNo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    options?: SortOrder
    isRequired?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormQuestionCountOrderByAggregateInput
    _avg?: FormQuestionAvgOrderByAggregateInput
    _max?: FormQuestionMaxOrderByAggregateInput
    _min?: FormQuestionMinOrderByAggregateInput
    _sum?: FormQuestionSumOrderByAggregateInput
  }

  export type FormQuestionScalarWhereWithAggregatesInput = {
    AND?: FormQuestionScalarWhereWithAggregatesInput | FormQuestionScalarWhereWithAggregatesInput[]
    OR?: FormQuestionScalarWhereWithAggregatesInput[]
    NOT?: FormQuestionScalarWhereWithAggregatesInput | FormQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormQuestion"> | string
    formId?: StringWithAggregatesFilter<"FormQuestion"> | string
    questionNo?: IntWithAggregatesFilter<"FormQuestion"> | number
    title?: StringWithAggregatesFilter<"FormQuestion"> | string
    description?: StringNullableWithAggregatesFilter<"FormQuestion"> | string | null
    type?: EnumQuestionTypeEnumWithAggregatesFilter<"FormQuestion"> | $Enums.QuestionTypeEnum
    options?: StringNullableListFilter<"FormQuestion">
    isRequired?: BoolWithAggregatesFilter<"FormQuestion"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"FormQuestion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FormQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormQuestion"> | Date | string
  }

  export type ProjectMemberWhereInput = {
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    id?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    userId?: StringFilter<"ProjectMember"> | string
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectMember"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
  }

  export type ProjectMemberOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: ChallengerOrderByWithRelationInput
  }

  export type ProjectMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_userId?: ProjectMemberProjectIdUserIdCompoundUniqueInput
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    projectId?: StringFilter<"ProjectMember"> | string
    userId?: StringFilter<"ProjectMember"> | string
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectMember"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
  }, "id" | "projectId_userId">

  export type ProjectMemberOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectMemberCountOrderByAggregateInput
    _max?: ProjectMemberMaxOrderByAggregateInput
    _min?: ProjectMemberMinOrderByAggregateInput
  }

  export type ProjectMemberScalarWhereWithAggregatesInput = {
    AND?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    OR?: ProjectMemberScalarWhereWithAggregatesInput[]
    NOT?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectMember"> | string
    projectId?: StringWithAggregatesFilter<"ProjectMember"> | string
    userId?: StringWithAggregatesFilter<"ProjectMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectMember"> | Date | string
  }

  export type FormAnswerWhereInput = {
    AND?: FormAnswerWhereInput | FormAnswerWhereInput[]
    OR?: FormAnswerWhereInput[]
    NOT?: FormAnswerWhereInput | FormAnswerWhereInput[]
    id?: StringFilter<"FormAnswer"> | string
    applicationId?: StringFilter<"FormAnswer"> | string
    questionId?: StringFilter<"FormAnswer"> | string
    value?: StringNullableListFilter<"FormAnswer">
    createdAt?: DateTimeFilter<"FormAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"FormAnswer"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    question?: XOR<FormQuestionScalarRelationFilter, FormQuestionWhereInput>
  }

  export type FormAnswerOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    questionId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    question?: FormQuestionOrderByWithRelationInput
  }

  export type FormAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormAnswerWhereInput | FormAnswerWhereInput[]
    OR?: FormAnswerWhereInput[]
    NOT?: FormAnswerWhereInput | FormAnswerWhereInput[]
    applicationId?: StringFilter<"FormAnswer"> | string
    questionId?: StringFilter<"FormAnswer"> | string
    value?: StringNullableListFilter<"FormAnswer">
    createdAt?: DateTimeFilter<"FormAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"FormAnswer"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    question?: XOR<FormQuestionScalarRelationFilter, FormQuestionWhereInput>
  }, "id">

  export type FormAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    questionId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormAnswerCountOrderByAggregateInput
    _max?: FormAnswerMaxOrderByAggregateInput
    _min?: FormAnswerMinOrderByAggregateInput
  }

  export type FormAnswerScalarWhereWithAggregatesInput = {
    AND?: FormAnswerScalarWhereWithAggregatesInput | FormAnswerScalarWhereWithAggregatesInput[]
    OR?: FormAnswerScalarWhereWithAggregatesInput[]
    NOT?: FormAnswerScalarWhereWithAggregatesInput | FormAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormAnswer"> | string
    applicationId?: StringWithAggregatesFilter<"FormAnswer"> | string
    questionId?: StringWithAggregatesFilter<"FormAnswer"> | string
    value?: StringNullableListFilter<"FormAnswer">
    createdAt?: DateTimeWithAggregatesFilter<"FormAnswer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormAnswer"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    formId?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusEnumFilter<"Application"> | $Enums.ApplicationStatusEnum
    matchingRoundId?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    applicant?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
    matchingRound?: XOR<MatchingRoundScalarRelationFilter, MatchingRoundWhereInput>
    formAnswers?: FormAnswerListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    formId?: SortOrder
    status?: SortOrder
    matchingRoundId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: ChallengerOrderByWithRelationInput
    form?: FormOrderByWithRelationInput
    matchingRound?: MatchingRoundOrderByWithRelationInput
    formAnswers?: FormAnswerOrderByRelationAggregateInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    applicantId_matchingRoundId?: ApplicationApplicantIdMatchingRoundIdCompoundUniqueInput
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    applicantId?: StringFilter<"Application"> | string
    formId?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusEnumFilter<"Application"> | $Enums.ApplicationStatusEnum
    matchingRoundId?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    applicant?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
    matchingRound?: XOR<MatchingRoundScalarRelationFilter, MatchingRoundWhereInput>
    formAnswers?: FormAnswerListRelationFilter
  }, "id" | "applicantId_matchingRoundId">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    formId?: SortOrder
    status?: SortOrder
    matchingRoundId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    applicantId?: StringWithAggregatesFilter<"Application"> | string
    formId?: StringWithAggregatesFilter<"Application"> | string
    status?: EnumApplicationStatusEnumWithAggregatesFilter<"Application"> | $Enums.ApplicationStatusEnum
    matchingRoundId?: StringWithAggregatesFilter<"Application"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    handle?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    challengers?: ChallengerListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    handle?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengers?: ChallengerOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    handle?: string
    handle_name?: SchoolHandleNameCompoundUniqueInput
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    challengers?: ChallengerListRelationFilter
  }, "handle" | "handle_name">

  export type SchoolOrderByWithAggregationInput = {
    handle?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    handle?: StringWithAggregatesFilter<"School"> | string
    name?: StringWithAggregatesFilter<"School"> | string
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
  }

  export type ChallengerCreateInput = {
    id?: string
    umsbChallengerId?: string | null
    name: string
    nickname: string
    introduction?: string | null
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role?: $Enums.UserRoleEnum
    gender?: $Enums.GenderEnum | null
    chapter?: $Enums.ChallengerChapterEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    projects?: ProjectCreateNestedManyWithoutProjectPlanInput
    ProjectMember?: ProjectMemberCreateNestedManyWithoutUserInput
    challengerSchool: SchoolCreateNestedOneWithoutChallengersInput
  }

  export type ChallengerUncheckedCreateInput = {
    id?: string
    umsbChallengerId?: string | null
    name: string
    nickname: string
    introduction?: string | null
    school: string
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role?: $Enums.UserRoleEnum
    gender?: $Enums.GenderEnum | null
    chapter?: $Enums.ChallengerChapterEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    projects?: ProjectUncheckedCreateNestedManyWithoutProjectPlanInput
    ProjectMember?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type ChallengerUpdateInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    projects?: ProjectUpdateManyWithoutProjectPlanNestedInput
    ProjectMember?: ProjectMemberUpdateManyWithoutUserNestedInput
    challengerSchool?: SchoolUpdateOneRequiredWithoutChallengersNestedInput
  }

  export type ChallengerUncheckedUpdateInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutProjectPlanNestedInput
    ProjectMember?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengerCreateManyInput = {
    id?: string
    umsbChallengerId?: string | null
    name: string
    nickname: string
    introduction?: string | null
    school: string
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role?: $Enums.UserRoleEnum
    gender?: $Enums.GenderEnum | null
    chapter?: $Enums.ChallengerChapterEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengerUpdateManyMutationInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengerUncheckedUpdateManyInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingRoundCreateInput = {
    id?: string
    name: string
    startDatetime: Date | string
    endDatetime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicationsInRound?: ApplicationCreateNestedManyWithoutMatchingRoundInput
  }

  export type MatchingRoundUncheckedCreateInput = {
    id?: string
    name: string
    startDatetime: Date | string
    endDatetime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    applicationsInRound?: ApplicationUncheckedCreateNestedManyWithoutMatchingRoundInput
  }

  export type MatchingRoundUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationsInRound?: ApplicationUpdateManyWithoutMatchingRoundNestedInput
  }

  export type MatchingRoundUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationsInRound?: ApplicationUncheckedUpdateManyWithoutMatchingRoundNestedInput
  }

  export type MatchingRoundCreateManyInput = {
    id?: string
    name: string
    startDatetime: Date | string
    endDatetime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchingRoundUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingRoundUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description: string
    link: string
    bannerImage?: string | null
    partTo?: XOR<ProjectToListCreateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMember?: ProjectMemberCreateNestedManyWithoutProjectInput
    projectForms?: FormCreateNestedManyWithoutProjectInput
    projectPlan: ChallengerCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    link: string
    bannerImage?: string | null
    planId: string
    partTo?: XOR<ProjectToListCreateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMember?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    projectForms?: FormUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    partTo?: XOR<ProjectToListUpdateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMember?: ProjectMemberUpdateManyWithoutProjectNestedInput
    projectForms?: FormUpdateManyWithoutProjectNestedInput
    projectPlan?: ChallengerUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    partTo?: XOR<ProjectToListUpdateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMember?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    projectForms?: FormUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    description: string
    link: string
    bannerImage?: string | null
    planId: string
    partTo?: XOR<ProjectToListCreateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    partTo?: XOR<ProjectToListUpdateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    partTo?: XOR<ProjectToListUpdateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availableMatchingRounds?: FormCreateavailableMatchingRoundsInput | string[]
    project: ProjectCreateNestedOneWithoutProjectFormsInput
    applications?: ApplicationCreateNestedManyWithoutFormInput
    questions?: FormQuestionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateInput = {
    id?: string
    projectId: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availableMatchingRounds?: FormCreateavailableMatchingRoundsInput | string[]
    applications?: ApplicationUncheckedCreateNestedManyWithoutFormInput
    questions?: FormQuestionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableMatchingRounds?: FormUpdateavailableMatchingRoundsInput | string[]
    project?: ProjectUpdateOneRequiredWithoutProjectFormsNestedInput
    applications?: ApplicationUpdateManyWithoutFormNestedInput
    questions?: FormQuestionUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableMatchingRounds?: FormUpdateavailableMatchingRoundsInput | string[]
    applications?: ApplicationUncheckedUpdateManyWithoutFormNestedInput
    questions?: FormQuestionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormCreateManyInput = {
    id?: string
    projectId: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availableMatchingRounds?: FormCreateavailableMatchingRoundsInput | string[]
  }

  export type FormUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableMatchingRounds?: FormUpdateavailableMatchingRoundsInput | string[]
  }

  export type FormUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableMatchingRounds?: FormUpdateavailableMatchingRoundsInput | string[]
  }

  export type FormQuestionCreateInput = {
    id?: string
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    form: FormCreateNestedOneWithoutQuestionsInput
    formAnswers?: FormAnswerCreateNestedManyWithoutQuestionInput
  }

  export type FormQuestionUncheckedCreateInput = {
    id?: string
    formId: string
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    formAnswers?: FormAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type FormQuestionUpdateInput = {
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutQuestionsNestedInput
    formAnswers?: FormAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type FormQuestionUncheckedUpdateInput = {
    formId?: StringFieldUpdateOperationsInput | string
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formAnswers?: FormAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type FormQuestionCreateManyInput = {
    id?: string
    formId: string
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormQuestionUpdateManyMutationInput = {
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormQuestionUncheckedUpdateManyInput = {
    formId?: StringFieldUpdateOperationsInput | string
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectMemberInput
    user: ChallengerCreateNestedOneWithoutProjectMemberInput
  }

  export type ProjectMemberUncheckedCreateInput = {
    id?: string
    projectId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectMemberNestedInput
    user?: ChallengerUpdateOneRequiredWithoutProjectMemberNestedInput
  }

  export type ProjectMemberUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateManyInput = {
    id?: string
    projectId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerCreateInput = {
    id?: string
    value?: FormAnswerCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutFormAnswersInput
    question: FormQuestionCreateNestedOneWithoutFormAnswersInput
  }

  export type FormAnswerUncheckedCreateInput = {
    id?: string
    applicationId: string
    questionId: string
    value?: FormAnswerCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormAnswerUpdateInput = {
    value?: FormAnswerUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutFormAnswersNestedInput
    question?: FormQuestionUpdateOneRequiredWithoutFormAnswersNestedInput
  }

  export type FormAnswerUncheckedUpdateInput = {
    applicationId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    value?: FormAnswerUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerCreateManyInput = {
    id?: string
    applicationId: string
    questionId: string
    value?: FormAnswerCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormAnswerUpdateManyMutationInput = {
    value?: FormAnswerUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerUncheckedUpdateManyInput = {
    applicationId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    value?: FormAnswerUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    status?: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ChallengerCreateNestedOneWithoutApplicationsInput
    form: FormCreateNestedOneWithoutApplicationsInput
    matchingRound: MatchingRoundCreateNestedOneWithoutApplicationsInRoundInput
    formAnswers?: FormAnswerCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    applicantId: string
    formId: string
    status?: $Enums.ApplicationStatusEnum
    matchingRoundId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    formAnswers?: FormAnswerUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ChallengerUpdateOneRequiredWithoutApplicationsNestedInput
    form?: FormUpdateOneRequiredWithoutApplicationsNestedInput
    matchingRound?: MatchingRoundUpdateOneRequiredWithoutApplicationsInRoundNestedInput
    formAnswers?: FormAnswerUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    applicantId?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    matchingRoundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formAnswers?: FormAnswerUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: string
    applicantId: string
    formId: string
    status?: $Enums.ApplicationStatusEnum
    matchingRoundId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    applicantId?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    matchingRoundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateInput = {
    handle: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    challengers?: ChallengerCreateNestedManyWithoutChallengerSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    handle: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    challengers?: ChallengerUncheckedCreateNestedManyWithoutChallengerSchoolInput
  }

  export type SchoolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengers?: ChallengerUpdateManyWithoutChallengerSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengers?: ChallengerUncheckedUpdateManyWithoutChallengerSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    handle: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type EnumUserPartEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPartEnum | EnumUserPartEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserPartEnum[] | ListEnumUserPartEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPartEnum[] | ListEnumUserPartEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPartEnumFilter<$PrismaModel> | $Enums.UserPartEnum
  }

  export type EnumUserRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleEnum | EnumUserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleEnumFilter<$PrismaModel> | $Enums.UserRoleEnum
  }

  export type EnumGenderEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderEnumNullableFilter<$PrismaModel> | $Enums.GenderEnum | null
    isSet?: boolean
  }

  export type EnumChallengerChapterEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengerChapterEnum | EnumChallengerChapterEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.ChallengerChapterEnum[] | ListEnumChallengerChapterEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ChallengerChapterEnum[] | ListEnumChallengerChapterEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumChallengerChapterEnumNullableFilter<$PrismaModel> | $Enums.ChallengerChapterEnum | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectMemberListRelationFilter = {
    every?: ProjectMemberWhereInput
    some?: ProjectMemberWhereInput
    none?: ProjectMemberWhereInput
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengerSchoolStudentIdCompoundUniqueInput = {
    school: string
    studentId: string
  }

  export type ChallengerCountOrderByAggregateInput = {
    id?: SortOrder
    umsbChallengerId?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    introduction?: SortOrder
    school?: SortOrder
    studentId?: SortOrder
    password?: SortOrder
    part?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    chapter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengerMaxOrderByAggregateInput = {
    id?: SortOrder
    umsbChallengerId?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    introduction?: SortOrder
    school?: SortOrder
    studentId?: SortOrder
    password?: SortOrder
    part?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    chapter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengerMinOrderByAggregateInput = {
    id?: SortOrder
    umsbChallengerId?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    introduction?: SortOrder
    school?: SortOrder
    studentId?: SortOrder
    password?: SortOrder
    part?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    chapter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumUserPartEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPartEnum | EnumUserPartEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserPartEnum[] | ListEnumUserPartEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPartEnum[] | ListEnumUserPartEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPartEnumWithAggregatesFilter<$PrismaModel> | $Enums.UserPartEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserPartEnumFilter<$PrismaModel>
    _max?: NestedEnumUserPartEnumFilter<$PrismaModel>
  }

  export type EnumUserRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleEnum | EnumUserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.UserRoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumUserRoleEnumFilter<$PrismaModel>
  }

  export type EnumGenderEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.GenderEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderEnumNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumChallengerChapterEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengerChapterEnum | EnumChallengerChapterEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.ChallengerChapterEnum[] | ListEnumChallengerChapterEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ChallengerChapterEnum[] | ListEnumChallengerChapterEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumChallengerChapterEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.ChallengerChapterEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumChallengerChapterEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumChallengerChapterEnumNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MatchingRoundCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchingRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchingRoundMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectToCompositeListFilter = {
    equals?: ProjectToObjectEqualityInput[]
    every?: ProjectToWhereInput
    some?: ProjectToWhereInput
    none?: ProjectToWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ProjectToObjectEqualityInput = {
    part: $Enums.UserPartEnum
    to: number
  }

  export type FormListRelationFilter = {
    every?: FormWhereInput
    some?: FormWhereInput
    none?: FormWhereInput
  }

  export type ChallengerScalarRelationFilter = {
    is?: ChallengerWhereInput
    isNot?: ChallengerWhereInput
  }

  export type ProjectToOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type FormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    bannerImage?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    bannerImage?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    bannerImage?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type FormQuestionListRelationFilter = {
    every?: FormQuestionWhereInput
    some?: FormQuestionWhereInput
    none?: FormQuestionWhereInput
  }

  export type FormQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availableMatchingRounds?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumQuestionTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionTypeEnum | EnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionTypeEnum[] | ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionTypeEnum[] | ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeEnumFilter<$PrismaModel> | $Enums.QuestionTypeEnum
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FormScalarRelationFilter = {
    is?: FormWhereInput
    isNot?: FormWhereInput
  }

  export type FormAnswerListRelationFilter = {
    every?: FormAnswerWhereInput
    some?: FormAnswerWhereInput
    none?: FormAnswerWhereInput
  }

  export type FormAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    questionNo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    options?: SortOrder
    isRequired?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormQuestionAvgOrderByAggregateInput = {
    questionNo?: SortOrder
  }

  export type FormQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    questionNo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isRequired?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    questionNo?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isRequired?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormQuestionSumOrderByAggregateInput = {
    questionNo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumQuestionTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionTypeEnum | EnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionTypeEnum[] | ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionTypeEnum[] | ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.QuestionTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeEnumFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectMemberProjectIdUserIdCompoundUniqueInput = {
    projectId: string
    userId: string
  }

  export type ProjectMemberCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMemberMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationScalarRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type FormQuestionScalarRelationFilter = {
    is?: FormQuestionWhereInput
    isNot?: FormQuestionWhereInput
  }

  export type FormAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    questionId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumApplicationStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatusEnum | EnumApplicationStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatusEnum[] | ListEnumApplicationStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatusEnum[] | ListEnumApplicationStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusEnumFilter<$PrismaModel> | $Enums.ApplicationStatusEnum
  }

  export type MatchingRoundScalarRelationFilter = {
    is?: MatchingRoundWhereInput
    isNot?: MatchingRoundWhereInput
  }

  export type ApplicationApplicantIdMatchingRoundIdCompoundUniqueInput = {
    applicantId: string
    matchingRoundId: string
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    formId?: SortOrder
    status?: SortOrder
    matchingRoundId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    formId?: SortOrder
    status?: SortOrder
    matchingRoundId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    formId?: SortOrder
    status?: SortOrder
    matchingRoundId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumApplicationStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatusEnum | EnumApplicationStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatusEnum[] | ListEnumApplicationStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatusEnum[] | ListEnumApplicationStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusEnumFilter<$PrismaModel>
  }

  export type ChallengerListRelationFilter = {
    every?: ChallengerWhereInput
    some?: ChallengerWhereInput
    none?: ChallengerWhereInput
  }

  export type ChallengerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolHandleNameCompoundUniqueInput = {
    handle: string
    name: string
  }

  export type SchoolCountOrderByAggregateInput = {
    handle?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    handle?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    handle?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutProjectPlanInput = {
    create?: XOR<ProjectCreateWithoutProjectPlanInput, ProjectUncheckedCreateWithoutProjectPlanInput> | ProjectCreateWithoutProjectPlanInput[] | ProjectUncheckedCreateWithoutProjectPlanInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectPlanInput | ProjectCreateOrConnectWithoutProjectPlanInput[]
    createMany?: ProjectCreateManyProjectPlanInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type SchoolCreateNestedOneWithoutChallengersInput = {
    create?: XOR<SchoolCreateWithoutChallengersInput, SchoolUncheckedCreateWithoutChallengersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutChallengersInput
    connect?: SchoolWhereUniqueInput
  }

  export type ApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutProjectPlanInput = {
    create?: XOR<ProjectCreateWithoutProjectPlanInput, ProjectUncheckedCreateWithoutProjectPlanInput> | ProjectCreateWithoutProjectPlanInput[] | ProjectUncheckedCreateWithoutProjectPlanInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectPlanInput | ProjectCreateOrConnectWithoutProjectPlanInput[]
    createMany?: ProjectCreateManyProjectPlanInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserPartEnumFieldUpdateOperationsInput = {
    set?: $Enums.UserPartEnum
  }

  export type EnumUserRoleEnumFieldUpdateOperationsInput = {
    set?: $Enums.UserRoleEnum
  }

  export type NullableEnumGenderEnumFieldUpdateOperationsInput = {
    set?: $Enums.GenderEnum | null
    unset?: boolean
  }

  export type NullableEnumChallengerChapterEnumFieldUpdateOperationsInput = {
    set?: $Enums.ChallengerChapterEnum | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutProjectPlanNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectPlanInput, ProjectUncheckedCreateWithoutProjectPlanInput> | ProjectCreateWithoutProjectPlanInput[] | ProjectUncheckedCreateWithoutProjectPlanInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectPlanInput | ProjectCreateOrConnectWithoutProjectPlanInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProjectPlanInput | ProjectUpsertWithWhereUniqueWithoutProjectPlanInput[]
    createMany?: ProjectCreateManyProjectPlanInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProjectPlanInput | ProjectUpdateWithWhereUniqueWithoutProjectPlanInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProjectPlanInput | ProjectUpdateManyWithWhereWithoutProjectPlanInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type SchoolUpdateOneRequiredWithoutChallengersNestedInput = {
    create?: XOR<SchoolCreateWithoutChallengersInput, SchoolUncheckedCreateWithoutChallengersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutChallengersInput
    upsert?: SchoolUpsertWithoutChallengersInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutChallengersInput, SchoolUpdateWithoutChallengersInput>, SchoolUncheckedUpdateWithoutChallengersInput>
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutProjectPlanNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectPlanInput, ProjectUncheckedCreateWithoutProjectPlanInput> | ProjectCreateWithoutProjectPlanInput[] | ProjectUncheckedCreateWithoutProjectPlanInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectPlanInput | ProjectCreateOrConnectWithoutProjectPlanInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProjectPlanInput | ProjectUpsertWithWhereUniqueWithoutProjectPlanInput[]
    createMany?: ProjectCreateManyProjectPlanInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProjectPlanInput | ProjectUpdateWithWhereUniqueWithoutProjectPlanInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProjectPlanInput | ProjectUpdateManyWithWhereWithoutProjectPlanInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type ApplicationCreateNestedManyWithoutMatchingRoundInput = {
    create?: XOR<ApplicationCreateWithoutMatchingRoundInput, ApplicationUncheckedCreateWithoutMatchingRoundInput> | ApplicationCreateWithoutMatchingRoundInput[] | ApplicationUncheckedCreateWithoutMatchingRoundInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutMatchingRoundInput | ApplicationCreateOrConnectWithoutMatchingRoundInput[]
    createMany?: ApplicationCreateManyMatchingRoundInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutMatchingRoundInput = {
    create?: XOR<ApplicationCreateWithoutMatchingRoundInput, ApplicationUncheckedCreateWithoutMatchingRoundInput> | ApplicationCreateWithoutMatchingRoundInput[] | ApplicationUncheckedCreateWithoutMatchingRoundInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutMatchingRoundInput | ApplicationCreateOrConnectWithoutMatchingRoundInput[]
    createMany?: ApplicationCreateManyMatchingRoundInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationUpdateManyWithoutMatchingRoundNestedInput = {
    create?: XOR<ApplicationCreateWithoutMatchingRoundInput, ApplicationUncheckedCreateWithoutMatchingRoundInput> | ApplicationCreateWithoutMatchingRoundInput[] | ApplicationUncheckedCreateWithoutMatchingRoundInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutMatchingRoundInput | ApplicationCreateOrConnectWithoutMatchingRoundInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutMatchingRoundInput | ApplicationUpsertWithWhereUniqueWithoutMatchingRoundInput[]
    createMany?: ApplicationCreateManyMatchingRoundInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutMatchingRoundInput | ApplicationUpdateWithWhereUniqueWithoutMatchingRoundInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutMatchingRoundInput | ApplicationUpdateManyWithWhereWithoutMatchingRoundInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutMatchingRoundNestedInput = {
    create?: XOR<ApplicationCreateWithoutMatchingRoundInput, ApplicationUncheckedCreateWithoutMatchingRoundInput> | ApplicationCreateWithoutMatchingRoundInput[] | ApplicationUncheckedCreateWithoutMatchingRoundInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutMatchingRoundInput | ApplicationCreateOrConnectWithoutMatchingRoundInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutMatchingRoundInput | ApplicationUpsertWithWhereUniqueWithoutMatchingRoundInput[]
    createMany?: ApplicationCreateManyMatchingRoundInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutMatchingRoundInput | ApplicationUpdateWithWhereUniqueWithoutMatchingRoundInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutMatchingRoundInput | ApplicationUpdateManyWithWhereWithoutMatchingRoundInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ProjectToListCreateEnvelopeInput = {
    set?: ProjectToCreateInput | ProjectToCreateInput[]
  }

  export type ProjectToCreateInput = {
    part: $Enums.UserPartEnum
    to: number
  }

  export type ProjectMemberCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type FormCreateNestedManyWithoutProjectInput = {
    create?: XOR<FormCreateWithoutProjectInput, FormUncheckedCreateWithoutProjectInput> | FormCreateWithoutProjectInput[] | FormUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FormCreateOrConnectWithoutProjectInput | FormCreateOrConnectWithoutProjectInput[]
    createMany?: FormCreateManyProjectInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type ChallengerCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ChallengerCreateWithoutProjectsInput, ChallengerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutProjectsInput
    connect?: ChallengerWhereUniqueInput
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type FormUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<FormCreateWithoutProjectInput, FormUncheckedCreateWithoutProjectInput> | FormCreateWithoutProjectInput[] | FormUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FormCreateOrConnectWithoutProjectInput | FormCreateOrConnectWithoutProjectInput[]
    createMany?: FormCreateManyProjectInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type ProjectToListUpdateEnvelopeInput = {
    set?: ProjectToCreateInput | ProjectToCreateInput[]
    push?: ProjectToCreateInput | ProjectToCreateInput[]
    updateMany?: ProjectToUpdateManyInput
    deleteMany?: ProjectToDeleteManyInput
  }

  export type ProjectMemberUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type FormUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FormCreateWithoutProjectInput, FormUncheckedCreateWithoutProjectInput> | FormCreateWithoutProjectInput[] | FormUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FormCreateOrConnectWithoutProjectInput | FormCreateOrConnectWithoutProjectInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutProjectInput | FormUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FormCreateManyProjectInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutProjectInput | FormUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FormUpdateManyWithWhereWithoutProjectInput | FormUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type ChallengerUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ChallengerCreateWithoutProjectsInput, ChallengerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutProjectsInput
    upsert?: ChallengerUpsertWithoutProjectsInput
    connect?: ChallengerWhereUniqueInput
    update?: XOR<XOR<ChallengerUpdateToOneWithWhereWithoutProjectsInput, ChallengerUpdateWithoutProjectsInput>, ChallengerUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type FormUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FormCreateWithoutProjectInput, FormUncheckedCreateWithoutProjectInput> | FormCreateWithoutProjectInput[] | FormUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FormCreateOrConnectWithoutProjectInput | FormCreateOrConnectWithoutProjectInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutProjectInput | FormUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FormCreateManyProjectInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutProjectInput | FormUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FormUpdateManyWithWhereWithoutProjectInput | FormUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type FormCreateavailableMatchingRoundsInput = {
    set: string[]
  }

  export type ProjectCreateNestedOneWithoutProjectFormsInput = {
    create?: XOR<ProjectCreateWithoutProjectFormsInput, ProjectUncheckedCreateWithoutProjectFormsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectFormsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutFormInput = {
    create?: XOR<ApplicationCreateWithoutFormInput, ApplicationUncheckedCreateWithoutFormInput> | ApplicationCreateWithoutFormInput[] | ApplicationUncheckedCreateWithoutFormInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutFormInput | ApplicationCreateOrConnectWithoutFormInput[]
    createMany?: ApplicationCreateManyFormInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type FormQuestionCreateNestedManyWithoutFormInput = {
    create?: XOR<FormQuestionCreateWithoutFormInput, FormQuestionUncheckedCreateWithoutFormInput> | FormQuestionCreateWithoutFormInput[] | FormQuestionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormQuestionCreateOrConnectWithoutFormInput | FormQuestionCreateOrConnectWithoutFormInput[]
    createMany?: FormQuestionCreateManyFormInputEnvelope
    connect?: FormQuestionWhereUniqueInput | FormQuestionWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<ApplicationCreateWithoutFormInput, ApplicationUncheckedCreateWithoutFormInput> | ApplicationCreateWithoutFormInput[] | ApplicationUncheckedCreateWithoutFormInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutFormInput | ApplicationCreateOrConnectWithoutFormInput[]
    createMany?: ApplicationCreateManyFormInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type FormQuestionUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<FormQuestionCreateWithoutFormInput, FormQuestionUncheckedCreateWithoutFormInput> | FormQuestionCreateWithoutFormInput[] | FormQuestionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormQuestionCreateOrConnectWithoutFormInput | FormQuestionCreateOrConnectWithoutFormInput[]
    createMany?: FormQuestionCreateManyFormInputEnvelope
    connect?: FormQuestionWhereUniqueInput | FormQuestionWhereUniqueInput[]
  }

  export type FormUpdateavailableMatchingRoundsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectUpdateOneRequiredWithoutProjectFormsNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectFormsInput, ProjectUncheckedCreateWithoutProjectFormsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectFormsInput
    upsert?: ProjectUpsertWithoutProjectFormsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectFormsInput, ProjectUpdateWithoutProjectFormsInput>, ProjectUncheckedUpdateWithoutProjectFormsInput>
  }

  export type ApplicationUpdateManyWithoutFormNestedInput = {
    create?: XOR<ApplicationCreateWithoutFormInput, ApplicationUncheckedCreateWithoutFormInput> | ApplicationCreateWithoutFormInput[] | ApplicationUncheckedCreateWithoutFormInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutFormInput | ApplicationCreateOrConnectWithoutFormInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutFormInput | ApplicationUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: ApplicationCreateManyFormInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutFormInput | ApplicationUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutFormInput | ApplicationUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type FormQuestionUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormQuestionCreateWithoutFormInput, FormQuestionUncheckedCreateWithoutFormInput> | FormQuestionCreateWithoutFormInput[] | FormQuestionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormQuestionCreateOrConnectWithoutFormInput | FormQuestionCreateOrConnectWithoutFormInput[]
    upsert?: FormQuestionUpsertWithWhereUniqueWithoutFormInput | FormQuestionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormQuestionCreateManyFormInputEnvelope
    set?: FormQuestionWhereUniqueInput | FormQuestionWhereUniqueInput[]
    disconnect?: FormQuestionWhereUniqueInput | FormQuestionWhereUniqueInput[]
    delete?: FormQuestionWhereUniqueInput | FormQuestionWhereUniqueInput[]
    connect?: FormQuestionWhereUniqueInput | FormQuestionWhereUniqueInput[]
    update?: FormQuestionUpdateWithWhereUniqueWithoutFormInput | FormQuestionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormQuestionUpdateManyWithWhereWithoutFormInput | FormQuestionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormQuestionScalarWhereInput | FormQuestionScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<ApplicationCreateWithoutFormInput, ApplicationUncheckedCreateWithoutFormInput> | ApplicationCreateWithoutFormInput[] | ApplicationUncheckedCreateWithoutFormInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutFormInput | ApplicationCreateOrConnectWithoutFormInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutFormInput | ApplicationUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: ApplicationCreateManyFormInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutFormInput | ApplicationUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutFormInput | ApplicationUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type FormQuestionUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormQuestionCreateWithoutFormInput, FormQuestionUncheckedCreateWithoutFormInput> | FormQuestionCreateWithoutFormInput[] | FormQuestionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormQuestionCreateOrConnectWithoutFormInput | FormQuestionCreateOrConnectWithoutFormInput[]
    upsert?: FormQuestionUpsertWithWhereUniqueWithoutFormInput | FormQuestionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormQuestionCreateManyFormInputEnvelope
    set?: FormQuestionWhereUniqueInput | FormQuestionWhereUniqueInput[]
    disconnect?: FormQuestionWhereUniqueInput | FormQuestionWhereUniqueInput[]
    delete?: FormQuestionWhereUniqueInput | FormQuestionWhereUniqueInput[]
    connect?: FormQuestionWhereUniqueInput | FormQuestionWhereUniqueInput[]
    update?: FormQuestionUpdateWithWhereUniqueWithoutFormInput | FormQuestionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormQuestionUpdateManyWithWhereWithoutFormInput | FormQuestionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormQuestionScalarWhereInput | FormQuestionScalarWhereInput[]
  }

  export type FormQuestionCreateoptionsInput = {
    set: string[]
  }

  export type FormCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<FormCreateWithoutQuestionsInput, FormUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutQuestionsInput
    connect?: FormWhereUniqueInput
  }

  export type FormAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<FormAnswerCreateWithoutQuestionInput, FormAnswerUncheckedCreateWithoutQuestionInput> | FormAnswerCreateWithoutQuestionInput[] | FormAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutQuestionInput | FormAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: FormAnswerCreateManyQuestionInputEnvelope
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
  }

  export type FormAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<FormAnswerCreateWithoutQuestionInput, FormAnswerUncheckedCreateWithoutQuestionInput> | FormAnswerCreateWithoutQuestionInput[] | FormAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutQuestionInput | FormAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: FormAnswerCreateManyQuestionInputEnvelope
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumQuestionTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.QuestionTypeEnum
  }

  export type FormQuestionUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FormUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<FormCreateWithoutQuestionsInput, FormUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutQuestionsInput
    upsert?: FormUpsertWithoutQuestionsInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutQuestionsInput, FormUpdateWithoutQuestionsInput>, FormUncheckedUpdateWithoutQuestionsInput>
  }

  export type FormAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<FormAnswerCreateWithoutQuestionInput, FormAnswerUncheckedCreateWithoutQuestionInput> | FormAnswerCreateWithoutQuestionInput[] | FormAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutQuestionInput | FormAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: FormAnswerUpsertWithWhereUniqueWithoutQuestionInput | FormAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: FormAnswerCreateManyQuestionInputEnvelope
    set?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    disconnect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    delete?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    update?: FormAnswerUpdateWithWhereUniqueWithoutQuestionInput | FormAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: FormAnswerUpdateManyWithWhereWithoutQuestionInput | FormAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: FormAnswerScalarWhereInput | FormAnswerScalarWhereInput[]
  }

  export type FormAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<FormAnswerCreateWithoutQuestionInput, FormAnswerUncheckedCreateWithoutQuestionInput> | FormAnswerCreateWithoutQuestionInput[] | FormAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutQuestionInput | FormAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: FormAnswerUpsertWithWhereUniqueWithoutQuestionInput | FormAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: FormAnswerCreateManyQuestionInputEnvelope
    set?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    disconnect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    delete?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    update?: FormAnswerUpdateWithWhereUniqueWithoutQuestionInput | FormAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: FormAnswerUpdateManyWithWhereWithoutQuestionInput | FormAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: FormAnswerScalarWhereInput | FormAnswerScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProjectMemberInput = {
    create?: XOR<ProjectCreateWithoutProjectMemberInput, ProjectUncheckedCreateWithoutProjectMemberInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectMemberInput
    connect?: ProjectWhereUniqueInput
  }

  export type ChallengerCreateNestedOneWithoutProjectMemberInput = {
    create?: XOR<ChallengerCreateWithoutProjectMemberInput, ChallengerUncheckedCreateWithoutProjectMemberInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutProjectMemberInput
    connect?: ChallengerWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutProjectMemberNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectMemberInput, ProjectUncheckedCreateWithoutProjectMemberInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectMemberInput
    upsert?: ProjectUpsertWithoutProjectMemberInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectMemberInput, ProjectUpdateWithoutProjectMemberInput>, ProjectUncheckedUpdateWithoutProjectMemberInput>
  }

  export type ChallengerUpdateOneRequiredWithoutProjectMemberNestedInput = {
    create?: XOR<ChallengerCreateWithoutProjectMemberInput, ChallengerUncheckedCreateWithoutProjectMemberInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutProjectMemberInput
    upsert?: ChallengerUpsertWithoutProjectMemberInput
    connect?: ChallengerWhereUniqueInput
    update?: XOR<XOR<ChallengerUpdateToOneWithWhereWithoutProjectMemberInput, ChallengerUpdateWithoutProjectMemberInput>, ChallengerUncheckedUpdateWithoutProjectMemberInput>
  }

  export type FormAnswerCreatevalueInput = {
    set: string[]
  }

  export type ApplicationCreateNestedOneWithoutFormAnswersInput = {
    create?: XOR<ApplicationCreateWithoutFormAnswersInput, ApplicationUncheckedCreateWithoutFormAnswersInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutFormAnswersInput
    connect?: ApplicationWhereUniqueInput
  }

  export type FormQuestionCreateNestedOneWithoutFormAnswersInput = {
    create?: XOR<FormQuestionCreateWithoutFormAnswersInput, FormQuestionUncheckedCreateWithoutFormAnswersInput>
    connectOrCreate?: FormQuestionCreateOrConnectWithoutFormAnswersInput
    connect?: FormQuestionWhereUniqueInput
  }

  export type FormAnswerUpdatevalueInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ApplicationUpdateOneRequiredWithoutFormAnswersNestedInput = {
    create?: XOR<ApplicationCreateWithoutFormAnswersInput, ApplicationUncheckedCreateWithoutFormAnswersInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutFormAnswersInput
    upsert?: ApplicationUpsertWithoutFormAnswersInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutFormAnswersInput, ApplicationUpdateWithoutFormAnswersInput>, ApplicationUncheckedUpdateWithoutFormAnswersInput>
  }

  export type FormQuestionUpdateOneRequiredWithoutFormAnswersNestedInput = {
    create?: XOR<FormQuestionCreateWithoutFormAnswersInput, FormQuestionUncheckedCreateWithoutFormAnswersInput>
    connectOrCreate?: FormQuestionCreateOrConnectWithoutFormAnswersInput
    upsert?: FormQuestionUpsertWithoutFormAnswersInput
    connect?: FormQuestionWhereUniqueInput
    update?: XOR<XOR<FormQuestionUpdateToOneWithWhereWithoutFormAnswersInput, FormQuestionUpdateWithoutFormAnswersInput>, FormQuestionUncheckedUpdateWithoutFormAnswersInput>
  }

  export type ChallengerCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ChallengerCreateWithoutApplicationsInput, ChallengerUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutApplicationsInput
    connect?: ChallengerWhereUniqueInput
  }

  export type FormCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<FormCreateWithoutApplicationsInput, FormUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: FormCreateOrConnectWithoutApplicationsInput
    connect?: FormWhereUniqueInput
  }

  export type MatchingRoundCreateNestedOneWithoutApplicationsInRoundInput = {
    create?: XOR<MatchingRoundCreateWithoutApplicationsInRoundInput, MatchingRoundUncheckedCreateWithoutApplicationsInRoundInput>
    connectOrCreate?: MatchingRoundCreateOrConnectWithoutApplicationsInRoundInput
    connect?: MatchingRoundWhereUniqueInput
  }

  export type FormAnswerCreateNestedManyWithoutApplicationInput = {
    create?: XOR<FormAnswerCreateWithoutApplicationInput, FormAnswerUncheckedCreateWithoutApplicationInput> | FormAnswerCreateWithoutApplicationInput[] | FormAnswerUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutApplicationInput | FormAnswerCreateOrConnectWithoutApplicationInput[]
    createMany?: FormAnswerCreateManyApplicationInputEnvelope
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
  }

  export type FormAnswerUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<FormAnswerCreateWithoutApplicationInput, FormAnswerUncheckedCreateWithoutApplicationInput> | FormAnswerCreateWithoutApplicationInput[] | FormAnswerUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutApplicationInput | FormAnswerCreateOrConnectWithoutApplicationInput[]
    createMany?: FormAnswerCreateManyApplicationInputEnvelope
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
  }

  export type EnumApplicationStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatusEnum
  }

  export type ChallengerUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ChallengerCreateWithoutApplicationsInput, ChallengerUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutApplicationsInput
    upsert?: ChallengerUpsertWithoutApplicationsInput
    connect?: ChallengerWhereUniqueInput
    update?: XOR<XOR<ChallengerUpdateToOneWithWhereWithoutApplicationsInput, ChallengerUpdateWithoutApplicationsInput>, ChallengerUncheckedUpdateWithoutApplicationsInput>
  }

  export type FormUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<FormCreateWithoutApplicationsInput, FormUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: FormCreateOrConnectWithoutApplicationsInput
    upsert?: FormUpsertWithoutApplicationsInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutApplicationsInput, FormUpdateWithoutApplicationsInput>, FormUncheckedUpdateWithoutApplicationsInput>
  }

  export type MatchingRoundUpdateOneRequiredWithoutApplicationsInRoundNestedInput = {
    create?: XOR<MatchingRoundCreateWithoutApplicationsInRoundInput, MatchingRoundUncheckedCreateWithoutApplicationsInRoundInput>
    connectOrCreate?: MatchingRoundCreateOrConnectWithoutApplicationsInRoundInput
    upsert?: MatchingRoundUpsertWithoutApplicationsInRoundInput
    connect?: MatchingRoundWhereUniqueInput
    update?: XOR<XOR<MatchingRoundUpdateToOneWithWhereWithoutApplicationsInRoundInput, MatchingRoundUpdateWithoutApplicationsInRoundInput>, MatchingRoundUncheckedUpdateWithoutApplicationsInRoundInput>
  }

  export type FormAnswerUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<FormAnswerCreateWithoutApplicationInput, FormAnswerUncheckedCreateWithoutApplicationInput> | FormAnswerCreateWithoutApplicationInput[] | FormAnswerUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutApplicationInput | FormAnswerCreateOrConnectWithoutApplicationInput[]
    upsert?: FormAnswerUpsertWithWhereUniqueWithoutApplicationInput | FormAnswerUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: FormAnswerCreateManyApplicationInputEnvelope
    set?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    disconnect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    delete?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    update?: FormAnswerUpdateWithWhereUniqueWithoutApplicationInput | FormAnswerUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: FormAnswerUpdateManyWithWhereWithoutApplicationInput | FormAnswerUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: FormAnswerScalarWhereInput | FormAnswerScalarWhereInput[]
  }

  export type FormAnswerUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<FormAnswerCreateWithoutApplicationInput, FormAnswerUncheckedCreateWithoutApplicationInput> | FormAnswerCreateWithoutApplicationInput[] | FormAnswerUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: FormAnswerCreateOrConnectWithoutApplicationInput | FormAnswerCreateOrConnectWithoutApplicationInput[]
    upsert?: FormAnswerUpsertWithWhereUniqueWithoutApplicationInput | FormAnswerUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: FormAnswerCreateManyApplicationInputEnvelope
    set?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    disconnect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    delete?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    connect?: FormAnswerWhereUniqueInput | FormAnswerWhereUniqueInput[]
    update?: FormAnswerUpdateWithWhereUniqueWithoutApplicationInput | FormAnswerUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: FormAnswerUpdateManyWithWhereWithoutApplicationInput | FormAnswerUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: FormAnswerScalarWhereInput | FormAnswerScalarWhereInput[]
  }

  export type ChallengerCreateNestedManyWithoutChallengerSchoolInput = {
    create?: XOR<ChallengerCreateWithoutChallengerSchoolInput, ChallengerUncheckedCreateWithoutChallengerSchoolInput> | ChallengerCreateWithoutChallengerSchoolInput[] | ChallengerUncheckedCreateWithoutChallengerSchoolInput[]
    connectOrCreate?: ChallengerCreateOrConnectWithoutChallengerSchoolInput | ChallengerCreateOrConnectWithoutChallengerSchoolInput[]
    createMany?: ChallengerCreateManyChallengerSchoolInputEnvelope
    connect?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
  }

  export type ChallengerUncheckedCreateNestedManyWithoutChallengerSchoolInput = {
    create?: XOR<ChallengerCreateWithoutChallengerSchoolInput, ChallengerUncheckedCreateWithoutChallengerSchoolInput> | ChallengerCreateWithoutChallengerSchoolInput[] | ChallengerUncheckedCreateWithoutChallengerSchoolInput[]
    connectOrCreate?: ChallengerCreateOrConnectWithoutChallengerSchoolInput | ChallengerCreateOrConnectWithoutChallengerSchoolInput[]
    createMany?: ChallengerCreateManyChallengerSchoolInputEnvelope
    connect?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
  }

  export type ChallengerUpdateManyWithoutChallengerSchoolNestedInput = {
    create?: XOR<ChallengerCreateWithoutChallengerSchoolInput, ChallengerUncheckedCreateWithoutChallengerSchoolInput> | ChallengerCreateWithoutChallengerSchoolInput[] | ChallengerUncheckedCreateWithoutChallengerSchoolInput[]
    connectOrCreate?: ChallengerCreateOrConnectWithoutChallengerSchoolInput | ChallengerCreateOrConnectWithoutChallengerSchoolInput[]
    upsert?: ChallengerUpsertWithWhereUniqueWithoutChallengerSchoolInput | ChallengerUpsertWithWhereUniqueWithoutChallengerSchoolInput[]
    createMany?: ChallengerCreateManyChallengerSchoolInputEnvelope
    set?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    disconnect?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    delete?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    connect?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    update?: ChallengerUpdateWithWhereUniqueWithoutChallengerSchoolInput | ChallengerUpdateWithWhereUniqueWithoutChallengerSchoolInput[]
    updateMany?: ChallengerUpdateManyWithWhereWithoutChallengerSchoolInput | ChallengerUpdateManyWithWhereWithoutChallengerSchoolInput[]
    deleteMany?: ChallengerScalarWhereInput | ChallengerScalarWhereInput[]
  }

  export type ChallengerUncheckedUpdateManyWithoutChallengerSchoolNestedInput = {
    create?: XOR<ChallengerCreateWithoutChallengerSchoolInput, ChallengerUncheckedCreateWithoutChallengerSchoolInput> | ChallengerCreateWithoutChallengerSchoolInput[] | ChallengerUncheckedCreateWithoutChallengerSchoolInput[]
    connectOrCreate?: ChallengerCreateOrConnectWithoutChallengerSchoolInput | ChallengerCreateOrConnectWithoutChallengerSchoolInput[]
    upsert?: ChallengerUpsertWithWhereUniqueWithoutChallengerSchoolInput | ChallengerUpsertWithWhereUniqueWithoutChallengerSchoolInput[]
    createMany?: ChallengerCreateManyChallengerSchoolInputEnvelope
    set?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    disconnect?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    delete?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    connect?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    update?: ChallengerUpdateWithWhereUniqueWithoutChallengerSchoolInput | ChallengerUpdateWithWhereUniqueWithoutChallengerSchoolInput[]
    updateMany?: ChallengerUpdateManyWithWhereWithoutChallengerSchoolInput | ChallengerUpdateManyWithWhereWithoutChallengerSchoolInput[]
    deleteMany?: ChallengerScalarWhereInput | ChallengerScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumUserPartEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPartEnum | EnumUserPartEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserPartEnum[] | ListEnumUserPartEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPartEnum[] | ListEnumUserPartEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPartEnumFilter<$PrismaModel> | $Enums.UserPartEnum
  }

  export type NestedEnumUserRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleEnum | EnumUserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleEnumFilter<$PrismaModel> | $Enums.UserRoleEnum
  }

  export type NestedEnumGenderEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderEnumNullableFilter<$PrismaModel> | $Enums.GenderEnum | null
    isSet?: boolean
  }

  export type NestedEnumChallengerChapterEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengerChapterEnum | EnumChallengerChapterEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.ChallengerChapterEnum[] | ListEnumChallengerChapterEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ChallengerChapterEnum[] | ListEnumChallengerChapterEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumChallengerChapterEnumNullableFilter<$PrismaModel> | $Enums.ChallengerChapterEnum | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumUserPartEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPartEnum | EnumUserPartEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserPartEnum[] | ListEnumUserPartEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPartEnum[] | ListEnumUserPartEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPartEnumWithAggregatesFilter<$PrismaModel> | $Enums.UserPartEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserPartEnumFilter<$PrismaModel>
    _max?: NestedEnumUserPartEnumFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleEnum | EnumUserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.UserRoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumUserRoleEnumFilter<$PrismaModel>
  }

  export type NestedEnumGenderEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.GenderEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderEnumNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumChallengerChapterEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengerChapterEnum | EnumChallengerChapterEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.ChallengerChapterEnum[] | ListEnumChallengerChapterEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ChallengerChapterEnum[] | ListEnumChallengerChapterEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumChallengerChapterEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.ChallengerChapterEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumChallengerChapterEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumChallengerChapterEnumNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectToWhereInput = {
    AND?: ProjectToWhereInput | ProjectToWhereInput[]
    OR?: ProjectToWhereInput[]
    NOT?: ProjectToWhereInput | ProjectToWhereInput[]
    part?: EnumUserPartEnumFilter<"ProjectTo"> | $Enums.UserPartEnum
    to?: IntFilter<"ProjectTo"> | number
  }

  export type NestedEnumQuestionTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionTypeEnum | EnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionTypeEnum[] | ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionTypeEnum[] | ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeEnumFilter<$PrismaModel> | $Enums.QuestionTypeEnum
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumQuestionTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionTypeEnum | EnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionTypeEnum[] | ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionTypeEnum[] | ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.QuestionTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeEnumFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatusEnum | EnumApplicationStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatusEnum[] | ListEnumApplicationStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatusEnum[] | ListEnumApplicationStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusEnumFilter<$PrismaModel> | $Enums.ApplicationStatusEnum
  }

  export type NestedEnumApplicationStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatusEnum | EnumApplicationStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatusEnum[] | ListEnumApplicationStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatusEnum[] | ListEnumApplicationStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusEnumFilter<$PrismaModel>
  }

  export type ApplicationCreateWithoutApplicantInput = {
    id?: string
    status?: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    form: FormCreateNestedOneWithoutApplicationsInput
    matchingRound: MatchingRoundCreateNestedOneWithoutApplicationsInRoundInput
    formAnswers?: FormAnswerCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: string
    formId: string
    status?: $Enums.ApplicationStatusEnum
    matchingRoundId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    formAnswers?: FormAnswerUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationCreateManyApplicantInputEnvelope = {
    data: ApplicationCreateManyApplicantInput | ApplicationCreateManyApplicantInput[]
  }

  export type ProjectCreateWithoutProjectPlanInput = {
    id?: string
    title: string
    description: string
    link: string
    bannerImage?: string | null
    partTo?: XOR<ProjectToListCreateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMember?: ProjectMemberCreateNestedManyWithoutProjectInput
    projectForms?: FormCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectPlanInput = {
    id?: string
    title: string
    description: string
    link: string
    bannerImage?: string | null
    partTo?: XOR<ProjectToListCreateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMember?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    projectForms?: FormUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectPlanInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectPlanInput, ProjectUncheckedCreateWithoutProjectPlanInput>
  }

  export type ProjectCreateManyProjectPlanInputEnvelope = {
    data: ProjectCreateManyProjectPlanInput | ProjectCreateManyProjectPlanInput[]
  }

  export type ProjectMemberCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectMemberInput
  }

  export type ProjectMemberUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberCreateOrConnectWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }

  export type ProjectMemberCreateManyUserInputEnvelope = {
    data: ProjectMemberCreateManyUserInput | ProjectMemberCreateManyUserInput[]
  }

  export type SchoolCreateWithoutChallengersInput = {
    handle: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUncheckedCreateWithoutChallengersInput = {
    handle: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolCreateOrConnectWithoutChallengersInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutChallengersInput, SchoolUncheckedCreateWithoutChallengersInput>
  }

  export type ApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    formId?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusEnumFilter<"Application"> | $Enums.ApplicationStatusEnum
    matchingRoundId?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutProjectPlanInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutProjectPlanInput, ProjectUncheckedUpdateWithoutProjectPlanInput>
    create: XOR<ProjectCreateWithoutProjectPlanInput, ProjectUncheckedCreateWithoutProjectPlanInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutProjectPlanInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutProjectPlanInput, ProjectUncheckedUpdateWithoutProjectPlanInput>
  }

  export type ProjectUpdateManyWithWhereWithoutProjectPlanInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectPlanInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    link?: StringFilter<"Project"> | string
    bannerImage?: StringNullableFilter<"Project"> | string | null
    planId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutUserInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectMemberScalarWhereInput = {
    AND?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    OR?: ProjectMemberScalarWhereInput[]
    NOT?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    id?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    userId?: StringFilter<"ProjectMember"> | string
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectMember"> | Date | string
  }

  export type SchoolUpsertWithoutChallengersInput = {
    update: XOR<SchoolUpdateWithoutChallengersInput, SchoolUncheckedUpdateWithoutChallengersInput>
    create: XOR<SchoolCreateWithoutChallengersInput, SchoolUncheckedCreateWithoutChallengersInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutChallengersInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutChallengersInput, SchoolUncheckedUpdateWithoutChallengersInput>
  }

  export type SchoolUpdateWithoutChallengersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateWithoutChallengersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateWithoutMatchingRoundInput = {
    id?: string
    status?: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ChallengerCreateNestedOneWithoutApplicationsInput
    form: FormCreateNestedOneWithoutApplicationsInput
    formAnswers?: FormAnswerCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutMatchingRoundInput = {
    id?: string
    applicantId: string
    formId: string
    status?: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    formAnswers?: FormAnswerUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutMatchingRoundInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutMatchingRoundInput, ApplicationUncheckedCreateWithoutMatchingRoundInput>
  }

  export type ApplicationCreateManyMatchingRoundInputEnvelope = {
    data: ApplicationCreateManyMatchingRoundInput | ApplicationCreateManyMatchingRoundInput[]
  }

  export type ApplicationUpsertWithWhereUniqueWithoutMatchingRoundInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutMatchingRoundInput, ApplicationUncheckedUpdateWithoutMatchingRoundInput>
    create: XOR<ApplicationCreateWithoutMatchingRoundInput, ApplicationUncheckedCreateWithoutMatchingRoundInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutMatchingRoundInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutMatchingRoundInput, ApplicationUncheckedUpdateWithoutMatchingRoundInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutMatchingRoundInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutMatchingRoundInput>
  }

  export type ProjectMemberCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ChallengerCreateNestedOneWithoutProjectMemberInput
  }

  export type ProjectMemberUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberCreateOrConnectWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberCreateManyProjectInputEnvelope = {
    data: ProjectMemberCreateManyProjectInput | ProjectMemberCreateManyProjectInput[]
  }

  export type FormCreateWithoutProjectInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availableMatchingRounds?: FormCreateavailableMatchingRoundsInput | string[]
    applications?: ApplicationCreateNestedManyWithoutFormInput
    questions?: FormQuestionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availableMatchingRounds?: FormCreateavailableMatchingRoundsInput | string[]
    applications?: ApplicationUncheckedCreateNestedManyWithoutFormInput
    questions?: FormQuestionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutProjectInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutProjectInput, FormUncheckedCreateWithoutProjectInput>
  }

  export type FormCreateManyProjectInputEnvelope = {
    data: FormCreateManyProjectInput | FormCreateManyProjectInput[]
  }

  export type ChallengerCreateWithoutProjectsInput = {
    id?: string
    umsbChallengerId?: string | null
    name: string
    nickname: string
    introduction?: string | null
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role?: $Enums.UserRoleEnum
    gender?: $Enums.GenderEnum | null
    chapter?: $Enums.ChallengerChapterEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    ProjectMember?: ProjectMemberCreateNestedManyWithoutUserInput
    challengerSchool: SchoolCreateNestedOneWithoutChallengersInput
  }

  export type ChallengerUncheckedCreateWithoutProjectsInput = {
    id?: string
    umsbChallengerId?: string | null
    name: string
    nickname: string
    introduction?: string | null
    school: string
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role?: $Enums.UserRoleEnum
    gender?: $Enums.GenderEnum | null
    chapter?: $Enums.ChallengerChapterEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    ProjectMember?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type ChallengerCreateOrConnectWithoutProjectsInput = {
    where: ChallengerWhereUniqueInput
    create: XOR<ChallengerCreateWithoutProjectsInput, ChallengerUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectToUpdateManyInput = {
    where: ProjectToWhereInput
    data: ProjectToUpdateInput
  }

  export type ProjectToDeleteManyInput = {
    where: ProjectToWhereInput
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutProjectInput>
  }

  export type FormUpsertWithWhereUniqueWithoutProjectInput = {
    where: FormWhereUniqueInput
    update: XOR<FormUpdateWithoutProjectInput, FormUncheckedUpdateWithoutProjectInput>
    create: XOR<FormCreateWithoutProjectInput, FormUncheckedCreateWithoutProjectInput>
  }

  export type FormUpdateWithWhereUniqueWithoutProjectInput = {
    where: FormWhereUniqueInput
    data: XOR<FormUpdateWithoutProjectInput, FormUncheckedUpdateWithoutProjectInput>
  }

  export type FormUpdateManyWithWhereWithoutProjectInput = {
    where: FormScalarWhereInput
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyWithoutProjectInput>
  }

  export type FormScalarWhereInput = {
    AND?: FormScalarWhereInput | FormScalarWhereInput[]
    OR?: FormScalarWhereInput[]
    NOT?: FormScalarWhereInput | FormScalarWhereInput[]
    id?: StringFilter<"Form"> | string
    projectId?: StringFilter<"Form"> | string
    title?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    availableMatchingRounds?: StringNullableListFilter<"Form">
  }

  export type ChallengerUpsertWithoutProjectsInput = {
    update: XOR<ChallengerUpdateWithoutProjectsInput, ChallengerUncheckedUpdateWithoutProjectsInput>
    create: XOR<ChallengerCreateWithoutProjectsInput, ChallengerUncheckedCreateWithoutProjectsInput>
    where?: ChallengerWhereInput
  }

  export type ChallengerUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ChallengerWhereInput
    data: XOR<ChallengerUpdateWithoutProjectsInput, ChallengerUncheckedUpdateWithoutProjectsInput>
  }

  export type ChallengerUpdateWithoutProjectsInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    ProjectMember?: ProjectMemberUpdateManyWithoutUserNestedInput
    challengerSchool?: SchoolUpdateOneRequiredWithoutChallengersNestedInput
  }

  export type ChallengerUncheckedUpdateWithoutProjectsInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    ProjectMember?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutProjectFormsInput = {
    id?: string
    title: string
    description: string
    link: string
    bannerImage?: string | null
    partTo?: XOR<ProjectToListCreateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMember?: ProjectMemberCreateNestedManyWithoutProjectInput
    projectPlan: ChallengerCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutProjectFormsInput = {
    id?: string
    title: string
    description: string
    link: string
    bannerImage?: string | null
    planId: string
    partTo?: XOR<ProjectToListCreateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMember?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectFormsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectFormsInput, ProjectUncheckedCreateWithoutProjectFormsInput>
  }

  export type ApplicationCreateWithoutFormInput = {
    id?: string
    status?: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ChallengerCreateNestedOneWithoutApplicationsInput
    matchingRound: MatchingRoundCreateNestedOneWithoutApplicationsInRoundInput
    formAnswers?: FormAnswerCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutFormInput = {
    id?: string
    applicantId: string
    status?: $Enums.ApplicationStatusEnum
    matchingRoundId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    formAnswers?: FormAnswerUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutFormInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutFormInput, ApplicationUncheckedCreateWithoutFormInput>
  }

  export type ApplicationCreateManyFormInputEnvelope = {
    data: ApplicationCreateManyFormInput | ApplicationCreateManyFormInput[]
  }

  export type FormQuestionCreateWithoutFormInput = {
    id?: string
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    formAnswers?: FormAnswerCreateNestedManyWithoutQuestionInput
  }

  export type FormQuestionUncheckedCreateWithoutFormInput = {
    id?: string
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    formAnswers?: FormAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type FormQuestionCreateOrConnectWithoutFormInput = {
    where: FormQuestionWhereUniqueInput
    create: XOR<FormQuestionCreateWithoutFormInput, FormQuestionUncheckedCreateWithoutFormInput>
  }

  export type FormQuestionCreateManyFormInputEnvelope = {
    data: FormQuestionCreateManyFormInput | FormQuestionCreateManyFormInput[]
  }

  export type ProjectUpsertWithoutProjectFormsInput = {
    update: XOR<ProjectUpdateWithoutProjectFormsInput, ProjectUncheckedUpdateWithoutProjectFormsInput>
    create: XOR<ProjectCreateWithoutProjectFormsInput, ProjectUncheckedCreateWithoutProjectFormsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectFormsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectFormsInput, ProjectUncheckedUpdateWithoutProjectFormsInput>
  }

  export type ProjectUpdateWithoutProjectFormsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    partTo?: XOR<ProjectToListUpdateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMember?: ProjectMemberUpdateManyWithoutProjectNestedInput
    projectPlan?: ChallengerUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectFormsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    partTo?: XOR<ProjectToListUpdateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMember?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ApplicationUpsertWithWhereUniqueWithoutFormInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutFormInput, ApplicationUncheckedUpdateWithoutFormInput>
    create: XOR<ApplicationCreateWithoutFormInput, ApplicationUncheckedCreateWithoutFormInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutFormInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutFormInput, ApplicationUncheckedUpdateWithoutFormInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutFormInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutFormInput>
  }

  export type FormQuestionUpsertWithWhereUniqueWithoutFormInput = {
    where: FormQuestionWhereUniqueInput
    update: XOR<FormQuestionUpdateWithoutFormInput, FormQuestionUncheckedUpdateWithoutFormInput>
    create: XOR<FormQuestionCreateWithoutFormInput, FormQuestionUncheckedCreateWithoutFormInput>
  }

  export type FormQuestionUpdateWithWhereUniqueWithoutFormInput = {
    where: FormQuestionWhereUniqueInput
    data: XOR<FormQuestionUpdateWithoutFormInput, FormQuestionUncheckedUpdateWithoutFormInput>
  }

  export type FormQuestionUpdateManyWithWhereWithoutFormInput = {
    where: FormQuestionScalarWhereInput
    data: XOR<FormQuestionUpdateManyMutationInput, FormQuestionUncheckedUpdateManyWithoutFormInput>
  }

  export type FormQuestionScalarWhereInput = {
    AND?: FormQuestionScalarWhereInput | FormQuestionScalarWhereInput[]
    OR?: FormQuestionScalarWhereInput[]
    NOT?: FormQuestionScalarWhereInput | FormQuestionScalarWhereInput[]
    id?: StringFilter<"FormQuestion"> | string
    formId?: StringFilter<"FormQuestion"> | string
    questionNo?: IntFilter<"FormQuestion"> | number
    title?: StringFilter<"FormQuestion"> | string
    description?: StringNullableFilter<"FormQuestion"> | string | null
    type?: EnumQuestionTypeEnumFilter<"FormQuestion"> | $Enums.QuestionTypeEnum
    options?: StringNullableListFilter<"FormQuestion">
    isRequired?: BoolFilter<"FormQuestion"> | boolean
    isDeleted?: BoolFilter<"FormQuestion"> | boolean
    createdAt?: DateTimeFilter<"FormQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"FormQuestion"> | Date | string
  }

  export type FormCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availableMatchingRounds?: FormCreateavailableMatchingRoundsInput | string[]
    project: ProjectCreateNestedOneWithoutProjectFormsInput
    applications?: ApplicationCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutQuestionsInput = {
    id?: string
    projectId: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availableMatchingRounds?: FormCreateavailableMatchingRoundsInput | string[]
    applications?: ApplicationUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutQuestionsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutQuestionsInput, FormUncheckedCreateWithoutQuestionsInput>
  }

  export type FormAnswerCreateWithoutQuestionInput = {
    id?: string
    value?: FormAnswerCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutFormAnswersInput
  }

  export type FormAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    applicationId: string
    value?: FormAnswerCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormAnswerCreateOrConnectWithoutQuestionInput = {
    where: FormAnswerWhereUniqueInput
    create: XOR<FormAnswerCreateWithoutQuestionInput, FormAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type FormAnswerCreateManyQuestionInputEnvelope = {
    data: FormAnswerCreateManyQuestionInput | FormAnswerCreateManyQuestionInput[]
  }

  export type FormUpsertWithoutQuestionsInput = {
    update: XOR<FormUpdateWithoutQuestionsInput, FormUncheckedUpdateWithoutQuestionsInput>
    create: XOR<FormCreateWithoutQuestionsInput, FormUncheckedCreateWithoutQuestionsInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutQuestionsInput, FormUncheckedUpdateWithoutQuestionsInput>
  }

  export type FormUpdateWithoutQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableMatchingRounds?: FormUpdateavailableMatchingRoundsInput | string[]
    project?: ProjectUpdateOneRequiredWithoutProjectFormsNestedInput
    applications?: ApplicationUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutQuestionsInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableMatchingRounds?: FormUpdateavailableMatchingRoundsInput | string[]
    applications?: ApplicationUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: FormAnswerWhereUniqueInput
    update: XOR<FormAnswerUpdateWithoutQuestionInput, FormAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<FormAnswerCreateWithoutQuestionInput, FormAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type FormAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: FormAnswerWhereUniqueInput
    data: XOR<FormAnswerUpdateWithoutQuestionInput, FormAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type FormAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: FormAnswerScalarWhereInput
    data: XOR<FormAnswerUpdateManyMutationInput, FormAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type FormAnswerScalarWhereInput = {
    AND?: FormAnswerScalarWhereInput | FormAnswerScalarWhereInput[]
    OR?: FormAnswerScalarWhereInput[]
    NOT?: FormAnswerScalarWhereInput | FormAnswerScalarWhereInput[]
    id?: StringFilter<"FormAnswer"> | string
    applicationId?: StringFilter<"FormAnswer"> | string
    questionId?: StringFilter<"FormAnswer"> | string
    value?: StringNullableListFilter<"FormAnswer">
    createdAt?: DateTimeFilter<"FormAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"FormAnswer"> | Date | string
  }

  export type ProjectCreateWithoutProjectMemberInput = {
    id?: string
    title: string
    description: string
    link: string
    bannerImage?: string | null
    partTo?: XOR<ProjectToListCreateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    projectForms?: FormCreateNestedManyWithoutProjectInput
    projectPlan: ChallengerCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutProjectMemberInput = {
    id?: string
    title: string
    description: string
    link: string
    bannerImage?: string | null
    planId: string
    partTo?: XOR<ProjectToListCreateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    projectForms?: FormUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectMemberInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectMemberInput, ProjectUncheckedCreateWithoutProjectMemberInput>
  }

  export type ChallengerCreateWithoutProjectMemberInput = {
    id?: string
    umsbChallengerId?: string | null
    name: string
    nickname: string
    introduction?: string | null
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role?: $Enums.UserRoleEnum
    gender?: $Enums.GenderEnum | null
    chapter?: $Enums.ChallengerChapterEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    projects?: ProjectCreateNestedManyWithoutProjectPlanInput
    challengerSchool: SchoolCreateNestedOneWithoutChallengersInput
  }

  export type ChallengerUncheckedCreateWithoutProjectMemberInput = {
    id?: string
    umsbChallengerId?: string | null
    name: string
    nickname: string
    introduction?: string | null
    school: string
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role?: $Enums.UserRoleEnum
    gender?: $Enums.GenderEnum | null
    chapter?: $Enums.ChallengerChapterEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    projects?: ProjectUncheckedCreateNestedManyWithoutProjectPlanInput
  }

  export type ChallengerCreateOrConnectWithoutProjectMemberInput = {
    where: ChallengerWhereUniqueInput
    create: XOR<ChallengerCreateWithoutProjectMemberInput, ChallengerUncheckedCreateWithoutProjectMemberInput>
  }

  export type ProjectUpsertWithoutProjectMemberInput = {
    update: XOR<ProjectUpdateWithoutProjectMemberInput, ProjectUncheckedUpdateWithoutProjectMemberInput>
    create: XOR<ProjectCreateWithoutProjectMemberInput, ProjectUncheckedCreateWithoutProjectMemberInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectMemberInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectMemberInput, ProjectUncheckedUpdateWithoutProjectMemberInput>
  }

  export type ProjectUpdateWithoutProjectMemberInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    partTo?: XOR<ProjectToListUpdateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectForms?: FormUpdateManyWithoutProjectNestedInput
    projectPlan?: ChallengerUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectMemberInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    partTo?: XOR<ProjectToListUpdateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectForms?: FormUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ChallengerUpsertWithoutProjectMemberInput = {
    update: XOR<ChallengerUpdateWithoutProjectMemberInput, ChallengerUncheckedUpdateWithoutProjectMemberInput>
    create: XOR<ChallengerCreateWithoutProjectMemberInput, ChallengerUncheckedCreateWithoutProjectMemberInput>
    where?: ChallengerWhereInput
  }

  export type ChallengerUpdateToOneWithWhereWithoutProjectMemberInput = {
    where?: ChallengerWhereInput
    data: XOR<ChallengerUpdateWithoutProjectMemberInput, ChallengerUncheckedUpdateWithoutProjectMemberInput>
  }

  export type ChallengerUpdateWithoutProjectMemberInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    projects?: ProjectUpdateManyWithoutProjectPlanNestedInput
    challengerSchool?: SchoolUpdateOneRequiredWithoutChallengersNestedInput
  }

  export type ChallengerUncheckedUpdateWithoutProjectMemberInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutProjectPlanNestedInput
  }

  export type ApplicationCreateWithoutFormAnswersInput = {
    id?: string
    status?: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ChallengerCreateNestedOneWithoutApplicationsInput
    form: FormCreateNestedOneWithoutApplicationsInput
    matchingRound: MatchingRoundCreateNestedOneWithoutApplicationsInRoundInput
  }

  export type ApplicationUncheckedCreateWithoutFormAnswersInput = {
    id?: string
    applicantId: string
    formId: string
    status?: $Enums.ApplicationStatusEnum
    matchingRoundId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutFormAnswersInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutFormAnswersInput, ApplicationUncheckedCreateWithoutFormAnswersInput>
  }

  export type FormQuestionCreateWithoutFormAnswersInput = {
    id?: string
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    form: FormCreateNestedOneWithoutQuestionsInput
  }

  export type FormQuestionUncheckedCreateWithoutFormAnswersInput = {
    id?: string
    formId: string
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormQuestionCreateOrConnectWithoutFormAnswersInput = {
    where: FormQuestionWhereUniqueInput
    create: XOR<FormQuestionCreateWithoutFormAnswersInput, FormQuestionUncheckedCreateWithoutFormAnswersInput>
  }

  export type ApplicationUpsertWithoutFormAnswersInput = {
    update: XOR<ApplicationUpdateWithoutFormAnswersInput, ApplicationUncheckedUpdateWithoutFormAnswersInput>
    create: XOR<ApplicationCreateWithoutFormAnswersInput, ApplicationUncheckedCreateWithoutFormAnswersInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutFormAnswersInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutFormAnswersInput, ApplicationUncheckedUpdateWithoutFormAnswersInput>
  }

  export type ApplicationUpdateWithoutFormAnswersInput = {
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ChallengerUpdateOneRequiredWithoutApplicationsNestedInput
    form?: FormUpdateOneRequiredWithoutApplicationsNestedInput
    matchingRound?: MatchingRoundUpdateOneRequiredWithoutApplicationsInRoundNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutFormAnswersInput = {
    applicantId?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    matchingRoundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormQuestionUpsertWithoutFormAnswersInput = {
    update: XOR<FormQuestionUpdateWithoutFormAnswersInput, FormQuestionUncheckedUpdateWithoutFormAnswersInput>
    create: XOR<FormQuestionCreateWithoutFormAnswersInput, FormQuestionUncheckedCreateWithoutFormAnswersInput>
    where?: FormQuestionWhereInput
  }

  export type FormQuestionUpdateToOneWithWhereWithoutFormAnswersInput = {
    where?: FormQuestionWhereInput
    data: XOR<FormQuestionUpdateWithoutFormAnswersInput, FormQuestionUncheckedUpdateWithoutFormAnswersInput>
  }

  export type FormQuestionUpdateWithoutFormAnswersInput = {
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type FormQuestionUncheckedUpdateWithoutFormAnswersInput = {
    formId?: StringFieldUpdateOperationsInput | string
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengerCreateWithoutApplicationsInput = {
    id?: string
    umsbChallengerId?: string | null
    name: string
    nickname: string
    introduction?: string | null
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role?: $Enums.UserRoleEnum
    gender?: $Enums.GenderEnum | null
    chapter?: $Enums.ChallengerChapterEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutProjectPlanInput
    ProjectMember?: ProjectMemberCreateNestedManyWithoutUserInput
    challengerSchool: SchoolCreateNestedOneWithoutChallengersInput
  }

  export type ChallengerUncheckedCreateWithoutApplicationsInput = {
    id?: string
    umsbChallengerId?: string | null
    name: string
    nickname: string
    introduction?: string | null
    school: string
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role?: $Enums.UserRoleEnum
    gender?: $Enums.GenderEnum | null
    chapter?: $Enums.ChallengerChapterEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutProjectPlanInput
    ProjectMember?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type ChallengerCreateOrConnectWithoutApplicationsInput = {
    where: ChallengerWhereUniqueInput
    create: XOR<ChallengerCreateWithoutApplicationsInput, ChallengerUncheckedCreateWithoutApplicationsInput>
  }

  export type FormCreateWithoutApplicationsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availableMatchingRounds?: FormCreateavailableMatchingRoundsInput | string[]
    project: ProjectCreateNestedOneWithoutProjectFormsInput
    questions?: FormQuestionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutApplicationsInput = {
    id?: string
    projectId: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availableMatchingRounds?: FormCreateavailableMatchingRoundsInput | string[]
    questions?: FormQuestionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutApplicationsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutApplicationsInput, FormUncheckedCreateWithoutApplicationsInput>
  }

  export type MatchingRoundCreateWithoutApplicationsInRoundInput = {
    id?: string
    name: string
    startDatetime: Date | string
    endDatetime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchingRoundUncheckedCreateWithoutApplicationsInRoundInput = {
    id?: string
    name: string
    startDatetime: Date | string
    endDatetime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchingRoundCreateOrConnectWithoutApplicationsInRoundInput = {
    where: MatchingRoundWhereUniqueInput
    create: XOR<MatchingRoundCreateWithoutApplicationsInRoundInput, MatchingRoundUncheckedCreateWithoutApplicationsInRoundInput>
  }

  export type FormAnswerCreateWithoutApplicationInput = {
    id?: string
    value?: FormAnswerCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    question: FormQuestionCreateNestedOneWithoutFormAnswersInput
  }

  export type FormAnswerUncheckedCreateWithoutApplicationInput = {
    id?: string
    questionId: string
    value?: FormAnswerCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormAnswerCreateOrConnectWithoutApplicationInput = {
    where: FormAnswerWhereUniqueInput
    create: XOR<FormAnswerCreateWithoutApplicationInput, FormAnswerUncheckedCreateWithoutApplicationInput>
  }

  export type FormAnswerCreateManyApplicationInputEnvelope = {
    data: FormAnswerCreateManyApplicationInput | FormAnswerCreateManyApplicationInput[]
  }

  export type ChallengerUpsertWithoutApplicationsInput = {
    update: XOR<ChallengerUpdateWithoutApplicationsInput, ChallengerUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ChallengerCreateWithoutApplicationsInput, ChallengerUncheckedCreateWithoutApplicationsInput>
    where?: ChallengerWhereInput
  }

  export type ChallengerUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ChallengerWhereInput
    data: XOR<ChallengerUpdateWithoutApplicationsInput, ChallengerUncheckedUpdateWithoutApplicationsInput>
  }

  export type ChallengerUpdateWithoutApplicationsInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutProjectPlanNestedInput
    ProjectMember?: ProjectMemberUpdateManyWithoutUserNestedInput
    challengerSchool?: SchoolUpdateOneRequiredWithoutChallengersNestedInput
  }

  export type ChallengerUncheckedUpdateWithoutApplicationsInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    school?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutProjectPlanNestedInput
    ProjectMember?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FormUpsertWithoutApplicationsInput = {
    update: XOR<FormUpdateWithoutApplicationsInput, FormUncheckedUpdateWithoutApplicationsInput>
    create: XOR<FormCreateWithoutApplicationsInput, FormUncheckedCreateWithoutApplicationsInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutApplicationsInput, FormUncheckedUpdateWithoutApplicationsInput>
  }

  export type FormUpdateWithoutApplicationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableMatchingRounds?: FormUpdateavailableMatchingRoundsInput | string[]
    project?: ProjectUpdateOneRequiredWithoutProjectFormsNestedInput
    questions?: FormQuestionUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutApplicationsInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableMatchingRounds?: FormUpdateavailableMatchingRoundsInput | string[]
    questions?: FormQuestionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type MatchingRoundUpsertWithoutApplicationsInRoundInput = {
    update: XOR<MatchingRoundUpdateWithoutApplicationsInRoundInput, MatchingRoundUncheckedUpdateWithoutApplicationsInRoundInput>
    create: XOR<MatchingRoundCreateWithoutApplicationsInRoundInput, MatchingRoundUncheckedCreateWithoutApplicationsInRoundInput>
    where?: MatchingRoundWhereInput
  }

  export type MatchingRoundUpdateToOneWithWhereWithoutApplicationsInRoundInput = {
    where?: MatchingRoundWhereInput
    data: XOR<MatchingRoundUpdateWithoutApplicationsInRoundInput, MatchingRoundUncheckedUpdateWithoutApplicationsInRoundInput>
  }

  export type MatchingRoundUpdateWithoutApplicationsInRoundInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingRoundUncheckedUpdateWithoutApplicationsInRoundInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerUpsertWithWhereUniqueWithoutApplicationInput = {
    where: FormAnswerWhereUniqueInput
    update: XOR<FormAnswerUpdateWithoutApplicationInput, FormAnswerUncheckedUpdateWithoutApplicationInput>
    create: XOR<FormAnswerCreateWithoutApplicationInput, FormAnswerUncheckedCreateWithoutApplicationInput>
  }

  export type FormAnswerUpdateWithWhereUniqueWithoutApplicationInput = {
    where: FormAnswerWhereUniqueInput
    data: XOR<FormAnswerUpdateWithoutApplicationInput, FormAnswerUncheckedUpdateWithoutApplicationInput>
  }

  export type FormAnswerUpdateManyWithWhereWithoutApplicationInput = {
    where: FormAnswerScalarWhereInput
    data: XOR<FormAnswerUpdateManyMutationInput, FormAnswerUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ChallengerCreateWithoutChallengerSchoolInput = {
    id?: string
    umsbChallengerId?: string | null
    name: string
    nickname: string
    introduction?: string | null
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role?: $Enums.UserRoleEnum
    gender?: $Enums.GenderEnum | null
    chapter?: $Enums.ChallengerChapterEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    projects?: ProjectCreateNestedManyWithoutProjectPlanInput
    ProjectMember?: ProjectMemberCreateNestedManyWithoutUserInput
  }

  export type ChallengerUncheckedCreateWithoutChallengerSchoolInput = {
    id?: string
    umsbChallengerId?: string | null
    name: string
    nickname: string
    introduction?: string | null
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role?: $Enums.UserRoleEnum
    gender?: $Enums.GenderEnum | null
    chapter?: $Enums.ChallengerChapterEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    projects?: ProjectUncheckedCreateNestedManyWithoutProjectPlanInput
    ProjectMember?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type ChallengerCreateOrConnectWithoutChallengerSchoolInput = {
    where: ChallengerWhereUniqueInput
    create: XOR<ChallengerCreateWithoutChallengerSchoolInput, ChallengerUncheckedCreateWithoutChallengerSchoolInput>
  }

  export type ChallengerCreateManyChallengerSchoolInputEnvelope = {
    data: ChallengerCreateManyChallengerSchoolInput | ChallengerCreateManyChallengerSchoolInput[]
  }

  export type ChallengerUpsertWithWhereUniqueWithoutChallengerSchoolInput = {
    where: ChallengerWhereUniqueInput
    update: XOR<ChallengerUpdateWithoutChallengerSchoolInput, ChallengerUncheckedUpdateWithoutChallengerSchoolInput>
    create: XOR<ChallengerCreateWithoutChallengerSchoolInput, ChallengerUncheckedCreateWithoutChallengerSchoolInput>
  }

  export type ChallengerUpdateWithWhereUniqueWithoutChallengerSchoolInput = {
    where: ChallengerWhereUniqueInput
    data: XOR<ChallengerUpdateWithoutChallengerSchoolInput, ChallengerUncheckedUpdateWithoutChallengerSchoolInput>
  }

  export type ChallengerUpdateManyWithWhereWithoutChallengerSchoolInput = {
    where: ChallengerScalarWhereInput
    data: XOR<ChallengerUpdateManyMutationInput, ChallengerUncheckedUpdateManyWithoutChallengerSchoolInput>
  }

  export type ChallengerScalarWhereInput = {
    AND?: ChallengerScalarWhereInput | ChallengerScalarWhereInput[]
    OR?: ChallengerScalarWhereInput[]
    NOT?: ChallengerScalarWhereInput | ChallengerScalarWhereInput[]
    id?: StringFilter<"Challenger"> | string
    umsbChallengerId?: StringNullableFilter<"Challenger"> | string | null
    name?: StringFilter<"Challenger"> | string
    nickname?: StringFilter<"Challenger"> | string
    introduction?: StringNullableFilter<"Challenger"> | string | null
    school?: StringFilter<"Challenger"> | string
    studentId?: StringFilter<"Challenger"> | string
    password?: StringFilter<"Challenger"> | string
    part?: EnumUserPartEnumFilter<"Challenger"> | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFilter<"Challenger"> | $Enums.UserRoleEnum
    gender?: EnumGenderEnumNullableFilter<"Challenger"> | $Enums.GenderEnum | null
    chapter?: EnumChallengerChapterEnumNullableFilter<"Challenger"> | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFilter<"Challenger"> | Date | string
    updatedAt?: DateTimeFilter<"Challenger"> | Date | string
  }

  export type ApplicationCreateManyApplicantInput = {
    id?: string
    formId: string
    status?: $Enums.ApplicationStatusEnum
    matchingRoundId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyProjectPlanInput = {
    id?: string
    title: string
    description: string
    link: string
    bannerImage?: string | null
    partTo?: XOR<ProjectToListCreateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberCreateManyUserInput = {
    id?: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateWithoutApplicantInput = {
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutApplicationsNestedInput
    matchingRound?: MatchingRoundUpdateOneRequiredWithoutApplicationsInRoundNestedInput
    formAnswers?: FormAnswerUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    formId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    matchingRoundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formAnswers?: FormAnswerUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    formId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    matchingRoundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutProjectPlanInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    partTo?: XOR<ProjectToListUpdateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMember?: ProjectMemberUpdateManyWithoutProjectNestedInput
    projectForms?: FormUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectPlanInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    partTo?: XOR<ProjectToListUpdateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMember?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    projectForms?: FormUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutProjectPlanInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    partTo?: XOR<ProjectToListUpdateEnvelopeInput, ProjectToCreateInput> | ProjectToCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectMemberNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutUserInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutUserInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyMatchingRoundInput = {
    id?: string
    applicantId: string
    formId: string
    status?: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateWithoutMatchingRoundInput = {
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ChallengerUpdateOneRequiredWithoutApplicationsNestedInput
    form?: FormUpdateOneRequiredWithoutApplicationsNestedInput
    formAnswers?: FormAnswerUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutMatchingRoundInput = {
    applicantId?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formAnswers?: FormAnswerUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutMatchingRoundInput = {
    applicantId?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateManyProjectInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormCreateManyProjectInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    availableMatchingRounds?: FormCreateavailableMatchingRoundsInput | string[]
  }

  export type ProjectToUpdateInput = {
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    to?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectMemberUpdateWithoutProjectInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ChallengerUpdateOneRequiredWithoutProjectMemberNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutProjectInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableMatchingRounds?: FormUpdateavailableMatchingRoundsInput | string[]
    applications?: ApplicationUpdateManyWithoutFormNestedInput
    questions?: FormQuestionUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableMatchingRounds?: FormUpdateavailableMatchingRoundsInput | string[]
    applications?: ApplicationUncheckedUpdateManyWithoutFormNestedInput
    questions?: FormQuestionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateManyWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableMatchingRounds?: FormUpdateavailableMatchingRoundsInput | string[]
  }

  export type ApplicationCreateManyFormInput = {
    id?: string
    applicantId: string
    status?: $Enums.ApplicationStatusEnum
    matchingRoundId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormQuestionCreateManyFormInput = {
    id?: string
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateWithoutFormInput = {
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ChallengerUpdateOneRequiredWithoutApplicationsNestedInput
    matchingRound?: MatchingRoundUpdateOneRequiredWithoutApplicationsInRoundNestedInput
    formAnswers?: FormAnswerUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutFormInput = {
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    matchingRoundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formAnswers?: FormAnswerUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutFormInput = {
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    matchingRoundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormQuestionUpdateWithoutFormInput = {
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formAnswers?: FormAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type FormQuestionUncheckedUpdateWithoutFormInput = {
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formAnswers?: FormAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type FormQuestionUncheckedUpdateManyWithoutFormInput = {
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerCreateManyQuestionInput = {
    id?: string
    applicationId: string
    value?: FormAnswerCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormAnswerUpdateWithoutQuestionInput = {
    value?: FormAnswerUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutFormAnswersNestedInput
  }

  export type FormAnswerUncheckedUpdateWithoutQuestionInput = {
    applicationId?: StringFieldUpdateOperationsInput | string
    value?: FormAnswerUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerUncheckedUpdateManyWithoutQuestionInput = {
    applicationId?: StringFieldUpdateOperationsInput | string
    value?: FormAnswerUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerCreateManyApplicationInput = {
    id?: string
    questionId: string
    value?: FormAnswerCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormAnswerUpdateWithoutApplicationInput = {
    value?: FormAnswerUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: FormQuestionUpdateOneRequiredWithoutFormAnswersNestedInput
  }

  export type FormAnswerUncheckedUpdateWithoutApplicationInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    value?: FormAnswerUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormAnswerUncheckedUpdateManyWithoutApplicationInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    value?: FormAnswerUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengerCreateManyChallengerSchoolInput = {
    id?: string
    umsbChallengerId?: string | null
    name: string
    nickname: string
    introduction?: string | null
    studentId: string
    password: string
    part: $Enums.UserPartEnum
    role?: $Enums.UserRoleEnum
    gender?: $Enums.GenderEnum | null
    chapter?: $Enums.ChallengerChapterEnum | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengerUpdateWithoutChallengerSchoolInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    projects?: ProjectUpdateManyWithoutProjectPlanNestedInput
    ProjectMember?: ProjectMemberUpdateManyWithoutUserNestedInput
  }

  export type ChallengerUncheckedUpdateWithoutChallengerSchoolInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutProjectPlanNestedInput
    ProjectMember?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengerUncheckedUpdateManyWithoutChallengerSchoolInput = {
    umsbChallengerId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    part?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    gender?: NullableEnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum | null
    chapter?: NullableEnumChallengerChapterEnumFieldUpdateOperationsInput | $Enums.ChallengerChapterEnum | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}