
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
 * Model Challenger
 * 
 */
export type Challenger = $Result.DefaultSelection<Prisma.$ChallengerPayload>
/**
 * Model ChallengerGisu
 * 
 */
export type ChallengerGisu = $Result.DefaultSelection<Prisma.$ChallengerGisuPayload>
/**
 * Model Gisu
 * 
 */
export type Gisu = $Result.DefaultSelection<Prisma.$GisuPayload>
/**
 * Model GisuSchool
 * 
 */
export type GisuSchool = $Result.DefaultSelection<Prisma.$GisuSchoolPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectMember
 * 
 */
export type ProjectMember = $Result.DefaultSelection<Prisma.$ProjectMemberPayload>
/**
 * Model ApplicationForm
 * 
 */
export type ApplicationForm = $Result.DefaultSelection<Prisma.$ApplicationFormPayload>
/**
 * Model FormQuestion
 * 
 */
export type FormQuestion = $Result.DefaultSelection<Prisma.$FormQuestionPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model ApplicationResponse
 * 
 */
export type ApplicationResponse = $Result.DefaultSelection<Prisma.$ApplicationResponsePayload>
/**
 * Model MatchingRound
 * 
 */
export type MatchingRound = $Result.DefaultSelection<Prisma.$MatchingRoundPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GenderEnum: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type GenderEnum = (typeof GenderEnum)[keyof typeof GenderEnum]


export const UserPartEnum: {
  PLAN: 'PLAN',
  DESIGN: 'DESIGN',
  WEB: 'WEB',
  ANDROID: 'ANDROID',
  IOS: 'IOS',
  SPRINGBOOT: 'SPRINGBOOT',
  NODEJS: 'NODEJS',
  NULL: 'NULL'
};

export type UserPartEnum = (typeof UserPartEnum)[keyof typeof UserPartEnum]


export const QuestionTypeEnum: {
  SINGLE_CHOICE: 'SINGLE_CHOICE',
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  SUBJECTIVE: 'SUBJECTIVE'
};

export type QuestionTypeEnum = (typeof QuestionTypeEnum)[keyof typeof QuestionTypeEnum]


export const ApplicationStatusEnum: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  REJECTED: 'REJECTED'
};

export type ApplicationStatusEnum = (typeof ApplicationStatusEnum)[keyof typeof ApplicationStatusEnum]

}

export type GenderEnum = $Enums.GenderEnum

export const GenderEnum: typeof $Enums.GenderEnum

export type UserPartEnum = $Enums.UserPartEnum

export const UserPartEnum: typeof $Enums.UserPartEnum

export type QuestionTypeEnum = $Enums.QuestionTypeEnum

export const QuestionTypeEnum: typeof $Enums.QuestionTypeEnum

export type ApplicationStatusEnum = $Enums.ApplicationStatusEnum

export const ApplicationStatusEnum: typeof $Enums.ApplicationStatusEnum

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


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
   * `prisma.challengerGisu`: Exposes CRUD operations for the **ChallengerGisu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengerGisus
    * const challengerGisus = await prisma.challengerGisu.findMany()
    * ```
    */
  get challengerGisu(): Prisma.ChallengerGisuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gisu`: Exposes CRUD operations for the **Gisu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gisus
    * const gisus = await prisma.gisu.findMany()
    * ```
    */
  get gisu(): Prisma.GisuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gisuSchool`: Exposes CRUD operations for the **GisuSchool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GisuSchools
    * const gisuSchools = await prisma.gisuSchool.findMany()
    * ```
    */
  get gisuSchool(): Prisma.GisuSchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.projectMember`: Exposes CRUD operations for the **ProjectMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMembers
    * const projectMembers = await prisma.projectMember.findMany()
    * ```
    */
  get projectMember(): Prisma.ProjectMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationForm`: Exposes CRUD operations for the **ApplicationForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationForms
    * const applicationForms = await prisma.applicationForm.findMany()
    * ```
    */
  get applicationForm(): Prisma.ApplicationFormDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationResponse`: Exposes CRUD operations for the **ApplicationResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationResponses
    * const applicationResponses = await prisma.applicationResponse.findMany()
    * ```
    */
  get applicationResponse(): Prisma.ApplicationResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchingRound`: Exposes CRUD operations for the **MatchingRound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchingRounds
    * const matchingRounds = await prisma.matchingRound.findMany()
    * ```
    */
  get matchingRound(): Prisma.MatchingRoundDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    ChallengerGisu: 'ChallengerGisu',
    Gisu: 'Gisu',
    GisuSchool: 'GisuSchool',
    School: 'School',
    Chapter: 'Chapter',
    Project: 'Project',
    ProjectMember: 'ProjectMember',
    ApplicationForm: 'ApplicationForm',
    FormQuestion: 'FormQuestion',
    Application: 'Application',
    ApplicationResponse: 'ApplicationResponse',
    MatchingRound: 'MatchingRound'
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
      modelProps: "challenger" | "challengerGisu" | "gisu" | "gisuSchool" | "school" | "chapter" | "project" | "projectMember" | "applicationForm" | "formQuestion" | "application" | "applicationResponse" | "matchingRound"
      txIsolationLevel: Prisma.TransactionIsolationLevel
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
          createManyAndReturn: {
            args: Prisma.ChallengerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.ChallengerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerPayload>[]
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
          count: {
            args: Prisma.ChallengerCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengerCountAggregateOutputType> | number
          }
        }
      }
      ChallengerGisu: {
        payload: Prisma.$ChallengerGisuPayload<ExtArgs>
        fields: Prisma.ChallengerGisuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengerGisuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerGisuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengerGisuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerGisuPayload>
          }
          findFirst: {
            args: Prisma.ChallengerGisuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerGisuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengerGisuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerGisuPayload>
          }
          findMany: {
            args: Prisma.ChallengerGisuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerGisuPayload>[]
          }
          create: {
            args: Prisma.ChallengerGisuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerGisuPayload>
          }
          createMany: {
            args: Prisma.ChallengerGisuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengerGisuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerGisuPayload>[]
          }
          delete: {
            args: Prisma.ChallengerGisuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerGisuPayload>
          }
          update: {
            args: Prisma.ChallengerGisuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerGisuPayload>
          }
          deleteMany: {
            args: Prisma.ChallengerGisuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengerGisuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengerGisuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerGisuPayload>[]
          }
          upsert: {
            args: Prisma.ChallengerGisuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengerGisuPayload>
          }
          aggregate: {
            args: Prisma.ChallengerGisuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallengerGisu>
          }
          groupBy: {
            args: Prisma.ChallengerGisuGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengerGisuGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengerGisuCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengerGisuCountAggregateOutputType> | number
          }
        }
      }
      Gisu: {
        payload: Prisma.$GisuPayload<ExtArgs>
        fields: Prisma.GisuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GisuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GisuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuPayload>
          }
          findFirst: {
            args: Prisma.GisuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GisuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuPayload>
          }
          findMany: {
            args: Prisma.GisuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuPayload>[]
          }
          create: {
            args: Prisma.GisuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuPayload>
          }
          createMany: {
            args: Prisma.GisuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GisuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuPayload>[]
          }
          delete: {
            args: Prisma.GisuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuPayload>
          }
          update: {
            args: Prisma.GisuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuPayload>
          }
          deleteMany: {
            args: Prisma.GisuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GisuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GisuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuPayload>[]
          }
          upsert: {
            args: Prisma.GisuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuPayload>
          }
          aggregate: {
            args: Prisma.GisuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGisu>
          }
          groupBy: {
            args: Prisma.GisuGroupByArgs<ExtArgs>
            result: $Utils.Optional<GisuGroupByOutputType>[]
          }
          count: {
            args: Prisma.GisuCountArgs<ExtArgs>
            result: $Utils.Optional<GisuCountAggregateOutputType> | number
          }
        }
      }
      GisuSchool: {
        payload: Prisma.$GisuSchoolPayload<ExtArgs>
        fields: Prisma.GisuSchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GisuSchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuSchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GisuSchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuSchoolPayload>
          }
          findFirst: {
            args: Prisma.GisuSchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuSchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GisuSchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuSchoolPayload>
          }
          findMany: {
            args: Prisma.GisuSchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuSchoolPayload>[]
          }
          create: {
            args: Prisma.GisuSchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuSchoolPayload>
          }
          createMany: {
            args: Prisma.GisuSchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GisuSchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuSchoolPayload>[]
          }
          delete: {
            args: Prisma.GisuSchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuSchoolPayload>
          }
          update: {
            args: Prisma.GisuSchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuSchoolPayload>
          }
          deleteMany: {
            args: Prisma.GisuSchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GisuSchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GisuSchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuSchoolPayload>[]
          }
          upsert: {
            args: Prisma.GisuSchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GisuSchoolPayload>
          }
          aggregate: {
            args: Prisma.GisuSchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGisuSchool>
          }
          groupBy: {
            args: Prisma.GisuSchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<GisuSchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.GisuSchoolCountArgs<ExtArgs>
            result: $Utils.Optional<GisuSchoolCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
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
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChapterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChapterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
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
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.ProjectMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.ProjectMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
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
          count: {
            args: Prisma.ProjectMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberCountAggregateOutputType> | number
          }
        }
      }
      ApplicationForm: {
        payload: Prisma.$ApplicationFormPayload<ExtArgs>
        fields: Prisma.ApplicationFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>
          }
          findMany: {
            args: Prisma.ApplicationFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>[]
          }
          create: {
            args: Prisma.ApplicationFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>
          }
          createMany: {
            args: Prisma.ApplicationFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>[]
          }
          delete: {
            args: Prisma.ApplicationFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>
          }
          update: {
            args: Prisma.ApplicationFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationFormPayload>
          }
          aggregate: {
            args: Prisma.ApplicationFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationForm>
          }
          groupBy: {
            args: Prisma.ApplicationFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationFormCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationFormCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.FormQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormQuestionPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.FormQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormQuestionPayload>[]
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
          count: {
            args: Prisma.FormQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<FormQuestionCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
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
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      ApplicationResponse: {
        payload: Prisma.$ApplicationResponsePayload<ExtArgs>
        fields: Prisma.ApplicationResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationResponsePayload>
          }
          findFirst: {
            args: Prisma.ApplicationResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationResponsePayload>
          }
          findMany: {
            args: Prisma.ApplicationResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationResponsePayload>[]
          }
          create: {
            args: Prisma.ApplicationResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationResponsePayload>
          }
          createMany: {
            args: Prisma.ApplicationResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationResponsePayload>[]
          }
          delete: {
            args: Prisma.ApplicationResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationResponsePayload>
          }
          update: {
            args: Prisma.ApplicationResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationResponsePayload>
          }
          deleteMany: {
            args: Prisma.ApplicationResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationResponsePayload>[]
          }
          upsert: {
            args: Prisma.ApplicationResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationResponsePayload>
          }
          aggregate: {
            args: Prisma.ApplicationResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationResponse>
          }
          groupBy: {
            args: Prisma.ApplicationResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationResponseCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationResponseCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.MatchingRoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingRoundPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.MatchingRoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchingRoundPayload>[]
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
          count: {
            args: Prisma.MatchingRoundCountArgs<ExtArgs>
            result: $Utils.Optional<MatchingRoundCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    challengerGisu?: ChallengerGisuOmit
    gisu?: GisuOmit
    gisuSchool?: GisuSchoolOmit
    school?: SchoolOmit
    chapter?: ChapterOmit
    project?: ProjectOmit
    projectMember?: ProjectMemberOmit
    applicationForm?: ApplicationFormOmit
    formQuestion?: FormQuestionOmit
    application?: ApplicationOmit
    applicationResponse?: ApplicationResponseOmit
    matchingRound?: MatchingRoundOmit
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
    gisuRoles: number
    ledGisuSchools: number
    viceLedGisuSchools: number
    projectMembers: number
    applications: number
  }

  export type ChallengerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gisuRoles?: boolean | ChallengerCountOutputTypeCountGisuRolesArgs
    ledGisuSchools?: boolean | ChallengerCountOutputTypeCountLedGisuSchoolsArgs
    viceLedGisuSchools?: boolean | ChallengerCountOutputTypeCountViceLedGisuSchoolsArgs
    projectMembers?: boolean | ChallengerCountOutputTypeCountProjectMembersArgs
    applications?: boolean | ChallengerCountOutputTypeCountApplicationsArgs
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
  export type ChallengerCountOutputTypeCountGisuRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengerGisuWhereInput
  }

  /**
   * ChallengerCountOutputType without action
   */
  export type ChallengerCountOutputTypeCountLedGisuSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GisuSchoolWhereInput
  }

  /**
   * ChallengerCountOutputType without action
   */
  export type ChallengerCountOutputTypeCountViceLedGisuSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GisuSchoolWhereInput
  }

  /**
   * ChallengerCountOutputType without action
   */
  export type ChallengerCountOutputTypeCountProjectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }

  /**
   * ChallengerCountOutputType without action
   */
  export type ChallengerCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type GisuCountOutputType
   */

  export type GisuCountOutputType = {
    gisuSchools: number
    chapters: number
    challengerGisus: number
  }

  export type GisuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gisuSchools?: boolean | GisuCountOutputTypeCountGisuSchoolsArgs
    chapters?: boolean | GisuCountOutputTypeCountChaptersArgs
    challengerGisus?: boolean | GisuCountOutputTypeCountChallengerGisusArgs
  }

  // Custom InputTypes
  /**
   * GisuCountOutputType without action
   */
  export type GisuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuCountOutputType
     */
    select?: GisuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GisuCountOutputType without action
   */
  export type GisuCountOutputTypeCountGisuSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GisuSchoolWhereInput
  }

  /**
   * GisuCountOutputType without action
   */
  export type GisuCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }

  /**
   * GisuCountOutputType without action
   */
  export type GisuCountOutputTypeCountChallengerGisusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengerGisuWhereInput
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    challengers: number
    gisuSchools: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challengers?: boolean | SchoolCountOutputTypeCountChallengersArgs
    gisuSchools?: boolean | SchoolCountOutputTypeCountGisuSchoolsArgs
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
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountGisuSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GisuSchoolWhereInput
  }


  /**
   * Count Type ChapterCountOutputType
   */

  export type ChapterCountOutputType = {
    projects: number
  }

  export type ChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ChapterCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: ChapterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    members: number
    applicationForms: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ProjectCountOutputTypeCountMembersArgs
    applicationForms?: boolean | ProjectCountOutputTypeCountApplicationFormsArgs
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
  export type ProjectCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountApplicationFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationFormWhereInput
  }


  /**
   * Count Type ApplicationFormCountOutputType
   */

  export type ApplicationFormCountOutputType = {
    questions: number
  }

  export type ApplicationFormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | ApplicationFormCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * ApplicationFormCountOutputType without action
   */
  export type ApplicationFormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationFormCountOutputType
     */
    select?: ApplicationFormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationFormCountOutputType without action
   */
  export type ApplicationFormCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormQuestionWhereInput
  }


  /**
   * Count Type FormQuestionCountOutputType
   */

  export type FormQuestionCountOutputType = {
    responses: number
  }

  export type FormQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | FormQuestionCountOutputTypeCountResponsesArgs
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
  export type FormQuestionCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationResponseWhereInput
  }


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    responses: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | ApplicationCountOutputTypeCountResponsesArgs
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
  export type ApplicationCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationResponseWhereInput
  }


  /**
   * Count Type MatchingRoundCountOutputType
   */

  export type MatchingRoundCountOutputType = {
    applications: number
  }

  export type MatchingRoundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | MatchingRoundCountOutputTypeCountApplicationsArgs
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
  export type MatchingRoundCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Challenger
   */

  export type AggregateChallenger = {
    _count: ChallengerCountAggregateOutputType | null
    _avg: ChallengerAvgAggregateOutputType | null
    _sum: ChallengerSumAggregateOutputType | null
    _min: ChallengerMinAggregateOutputType | null
    _max: ChallengerMaxAggregateOutputType | null
  }

  export type ChallengerAvgAggregateOutputType = {
    id: number | null
    umsbId: number | null
    schoolId: number | null
  }

  export type ChallengerSumAggregateOutputType = {
    id: bigint | null
    umsbId: number | null
    schoolId: bigint | null
  }

  export type ChallengerMinAggregateOutputType = {
    id: bigint | null
    umsbId: number | null
    name: string | null
    nickname: string | null
    gender: $Enums.GenderEnum | null
    schoolId: bigint | null
    studentId: string | null
    profileImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengerMaxAggregateOutputType = {
    id: bigint | null
    umsbId: number | null
    name: string | null
    nickname: string | null
    gender: $Enums.GenderEnum | null
    schoolId: bigint | null
    studentId: string | null
    profileImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengerCountAggregateOutputType = {
    id: number
    umsbId: number
    name: number
    nickname: number
    gender: number
    schoolId: number
    studentId: number
    profileImageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChallengerAvgAggregateInputType = {
    id?: true
    umsbId?: true
    schoolId?: true
  }

  export type ChallengerSumAggregateInputType = {
    id?: true
    umsbId?: true
    schoolId?: true
  }

  export type ChallengerMinAggregateInputType = {
    id?: true
    umsbId?: true
    name?: true
    nickname?: true
    gender?: true
    schoolId?: true
    studentId?: true
    profileImageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengerMaxAggregateInputType = {
    id?: true
    umsbId?: true
    name?: true
    nickname?: true
    gender?: true
    schoolId?: true
    studentId?: true
    profileImageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengerCountAggregateInputType = {
    id?: true
    umsbId?: true
    name?: true
    nickname?: true
    gender?: true
    schoolId?: true
    studentId?: true
    profileImageUrl?: true
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
     * Select which fields to average
    **/
    _avg?: ChallengerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengerSumAggregateInputType
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
    _avg?: ChallengerAvgAggregateInputType
    _sum?: ChallengerSumAggregateInputType
    _min?: ChallengerMinAggregateInputType
    _max?: ChallengerMaxAggregateInputType
  }

  export type ChallengerGroupByOutputType = {
    id: bigint
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    schoolId: bigint
    studentId: string
    profileImageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ChallengerCountAggregateOutputType | null
    _avg: ChallengerAvgAggregateOutputType | null
    _sum: ChallengerSumAggregateOutputType | null
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
    umsbId?: boolean
    name?: boolean
    nickname?: boolean
    gender?: boolean
    schoolId?: boolean
    studentId?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    gisuRoles?: boolean | Challenger$gisuRolesArgs<ExtArgs>
    ledGisuSchools?: boolean | Challenger$ledGisuSchoolsArgs<ExtArgs>
    viceLedGisuSchools?: boolean | Challenger$viceLedGisuSchoolsArgs<ExtArgs>
    projectMembers?: boolean | Challenger$projectMembersArgs<ExtArgs>
    applications?: boolean | Challenger$applicationsArgs<ExtArgs>
    _count?: boolean | ChallengerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenger"]>

  export type ChallengerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    umsbId?: boolean
    name?: boolean
    nickname?: boolean
    gender?: boolean
    schoolId?: boolean
    studentId?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenger"]>

  export type ChallengerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    umsbId?: boolean
    name?: boolean
    nickname?: boolean
    gender?: boolean
    schoolId?: boolean
    studentId?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenger"]>

  export type ChallengerSelectScalar = {
    id?: boolean
    umsbId?: boolean
    name?: boolean
    nickname?: boolean
    gender?: boolean
    schoolId?: boolean
    studentId?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChallengerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "umsbId" | "name" | "nickname" | "gender" | "schoolId" | "studentId" | "profileImageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["challenger"]>
  export type ChallengerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    gisuRoles?: boolean | Challenger$gisuRolesArgs<ExtArgs>
    ledGisuSchools?: boolean | Challenger$ledGisuSchoolsArgs<ExtArgs>
    viceLedGisuSchools?: boolean | Challenger$viceLedGisuSchoolsArgs<ExtArgs>
    projectMembers?: boolean | Challenger$projectMembersArgs<ExtArgs>
    applications?: boolean | Challenger$applicationsArgs<ExtArgs>
    _count?: boolean | ChallengerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallengerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type ChallengerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $ChallengerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenger"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      gisuRoles: Prisma.$ChallengerGisuPayload<ExtArgs>[]
      ledGisuSchools: Prisma.$GisuSchoolPayload<ExtArgs>[]
      viceLedGisuSchools: Prisma.$GisuSchoolPayload<ExtArgs>[]
      projectMembers: Prisma.$ProjectMemberPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      umsbId: number
      name: string
      nickname: string
      gender: $Enums.GenderEnum
      schoolId: bigint
      studentId: string
      profileImageUrl: string | null
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
     * Create many Challengers and returns the data saved in the database.
     * @param {ChallengerCreateManyAndReturnArgs} args - Arguments to create many Challengers.
     * @example
     * // Create many Challengers
     * const challenger = await prisma.challenger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challengers and only return the `id`
     * const challengerWithIdOnly = await prisma.challenger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengerCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Challengers and returns the data updated in the database.
     * @param {ChallengerUpdateManyAndReturnArgs} args - Arguments to update many Challengers.
     * @example
     * // Update many Challengers
     * const challenger = await prisma.challenger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challengers and only return the `id`
     * const challengerWithIdOnly = await prisma.challenger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChallengerUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gisuRoles<T extends Challenger$gisuRolesArgs<ExtArgs> = {}>(args?: Subset<T, Challenger$gisuRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ledGisuSchools<T extends Challenger$ledGisuSchoolsArgs<ExtArgs> = {}>(args?: Subset<T, Challenger$ledGisuSchoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viceLedGisuSchools<T extends Challenger$viceLedGisuSchoolsArgs<ExtArgs> = {}>(args?: Subset<T, Challenger$viceLedGisuSchoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectMembers<T extends Challenger$projectMembersArgs<ExtArgs> = {}>(args?: Subset<T, Challenger$projectMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Challenger$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Challenger$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Challenger", 'BigInt'>
    readonly umsbId: FieldRef<"Challenger", 'Int'>
    readonly name: FieldRef<"Challenger", 'String'>
    readonly nickname: FieldRef<"Challenger", 'String'>
    readonly gender: FieldRef<"Challenger", 'GenderEnum'>
    readonly schoolId: FieldRef<"Challenger", 'BigInt'>
    readonly studentId: FieldRef<"Challenger", 'String'>
    readonly profileImageUrl: FieldRef<"Challenger", 'String'>
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
    skipDuplicates?: boolean
  }

  /**
   * Challenger createManyAndReturn
   */
  export type ChallengerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
    /**
     * The data used to create many Challengers.
     */
    data: ChallengerCreateManyInput | ChallengerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerIncludeCreateManyAndReturn<ExtArgs> | null
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
   * Challenger updateManyAndReturn
   */
  export type ChallengerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenger
     */
    select?: ChallengerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenger
     */
    omit?: ChallengerOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Challenger.gisuRoles
   */
  export type Challenger$gisuRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuInclude<ExtArgs> | null
    where?: ChallengerGisuWhereInput
    orderBy?: ChallengerGisuOrderByWithRelationInput | ChallengerGisuOrderByWithRelationInput[]
    cursor?: ChallengerGisuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengerGisuScalarFieldEnum | ChallengerGisuScalarFieldEnum[]
  }

  /**
   * Challenger.ledGisuSchools
   */
  export type Challenger$ledGisuSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    where?: GisuSchoolWhereInput
    orderBy?: GisuSchoolOrderByWithRelationInput | GisuSchoolOrderByWithRelationInput[]
    cursor?: GisuSchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GisuSchoolScalarFieldEnum | GisuSchoolScalarFieldEnum[]
  }

  /**
   * Challenger.viceLedGisuSchools
   */
  export type Challenger$viceLedGisuSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    where?: GisuSchoolWhereInput
    orderBy?: GisuSchoolOrderByWithRelationInput | GisuSchoolOrderByWithRelationInput[]
    cursor?: GisuSchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GisuSchoolScalarFieldEnum | GisuSchoolScalarFieldEnum[]
  }

  /**
   * Challenger.projectMembers
   */
  export type Challenger$projectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model ChallengerGisu
   */

  export type AggregateChallengerGisu = {
    _count: ChallengerGisuCountAggregateOutputType | null
    _avg: ChallengerGisuAvgAggregateOutputType | null
    _sum: ChallengerGisuSumAggregateOutputType | null
    _min: ChallengerGisuMinAggregateOutputType | null
    _max: ChallengerGisuMaxAggregateOutputType | null
  }

  export type ChallengerGisuAvgAggregateOutputType = {
    id: number | null
    challengerId: number | null
    gisuId: number | null
  }

  export type ChallengerGisuSumAggregateOutputType = {
    id: bigint | null
    challengerId: bigint | null
    gisuId: bigint | null
  }

  export type ChallengerGisuMinAggregateOutputType = {
    id: bigint | null
    challengerId: bigint | null
    gisuId: bigint | null
    isSchoolAdmin: boolean | null
    isChapterAdmin: boolean | null
    isCentralAdmin: boolean | null
    schoolAdminType: string | null
    chapterAdminType: string | null
    centralAdminType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengerGisuMaxAggregateOutputType = {
    id: bigint | null
    challengerId: bigint | null
    gisuId: bigint | null
    isSchoolAdmin: boolean | null
    isChapterAdmin: boolean | null
    isCentralAdmin: boolean | null
    schoolAdminType: string | null
    chapterAdminType: string | null
    centralAdminType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengerGisuCountAggregateOutputType = {
    id: number
    challengerId: number
    gisuId: number
    isSchoolAdmin: number
    isChapterAdmin: number
    isCentralAdmin: number
    schoolAdminType: number
    chapterAdminType: number
    centralAdminType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChallengerGisuAvgAggregateInputType = {
    id?: true
    challengerId?: true
    gisuId?: true
  }

  export type ChallengerGisuSumAggregateInputType = {
    id?: true
    challengerId?: true
    gisuId?: true
  }

  export type ChallengerGisuMinAggregateInputType = {
    id?: true
    challengerId?: true
    gisuId?: true
    isSchoolAdmin?: true
    isChapterAdmin?: true
    isCentralAdmin?: true
    schoolAdminType?: true
    chapterAdminType?: true
    centralAdminType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengerGisuMaxAggregateInputType = {
    id?: true
    challengerId?: true
    gisuId?: true
    isSchoolAdmin?: true
    isChapterAdmin?: true
    isCentralAdmin?: true
    schoolAdminType?: true
    chapterAdminType?: true
    centralAdminType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengerGisuCountAggregateInputType = {
    id?: true
    challengerId?: true
    gisuId?: true
    isSchoolAdmin?: true
    isChapterAdmin?: true
    isCentralAdmin?: true
    schoolAdminType?: true
    chapterAdminType?: true
    centralAdminType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChallengerGisuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengerGisu to aggregate.
     */
    where?: ChallengerGisuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengerGisus to fetch.
     */
    orderBy?: ChallengerGisuOrderByWithRelationInput | ChallengerGisuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengerGisuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengerGisus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengerGisus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengerGisus
    **/
    _count?: true | ChallengerGisuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengerGisuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengerGisuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengerGisuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengerGisuMaxAggregateInputType
  }

  export type GetChallengerGisuAggregateType<T extends ChallengerGisuAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengerGisu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengerGisu[P]>
      : GetScalarType<T[P], AggregateChallengerGisu[P]>
  }




  export type ChallengerGisuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengerGisuWhereInput
    orderBy?: ChallengerGisuOrderByWithAggregationInput | ChallengerGisuOrderByWithAggregationInput[]
    by: ChallengerGisuScalarFieldEnum[] | ChallengerGisuScalarFieldEnum
    having?: ChallengerGisuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengerGisuCountAggregateInputType | true
    _avg?: ChallengerGisuAvgAggregateInputType
    _sum?: ChallengerGisuSumAggregateInputType
    _min?: ChallengerGisuMinAggregateInputType
    _max?: ChallengerGisuMaxAggregateInputType
  }

  export type ChallengerGisuGroupByOutputType = {
    id: bigint
    challengerId: bigint
    gisuId: bigint
    isSchoolAdmin: boolean
    isChapterAdmin: boolean
    isCentralAdmin: boolean
    schoolAdminType: string | null
    chapterAdminType: string | null
    centralAdminType: string | null
    createdAt: Date
    updatedAt: Date
    _count: ChallengerGisuCountAggregateOutputType | null
    _avg: ChallengerGisuAvgAggregateOutputType | null
    _sum: ChallengerGisuSumAggregateOutputType | null
    _min: ChallengerGisuMinAggregateOutputType | null
    _max: ChallengerGisuMaxAggregateOutputType | null
  }

  type GetChallengerGisuGroupByPayload<T extends ChallengerGisuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengerGisuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengerGisuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengerGisuGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengerGisuGroupByOutputType[P]>
        }
      >
    >


  export type ChallengerGisuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengerId?: boolean
    gisuId?: boolean
    isSchoolAdmin?: boolean
    isChapterAdmin?: boolean
    isCentralAdmin?: boolean
    schoolAdminType?: boolean
    chapterAdminType?: boolean
    centralAdminType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challenger?: boolean | ChallengerDefaultArgs<ExtArgs>
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengerGisu"]>

  export type ChallengerGisuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengerId?: boolean
    gisuId?: boolean
    isSchoolAdmin?: boolean
    isChapterAdmin?: boolean
    isCentralAdmin?: boolean
    schoolAdminType?: boolean
    chapterAdminType?: boolean
    centralAdminType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challenger?: boolean | ChallengerDefaultArgs<ExtArgs>
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengerGisu"]>

  export type ChallengerGisuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengerId?: boolean
    gisuId?: boolean
    isSchoolAdmin?: boolean
    isChapterAdmin?: boolean
    isCentralAdmin?: boolean
    schoolAdminType?: boolean
    chapterAdminType?: boolean
    centralAdminType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challenger?: boolean | ChallengerDefaultArgs<ExtArgs>
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengerGisu"]>

  export type ChallengerGisuSelectScalar = {
    id?: boolean
    challengerId?: boolean
    gisuId?: boolean
    isSchoolAdmin?: boolean
    isChapterAdmin?: boolean
    isCentralAdmin?: boolean
    schoolAdminType?: boolean
    chapterAdminType?: boolean
    centralAdminType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChallengerGisuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengerId" | "gisuId" | "isSchoolAdmin" | "isChapterAdmin" | "isCentralAdmin" | "schoolAdminType" | "chapterAdminType" | "centralAdminType" | "createdAt" | "updatedAt", ExtArgs["result"]["challengerGisu"]>
  export type ChallengerGisuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenger?: boolean | ChallengerDefaultArgs<ExtArgs>
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
  }
  export type ChallengerGisuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenger?: boolean | ChallengerDefaultArgs<ExtArgs>
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
  }
  export type ChallengerGisuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenger?: boolean | ChallengerDefaultArgs<ExtArgs>
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
  }

  export type $ChallengerGisuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChallengerGisu"
    objects: {
      challenger: Prisma.$ChallengerPayload<ExtArgs>
      gisu: Prisma.$GisuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      challengerId: bigint
      gisuId: bigint
      isSchoolAdmin: boolean
      isChapterAdmin: boolean
      isCentralAdmin: boolean
      schoolAdminType: string | null
      chapterAdminType: string | null
      centralAdminType: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["challengerGisu"]>
    composites: {}
  }

  type ChallengerGisuGetPayload<S extends boolean | null | undefined | ChallengerGisuDefaultArgs> = $Result.GetResult<Prisma.$ChallengerGisuPayload, S>

  type ChallengerGisuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengerGisuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengerGisuCountAggregateInputType | true
    }

  export interface ChallengerGisuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengerGisu'], meta: { name: 'ChallengerGisu' } }
    /**
     * Find zero or one ChallengerGisu that matches the filter.
     * @param {ChallengerGisuFindUniqueArgs} args - Arguments to find a ChallengerGisu
     * @example
     * // Get one ChallengerGisu
     * const challengerGisu = await prisma.challengerGisu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengerGisuFindUniqueArgs>(args: SelectSubset<T, ChallengerGisuFindUniqueArgs<ExtArgs>>): Prisma__ChallengerGisuClient<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChallengerGisu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengerGisuFindUniqueOrThrowArgs} args - Arguments to find a ChallengerGisu
     * @example
     * // Get one ChallengerGisu
     * const challengerGisu = await prisma.challengerGisu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengerGisuFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengerGisuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengerGisuClient<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengerGisu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerGisuFindFirstArgs} args - Arguments to find a ChallengerGisu
     * @example
     * // Get one ChallengerGisu
     * const challengerGisu = await prisma.challengerGisu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengerGisuFindFirstArgs>(args?: SelectSubset<T, ChallengerGisuFindFirstArgs<ExtArgs>>): Prisma__ChallengerGisuClient<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengerGisu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerGisuFindFirstOrThrowArgs} args - Arguments to find a ChallengerGisu
     * @example
     * // Get one ChallengerGisu
     * const challengerGisu = await prisma.challengerGisu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengerGisuFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengerGisuFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengerGisuClient<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChallengerGisus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerGisuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengerGisus
     * const challengerGisus = await prisma.challengerGisu.findMany()
     * 
     * // Get first 10 ChallengerGisus
     * const challengerGisus = await prisma.challengerGisu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengerGisuWithIdOnly = await prisma.challengerGisu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengerGisuFindManyArgs>(args?: SelectSubset<T, ChallengerGisuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChallengerGisu.
     * @param {ChallengerGisuCreateArgs} args - Arguments to create a ChallengerGisu.
     * @example
     * // Create one ChallengerGisu
     * const ChallengerGisu = await prisma.challengerGisu.create({
     *   data: {
     *     // ... data to create a ChallengerGisu
     *   }
     * })
     * 
     */
    create<T extends ChallengerGisuCreateArgs>(args: SelectSubset<T, ChallengerGisuCreateArgs<ExtArgs>>): Prisma__ChallengerGisuClient<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChallengerGisus.
     * @param {ChallengerGisuCreateManyArgs} args - Arguments to create many ChallengerGisus.
     * @example
     * // Create many ChallengerGisus
     * const challengerGisu = await prisma.challengerGisu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengerGisuCreateManyArgs>(args?: SelectSubset<T, ChallengerGisuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChallengerGisus and returns the data saved in the database.
     * @param {ChallengerGisuCreateManyAndReturnArgs} args - Arguments to create many ChallengerGisus.
     * @example
     * // Create many ChallengerGisus
     * const challengerGisu = await prisma.challengerGisu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChallengerGisus and only return the `id`
     * const challengerGisuWithIdOnly = await prisma.challengerGisu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengerGisuCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengerGisuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChallengerGisu.
     * @param {ChallengerGisuDeleteArgs} args - Arguments to delete one ChallengerGisu.
     * @example
     * // Delete one ChallengerGisu
     * const ChallengerGisu = await prisma.challengerGisu.delete({
     *   where: {
     *     // ... filter to delete one ChallengerGisu
     *   }
     * })
     * 
     */
    delete<T extends ChallengerGisuDeleteArgs>(args: SelectSubset<T, ChallengerGisuDeleteArgs<ExtArgs>>): Prisma__ChallengerGisuClient<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChallengerGisu.
     * @param {ChallengerGisuUpdateArgs} args - Arguments to update one ChallengerGisu.
     * @example
     * // Update one ChallengerGisu
     * const challengerGisu = await prisma.challengerGisu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengerGisuUpdateArgs>(args: SelectSubset<T, ChallengerGisuUpdateArgs<ExtArgs>>): Prisma__ChallengerGisuClient<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChallengerGisus.
     * @param {ChallengerGisuDeleteManyArgs} args - Arguments to filter ChallengerGisus to delete.
     * @example
     * // Delete a few ChallengerGisus
     * const { count } = await prisma.challengerGisu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengerGisuDeleteManyArgs>(args?: SelectSubset<T, ChallengerGisuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengerGisus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerGisuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengerGisus
     * const challengerGisu = await prisma.challengerGisu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengerGisuUpdateManyArgs>(args: SelectSubset<T, ChallengerGisuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengerGisus and returns the data updated in the database.
     * @param {ChallengerGisuUpdateManyAndReturnArgs} args - Arguments to update many ChallengerGisus.
     * @example
     * // Update many ChallengerGisus
     * const challengerGisu = await prisma.challengerGisu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChallengerGisus and only return the `id`
     * const challengerGisuWithIdOnly = await prisma.challengerGisu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChallengerGisuUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengerGisuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChallengerGisu.
     * @param {ChallengerGisuUpsertArgs} args - Arguments to update or create a ChallengerGisu.
     * @example
     * // Update or create a ChallengerGisu
     * const challengerGisu = await prisma.challengerGisu.upsert({
     *   create: {
     *     // ... data to create a ChallengerGisu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengerGisu we want to update
     *   }
     * })
     */
    upsert<T extends ChallengerGisuUpsertArgs>(args: SelectSubset<T, ChallengerGisuUpsertArgs<ExtArgs>>): Prisma__ChallengerGisuClient<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChallengerGisus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerGisuCountArgs} args - Arguments to filter ChallengerGisus to count.
     * @example
     * // Count the number of ChallengerGisus
     * const count = await prisma.challengerGisu.count({
     *   where: {
     *     // ... the filter for the ChallengerGisus we want to count
     *   }
     * })
    **/
    count<T extends ChallengerGisuCountArgs>(
      args?: Subset<T, ChallengerGisuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengerGisuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengerGisu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerGisuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengerGisuAggregateArgs>(args: Subset<T, ChallengerGisuAggregateArgs>): Prisma.PrismaPromise<GetChallengerGisuAggregateType<T>>

    /**
     * Group by ChallengerGisu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengerGisuGroupByArgs} args - Group by arguments.
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
      T extends ChallengerGisuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengerGisuGroupByArgs['orderBy'] }
        : { orderBy?: ChallengerGisuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengerGisuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengerGisuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallengerGisu model
   */
  readonly fields: ChallengerGisuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengerGisu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengerGisuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenger<T extends ChallengerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengerDefaultArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gisu<T extends GisuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GisuDefaultArgs<ExtArgs>>): Prisma__GisuClient<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChallengerGisu model
   */
  interface ChallengerGisuFieldRefs {
    readonly id: FieldRef<"ChallengerGisu", 'BigInt'>
    readonly challengerId: FieldRef<"ChallengerGisu", 'BigInt'>
    readonly gisuId: FieldRef<"ChallengerGisu", 'BigInt'>
    readonly isSchoolAdmin: FieldRef<"ChallengerGisu", 'Boolean'>
    readonly isChapterAdmin: FieldRef<"ChallengerGisu", 'Boolean'>
    readonly isCentralAdmin: FieldRef<"ChallengerGisu", 'Boolean'>
    readonly schoolAdminType: FieldRef<"ChallengerGisu", 'String'>
    readonly chapterAdminType: FieldRef<"ChallengerGisu", 'String'>
    readonly centralAdminType: FieldRef<"ChallengerGisu", 'String'>
    readonly createdAt: FieldRef<"ChallengerGisu", 'DateTime'>
    readonly updatedAt: FieldRef<"ChallengerGisu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChallengerGisu findUnique
   */
  export type ChallengerGisuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuInclude<ExtArgs> | null
    /**
     * Filter, which ChallengerGisu to fetch.
     */
    where: ChallengerGisuWhereUniqueInput
  }

  /**
   * ChallengerGisu findUniqueOrThrow
   */
  export type ChallengerGisuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuInclude<ExtArgs> | null
    /**
     * Filter, which ChallengerGisu to fetch.
     */
    where: ChallengerGisuWhereUniqueInput
  }

  /**
   * ChallengerGisu findFirst
   */
  export type ChallengerGisuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuInclude<ExtArgs> | null
    /**
     * Filter, which ChallengerGisu to fetch.
     */
    where?: ChallengerGisuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengerGisus to fetch.
     */
    orderBy?: ChallengerGisuOrderByWithRelationInput | ChallengerGisuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengerGisus.
     */
    cursor?: ChallengerGisuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengerGisus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengerGisus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengerGisus.
     */
    distinct?: ChallengerGisuScalarFieldEnum | ChallengerGisuScalarFieldEnum[]
  }

  /**
   * ChallengerGisu findFirstOrThrow
   */
  export type ChallengerGisuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuInclude<ExtArgs> | null
    /**
     * Filter, which ChallengerGisu to fetch.
     */
    where?: ChallengerGisuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengerGisus to fetch.
     */
    orderBy?: ChallengerGisuOrderByWithRelationInput | ChallengerGisuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengerGisus.
     */
    cursor?: ChallengerGisuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengerGisus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengerGisus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengerGisus.
     */
    distinct?: ChallengerGisuScalarFieldEnum | ChallengerGisuScalarFieldEnum[]
  }

  /**
   * ChallengerGisu findMany
   */
  export type ChallengerGisuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuInclude<ExtArgs> | null
    /**
     * Filter, which ChallengerGisus to fetch.
     */
    where?: ChallengerGisuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengerGisus to fetch.
     */
    orderBy?: ChallengerGisuOrderByWithRelationInput | ChallengerGisuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengerGisus.
     */
    cursor?: ChallengerGisuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengerGisus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengerGisus.
     */
    skip?: number
    distinct?: ChallengerGisuScalarFieldEnum | ChallengerGisuScalarFieldEnum[]
  }

  /**
   * ChallengerGisu create
   */
  export type ChallengerGisuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuInclude<ExtArgs> | null
    /**
     * The data needed to create a ChallengerGisu.
     */
    data: XOR<ChallengerGisuCreateInput, ChallengerGisuUncheckedCreateInput>
  }

  /**
   * ChallengerGisu createMany
   */
  export type ChallengerGisuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengerGisus.
     */
    data: ChallengerGisuCreateManyInput | ChallengerGisuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChallengerGisu createManyAndReturn
   */
  export type ChallengerGisuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * The data used to create many ChallengerGisus.
     */
    data: ChallengerGisuCreateManyInput | ChallengerGisuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengerGisu update
   */
  export type ChallengerGisuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuInclude<ExtArgs> | null
    /**
     * The data needed to update a ChallengerGisu.
     */
    data: XOR<ChallengerGisuUpdateInput, ChallengerGisuUncheckedUpdateInput>
    /**
     * Choose, which ChallengerGisu to update.
     */
    where: ChallengerGisuWhereUniqueInput
  }

  /**
   * ChallengerGisu updateMany
   */
  export type ChallengerGisuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengerGisus.
     */
    data: XOR<ChallengerGisuUpdateManyMutationInput, ChallengerGisuUncheckedUpdateManyInput>
    /**
     * Filter which ChallengerGisus to update
     */
    where?: ChallengerGisuWhereInput
    /**
     * Limit how many ChallengerGisus to update.
     */
    limit?: number
  }

  /**
   * ChallengerGisu updateManyAndReturn
   */
  export type ChallengerGisuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * The data used to update ChallengerGisus.
     */
    data: XOR<ChallengerGisuUpdateManyMutationInput, ChallengerGisuUncheckedUpdateManyInput>
    /**
     * Filter which ChallengerGisus to update
     */
    where?: ChallengerGisuWhereInput
    /**
     * Limit how many ChallengerGisus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengerGisu upsert
   */
  export type ChallengerGisuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuInclude<ExtArgs> | null
    /**
     * The filter to search for the ChallengerGisu to update in case it exists.
     */
    where: ChallengerGisuWhereUniqueInput
    /**
     * In case the ChallengerGisu found by the `where` argument doesn't exist, create a new ChallengerGisu with this data.
     */
    create: XOR<ChallengerGisuCreateInput, ChallengerGisuUncheckedCreateInput>
    /**
     * In case the ChallengerGisu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengerGisuUpdateInput, ChallengerGisuUncheckedUpdateInput>
  }

  /**
   * ChallengerGisu delete
   */
  export type ChallengerGisuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuInclude<ExtArgs> | null
    /**
     * Filter which ChallengerGisu to delete.
     */
    where: ChallengerGisuWhereUniqueInput
  }

  /**
   * ChallengerGisu deleteMany
   */
  export type ChallengerGisuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengerGisus to delete
     */
    where?: ChallengerGisuWhereInput
    /**
     * Limit how many ChallengerGisus to delete.
     */
    limit?: number
  }

  /**
   * ChallengerGisu without action
   */
  export type ChallengerGisuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuInclude<ExtArgs> | null
  }


  /**
   * Model Gisu
   */

  export type AggregateGisu = {
    _count: GisuCountAggregateOutputType | null
    _avg: GisuAvgAggregateOutputType | null
    _sum: GisuSumAggregateOutputType | null
    _min: GisuMinAggregateOutputType | null
    _max: GisuMaxAggregateOutputType | null
  }

  export type GisuAvgAggregateOutputType = {
    id: number | null
  }

  export type GisuSumAggregateOutputType = {
    id: bigint | null
  }

  export type GisuMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GisuMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GisuCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GisuAvgAggregateInputType = {
    id?: true
  }

  export type GisuSumAggregateInputType = {
    id?: true
  }

  export type GisuMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GisuMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GisuCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GisuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gisu to aggregate.
     */
    where?: GisuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gisus to fetch.
     */
    orderBy?: GisuOrderByWithRelationInput | GisuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GisuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gisus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gisus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gisus
    **/
    _count?: true | GisuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GisuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GisuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GisuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GisuMaxAggregateInputType
  }

  export type GetGisuAggregateType<T extends GisuAggregateArgs> = {
        [P in keyof T & keyof AggregateGisu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGisu[P]>
      : GetScalarType<T[P], AggregateGisu[P]>
  }




  export type GisuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GisuWhereInput
    orderBy?: GisuOrderByWithAggregationInput | GisuOrderByWithAggregationInput[]
    by: GisuScalarFieldEnum[] | GisuScalarFieldEnum
    having?: GisuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GisuCountAggregateInputType | true
    _avg?: GisuAvgAggregateInputType
    _sum?: GisuSumAggregateInputType
    _min?: GisuMinAggregateInputType
    _max?: GisuMaxAggregateInputType
  }

  export type GisuGroupByOutputType = {
    id: bigint
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: GisuCountAggregateOutputType | null
    _avg: GisuAvgAggregateOutputType | null
    _sum: GisuSumAggregateOutputType | null
    _min: GisuMinAggregateOutputType | null
    _max: GisuMaxAggregateOutputType | null
  }

  type GetGisuGroupByPayload<T extends GisuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GisuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GisuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GisuGroupByOutputType[P]>
            : GetScalarType<T[P], GisuGroupByOutputType[P]>
        }
      >
    >


  export type GisuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gisuSchools?: boolean | Gisu$gisuSchoolsArgs<ExtArgs>
    chapters?: boolean | Gisu$chaptersArgs<ExtArgs>
    challengerGisus?: boolean | Gisu$challengerGisusArgs<ExtArgs>
    _count?: boolean | GisuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gisu"]>

  export type GisuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gisu"]>

  export type GisuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gisu"]>

  export type GisuSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GisuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["gisu"]>
  export type GisuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gisuSchools?: boolean | Gisu$gisuSchoolsArgs<ExtArgs>
    chapters?: boolean | Gisu$chaptersArgs<ExtArgs>
    challengerGisus?: boolean | Gisu$challengerGisusArgs<ExtArgs>
    _count?: boolean | GisuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GisuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GisuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GisuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gisu"
    objects: {
      gisuSchools: Prisma.$GisuSchoolPayload<ExtArgs>[]
      chapters: Prisma.$ChapterPayload<ExtArgs>[]
      challengerGisus: Prisma.$ChallengerGisuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gisu"]>
    composites: {}
  }

  type GisuGetPayload<S extends boolean | null | undefined | GisuDefaultArgs> = $Result.GetResult<Prisma.$GisuPayload, S>

  type GisuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GisuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GisuCountAggregateInputType | true
    }

  export interface GisuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gisu'], meta: { name: 'Gisu' } }
    /**
     * Find zero or one Gisu that matches the filter.
     * @param {GisuFindUniqueArgs} args - Arguments to find a Gisu
     * @example
     * // Get one Gisu
     * const gisu = await prisma.gisu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GisuFindUniqueArgs>(args: SelectSubset<T, GisuFindUniqueArgs<ExtArgs>>): Prisma__GisuClient<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gisu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GisuFindUniqueOrThrowArgs} args - Arguments to find a Gisu
     * @example
     * // Get one Gisu
     * const gisu = await prisma.gisu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GisuFindUniqueOrThrowArgs>(args: SelectSubset<T, GisuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GisuClient<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gisu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuFindFirstArgs} args - Arguments to find a Gisu
     * @example
     * // Get one Gisu
     * const gisu = await prisma.gisu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GisuFindFirstArgs>(args?: SelectSubset<T, GisuFindFirstArgs<ExtArgs>>): Prisma__GisuClient<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gisu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuFindFirstOrThrowArgs} args - Arguments to find a Gisu
     * @example
     * // Get one Gisu
     * const gisu = await prisma.gisu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GisuFindFirstOrThrowArgs>(args?: SelectSubset<T, GisuFindFirstOrThrowArgs<ExtArgs>>): Prisma__GisuClient<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gisus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gisus
     * const gisus = await prisma.gisu.findMany()
     * 
     * // Get first 10 Gisus
     * const gisus = await prisma.gisu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gisuWithIdOnly = await prisma.gisu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GisuFindManyArgs>(args?: SelectSubset<T, GisuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gisu.
     * @param {GisuCreateArgs} args - Arguments to create a Gisu.
     * @example
     * // Create one Gisu
     * const Gisu = await prisma.gisu.create({
     *   data: {
     *     // ... data to create a Gisu
     *   }
     * })
     * 
     */
    create<T extends GisuCreateArgs>(args: SelectSubset<T, GisuCreateArgs<ExtArgs>>): Prisma__GisuClient<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gisus.
     * @param {GisuCreateManyArgs} args - Arguments to create many Gisus.
     * @example
     * // Create many Gisus
     * const gisu = await prisma.gisu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GisuCreateManyArgs>(args?: SelectSubset<T, GisuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gisus and returns the data saved in the database.
     * @param {GisuCreateManyAndReturnArgs} args - Arguments to create many Gisus.
     * @example
     * // Create many Gisus
     * const gisu = await prisma.gisu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gisus and only return the `id`
     * const gisuWithIdOnly = await prisma.gisu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GisuCreateManyAndReturnArgs>(args?: SelectSubset<T, GisuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gisu.
     * @param {GisuDeleteArgs} args - Arguments to delete one Gisu.
     * @example
     * // Delete one Gisu
     * const Gisu = await prisma.gisu.delete({
     *   where: {
     *     // ... filter to delete one Gisu
     *   }
     * })
     * 
     */
    delete<T extends GisuDeleteArgs>(args: SelectSubset<T, GisuDeleteArgs<ExtArgs>>): Prisma__GisuClient<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gisu.
     * @param {GisuUpdateArgs} args - Arguments to update one Gisu.
     * @example
     * // Update one Gisu
     * const gisu = await prisma.gisu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GisuUpdateArgs>(args: SelectSubset<T, GisuUpdateArgs<ExtArgs>>): Prisma__GisuClient<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gisus.
     * @param {GisuDeleteManyArgs} args - Arguments to filter Gisus to delete.
     * @example
     * // Delete a few Gisus
     * const { count } = await prisma.gisu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GisuDeleteManyArgs>(args?: SelectSubset<T, GisuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gisus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gisus
     * const gisu = await prisma.gisu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GisuUpdateManyArgs>(args: SelectSubset<T, GisuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gisus and returns the data updated in the database.
     * @param {GisuUpdateManyAndReturnArgs} args - Arguments to update many Gisus.
     * @example
     * // Update many Gisus
     * const gisu = await prisma.gisu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gisus and only return the `id`
     * const gisuWithIdOnly = await prisma.gisu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GisuUpdateManyAndReturnArgs>(args: SelectSubset<T, GisuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gisu.
     * @param {GisuUpsertArgs} args - Arguments to update or create a Gisu.
     * @example
     * // Update or create a Gisu
     * const gisu = await prisma.gisu.upsert({
     *   create: {
     *     // ... data to create a Gisu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gisu we want to update
     *   }
     * })
     */
    upsert<T extends GisuUpsertArgs>(args: SelectSubset<T, GisuUpsertArgs<ExtArgs>>): Prisma__GisuClient<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gisus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuCountArgs} args - Arguments to filter Gisus to count.
     * @example
     * // Count the number of Gisus
     * const count = await prisma.gisu.count({
     *   where: {
     *     // ... the filter for the Gisus we want to count
     *   }
     * })
    **/
    count<T extends GisuCountArgs>(
      args?: Subset<T, GisuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GisuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gisu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GisuAggregateArgs>(args: Subset<T, GisuAggregateArgs>): Prisma.PrismaPromise<GetGisuAggregateType<T>>

    /**
     * Group by Gisu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuGroupByArgs} args - Group by arguments.
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
      T extends GisuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GisuGroupByArgs['orderBy'] }
        : { orderBy?: GisuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GisuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGisuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gisu model
   */
  readonly fields: GisuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gisu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GisuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gisuSchools<T extends Gisu$gisuSchoolsArgs<ExtArgs> = {}>(args?: Subset<T, Gisu$gisuSchoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chapters<T extends Gisu$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, Gisu$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    challengerGisus<T extends Gisu$challengerGisusArgs<ExtArgs> = {}>(args?: Subset<T, Gisu$challengerGisusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengerGisuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Gisu model
   */
  interface GisuFieldRefs {
    readonly id: FieldRef<"Gisu", 'BigInt'>
    readonly name: FieldRef<"Gisu", 'String'>
    readonly description: FieldRef<"Gisu", 'String'>
    readonly createdAt: FieldRef<"Gisu", 'DateTime'>
    readonly updatedAt: FieldRef<"Gisu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gisu findUnique
   */
  export type GisuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gisu
     */
    select?: GisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gisu
     */
    omit?: GisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuInclude<ExtArgs> | null
    /**
     * Filter, which Gisu to fetch.
     */
    where: GisuWhereUniqueInput
  }

  /**
   * Gisu findUniqueOrThrow
   */
  export type GisuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gisu
     */
    select?: GisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gisu
     */
    omit?: GisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuInclude<ExtArgs> | null
    /**
     * Filter, which Gisu to fetch.
     */
    where: GisuWhereUniqueInput
  }

  /**
   * Gisu findFirst
   */
  export type GisuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gisu
     */
    select?: GisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gisu
     */
    omit?: GisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuInclude<ExtArgs> | null
    /**
     * Filter, which Gisu to fetch.
     */
    where?: GisuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gisus to fetch.
     */
    orderBy?: GisuOrderByWithRelationInput | GisuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gisus.
     */
    cursor?: GisuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gisus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gisus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gisus.
     */
    distinct?: GisuScalarFieldEnum | GisuScalarFieldEnum[]
  }

  /**
   * Gisu findFirstOrThrow
   */
  export type GisuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gisu
     */
    select?: GisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gisu
     */
    omit?: GisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuInclude<ExtArgs> | null
    /**
     * Filter, which Gisu to fetch.
     */
    where?: GisuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gisus to fetch.
     */
    orderBy?: GisuOrderByWithRelationInput | GisuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gisus.
     */
    cursor?: GisuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gisus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gisus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gisus.
     */
    distinct?: GisuScalarFieldEnum | GisuScalarFieldEnum[]
  }

  /**
   * Gisu findMany
   */
  export type GisuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gisu
     */
    select?: GisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gisu
     */
    omit?: GisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuInclude<ExtArgs> | null
    /**
     * Filter, which Gisus to fetch.
     */
    where?: GisuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gisus to fetch.
     */
    orderBy?: GisuOrderByWithRelationInput | GisuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gisus.
     */
    cursor?: GisuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gisus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gisus.
     */
    skip?: number
    distinct?: GisuScalarFieldEnum | GisuScalarFieldEnum[]
  }

  /**
   * Gisu create
   */
  export type GisuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gisu
     */
    select?: GisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gisu
     */
    omit?: GisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuInclude<ExtArgs> | null
    /**
     * The data needed to create a Gisu.
     */
    data: XOR<GisuCreateInput, GisuUncheckedCreateInput>
  }

  /**
   * Gisu createMany
   */
  export type GisuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gisus.
     */
    data: GisuCreateManyInput | GisuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gisu createManyAndReturn
   */
  export type GisuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gisu
     */
    select?: GisuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gisu
     */
    omit?: GisuOmit<ExtArgs> | null
    /**
     * The data used to create many Gisus.
     */
    data: GisuCreateManyInput | GisuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gisu update
   */
  export type GisuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gisu
     */
    select?: GisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gisu
     */
    omit?: GisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuInclude<ExtArgs> | null
    /**
     * The data needed to update a Gisu.
     */
    data: XOR<GisuUpdateInput, GisuUncheckedUpdateInput>
    /**
     * Choose, which Gisu to update.
     */
    where: GisuWhereUniqueInput
  }

  /**
   * Gisu updateMany
   */
  export type GisuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gisus.
     */
    data: XOR<GisuUpdateManyMutationInput, GisuUncheckedUpdateManyInput>
    /**
     * Filter which Gisus to update
     */
    where?: GisuWhereInput
    /**
     * Limit how many Gisus to update.
     */
    limit?: number
  }

  /**
   * Gisu updateManyAndReturn
   */
  export type GisuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gisu
     */
    select?: GisuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gisu
     */
    omit?: GisuOmit<ExtArgs> | null
    /**
     * The data used to update Gisus.
     */
    data: XOR<GisuUpdateManyMutationInput, GisuUncheckedUpdateManyInput>
    /**
     * Filter which Gisus to update
     */
    where?: GisuWhereInput
    /**
     * Limit how many Gisus to update.
     */
    limit?: number
  }

  /**
   * Gisu upsert
   */
  export type GisuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gisu
     */
    select?: GisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gisu
     */
    omit?: GisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuInclude<ExtArgs> | null
    /**
     * The filter to search for the Gisu to update in case it exists.
     */
    where: GisuWhereUniqueInput
    /**
     * In case the Gisu found by the `where` argument doesn't exist, create a new Gisu with this data.
     */
    create: XOR<GisuCreateInput, GisuUncheckedCreateInput>
    /**
     * In case the Gisu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GisuUpdateInput, GisuUncheckedUpdateInput>
  }

  /**
   * Gisu delete
   */
  export type GisuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gisu
     */
    select?: GisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gisu
     */
    omit?: GisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuInclude<ExtArgs> | null
    /**
     * Filter which Gisu to delete.
     */
    where: GisuWhereUniqueInput
  }

  /**
   * Gisu deleteMany
   */
  export type GisuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gisus to delete
     */
    where?: GisuWhereInput
    /**
     * Limit how many Gisus to delete.
     */
    limit?: number
  }

  /**
   * Gisu.gisuSchools
   */
  export type Gisu$gisuSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    where?: GisuSchoolWhereInput
    orderBy?: GisuSchoolOrderByWithRelationInput | GisuSchoolOrderByWithRelationInput[]
    cursor?: GisuSchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GisuSchoolScalarFieldEnum | GisuSchoolScalarFieldEnum[]
  }

  /**
   * Gisu.chapters
   */
  export type Gisu$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Gisu.challengerGisus
   */
  export type Gisu$challengerGisusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengerGisu
     */
    select?: ChallengerGisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengerGisu
     */
    omit?: ChallengerGisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengerGisuInclude<ExtArgs> | null
    where?: ChallengerGisuWhereInput
    orderBy?: ChallengerGisuOrderByWithRelationInput | ChallengerGisuOrderByWithRelationInput[]
    cursor?: ChallengerGisuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengerGisuScalarFieldEnum | ChallengerGisuScalarFieldEnum[]
  }

  /**
   * Gisu without action
   */
  export type GisuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gisu
     */
    select?: GisuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gisu
     */
    omit?: GisuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuInclude<ExtArgs> | null
  }


  /**
   * Model GisuSchool
   */

  export type AggregateGisuSchool = {
    _count: GisuSchoolCountAggregateOutputType | null
    _avg: GisuSchoolAvgAggregateOutputType | null
    _sum: GisuSchoolSumAggregateOutputType | null
    _min: GisuSchoolMinAggregateOutputType | null
    _max: GisuSchoolMaxAggregateOutputType | null
  }

  export type GisuSchoolAvgAggregateOutputType = {
    id: number | null
    gisuId: number | null
    schoolId: number | null
    leaderId: number | null
    viceLeaderId: number | null
  }

  export type GisuSchoolSumAggregateOutputType = {
    id: bigint | null
    gisuId: bigint | null
    schoolId: bigint | null
    leaderId: bigint | null
    viceLeaderId: bigint | null
  }

  export type GisuSchoolMinAggregateOutputType = {
    id: bigint | null
    gisuId: bigint | null
    schoolId: bigint | null
    leaderId: bigint | null
    viceLeaderId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GisuSchoolMaxAggregateOutputType = {
    id: bigint | null
    gisuId: bigint | null
    schoolId: bigint | null
    leaderId: bigint | null
    viceLeaderId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GisuSchoolCountAggregateOutputType = {
    id: number
    gisuId: number
    schoolId: number
    leaderId: number
    viceLeaderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GisuSchoolAvgAggregateInputType = {
    id?: true
    gisuId?: true
    schoolId?: true
    leaderId?: true
    viceLeaderId?: true
  }

  export type GisuSchoolSumAggregateInputType = {
    id?: true
    gisuId?: true
    schoolId?: true
    leaderId?: true
    viceLeaderId?: true
  }

  export type GisuSchoolMinAggregateInputType = {
    id?: true
    gisuId?: true
    schoolId?: true
    leaderId?: true
    viceLeaderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GisuSchoolMaxAggregateInputType = {
    id?: true
    gisuId?: true
    schoolId?: true
    leaderId?: true
    viceLeaderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GisuSchoolCountAggregateInputType = {
    id?: true
    gisuId?: true
    schoolId?: true
    leaderId?: true
    viceLeaderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GisuSchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GisuSchool to aggregate.
     */
    where?: GisuSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GisuSchools to fetch.
     */
    orderBy?: GisuSchoolOrderByWithRelationInput | GisuSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GisuSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GisuSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GisuSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GisuSchools
    **/
    _count?: true | GisuSchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GisuSchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GisuSchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GisuSchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GisuSchoolMaxAggregateInputType
  }

  export type GetGisuSchoolAggregateType<T extends GisuSchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateGisuSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGisuSchool[P]>
      : GetScalarType<T[P], AggregateGisuSchool[P]>
  }




  export type GisuSchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GisuSchoolWhereInput
    orderBy?: GisuSchoolOrderByWithAggregationInput | GisuSchoolOrderByWithAggregationInput[]
    by: GisuSchoolScalarFieldEnum[] | GisuSchoolScalarFieldEnum
    having?: GisuSchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GisuSchoolCountAggregateInputType | true
    _avg?: GisuSchoolAvgAggregateInputType
    _sum?: GisuSchoolSumAggregateInputType
    _min?: GisuSchoolMinAggregateInputType
    _max?: GisuSchoolMaxAggregateInputType
  }

  export type GisuSchoolGroupByOutputType = {
    id: bigint
    gisuId: bigint
    schoolId: bigint
    leaderId: bigint
    viceLeaderId: bigint | null
    createdAt: Date
    updatedAt: Date
    _count: GisuSchoolCountAggregateOutputType | null
    _avg: GisuSchoolAvgAggregateOutputType | null
    _sum: GisuSchoolSumAggregateOutputType | null
    _min: GisuSchoolMinAggregateOutputType | null
    _max: GisuSchoolMaxAggregateOutputType | null
  }

  type GetGisuSchoolGroupByPayload<T extends GisuSchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GisuSchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GisuSchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GisuSchoolGroupByOutputType[P]>
            : GetScalarType<T[P], GisuSchoolGroupByOutputType[P]>
        }
      >
    >


  export type GisuSchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gisuId?: boolean
    schoolId?: boolean
    leaderId?: boolean
    viceLeaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    leader?: boolean | ChallengerDefaultArgs<ExtArgs>
    viceLeader?: boolean | GisuSchool$viceLeaderArgs<ExtArgs>
  }, ExtArgs["result"]["gisuSchool"]>

  export type GisuSchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gisuId?: boolean
    schoolId?: boolean
    leaderId?: boolean
    viceLeaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    leader?: boolean | ChallengerDefaultArgs<ExtArgs>
    viceLeader?: boolean | GisuSchool$viceLeaderArgs<ExtArgs>
  }, ExtArgs["result"]["gisuSchool"]>

  export type GisuSchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gisuId?: boolean
    schoolId?: boolean
    leaderId?: boolean
    viceLeaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    leader?: boolean | ChallengerDefaultArgs<ExtArgs>
    viceLeader?: boolean | GisuSchool$viceLeaderArgs<ExtArgs>
  }, ExtArgs["result"]["gisuSchool"]>

  export type GisuSchoolSelectScalar = {
    id?: boolean
    gisuId?: boolean
    schoolId?: boolean
    leaderId?: boolean
    viceLeaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GisuSchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gisuId" | "schoolId" | "leaderId" | "viceLeaderId" | "createdAt" | "updatedAt", ExtArgs["result"]["gisuSchool"]>
  export type GisuSchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    leader?: boolean | ChallengerDefaultArgs<ExtArgs>
    viceLeader?: boolean | GisuSchool$viceLeaderArgs<ExtArgs>
  }
  export type GisuSchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    leader?: boolean | ChallengerDefaultArgs<ExtArgs>
    viceLeader?: boolean | GisuSchool$viceLeaderArgs<ExtArgs>
  }
  export type GisuSchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    leader?: boolean | ChallengerDefaultArgs<ExtArgs>
    viceLeader?: boolean | GisuSchool$viceLeaderArgs<ExtArgs>
  }

  export type $GisuSchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GisuSchool"
    objects: {
      gisu: Prisma.$GisuPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs>
      leader: Prisma.$ChallengerPayload<ExtArgs>
      viceLeader: Prisma.$ChallengerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      gisuId: bigint
      schoolId: bigint
      leaderId: bigint
      viceLeaderId: bigint | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gisuSchool"]>
    composites: {}
  }

  type GisuSchoolGetPayload<S extends boolean | null | undefined | GisuSchoolDefaultArgs> = $Result.GetResult<Prisma.$GisuSchoolPayload, S>

  type GisuSchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GisuSchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GisuSchoolCountAggregateInputType | true
    }

  export interface GisuSchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GisuSchool'], meta: { name: 'GisuSchool' } }
    /**
     * Find zero or one GisuSchool that matches the filter.
     * @param {GisuSchoolFindUniqueArgs} args - Arguments to find a GisuSchool
     * @example
     * // Get one GisuSchool
     * const gisuSchool = await prisma.gisuSchool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GisuSchoolFindUniqueArgs>(args: SelectSubset<T, GisuSchoolFindUniqueArgs<ExtArgs>>): Prisma__GisuSchoolClient<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GisuSchool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GisuSchoolFindUniqueOrThrowArgs} args - Arguments to find a GisuSchool
     * @example
     * // Get one GisuSchool
     * const gisuSchool = await prisma.gisuSchool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GisuSchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, GisuSchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GisuSchoolClient<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GisuSchool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuSchoolFindFirstArgs} args - Arguments to find a GisuSchool
     * @example
     * // Get one GisuSchool
     * const gisuSchool = await prisma.gisuSchool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GisuSchoolFindFirstArgs>(args?: SelectSubset<T, GisuSchoolFindFirstArgs<ExtArgs>>): Prisma__GisuSchoolClient<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GisuSchool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuSchoolFindFirstOrThrowArgs} args - Arguments to find a GisuSchool
     * @example
     * // Get one GisuSchool
     * const gisuSchool = await prisma.gisuSchool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GisuSchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, GisuSchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__GisuSchoolClient<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GisuSchools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuSchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GisuSchools
     * const gisuSchools = await prisma.gisuSchool.findMany()
     * 
     * // Get first 10 GisuSchools
     * const gisuSchools = await prisma.gisuSchool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gisuSchoolWithIdOnly = await prisma.gisuSchool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GisuSchoolFindManyArgs>(args?: SelectSubset<T, GisuSchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GisuSchool.
     * @param {GisuSchoolCreateArgs} args - Arguments to create a GisuSchool.
     * @example
     * // Create one GisuSchool
     * const GisuSchool = await prisma.gisuSchool.create({
     *   data: {
     *     // ... data to create a GisuSchool
     *   }
     * })
     * 
     */
    create<T extends GisuSchoolCreateArgs>(args: SelectSubset<T, GisuSchoolCreateArgs<ExtArgs>>): Prisma__GisuSchoolClient<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GisuSchools.
     * @param {GisuSchoolCreateManyArgs} args - Arguments to create many GisuSchools.
     * @example
     * // Create many GisuSchools
     * const gisuSchool = await prisma.gisuSchool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GisuSchoolCreateManyArgs>(args?: SelectSubset<T, GisuSchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GisuSchools and returns the data saved in the database.
     * @param {GisuSchoolCreateManyAndReturnArgs} args - Arguments to create many GisuSchools.
     * @example
     * // Create many GisuSchools
     * const gisuSchool = await prisma.gisuSchool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GisuSchools and only return the `id`
     * const gisuSchoolWithIdOnly = await prisma.gisuSchool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GisuSchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, GisuSchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GisuSchool.
     * @param {GisuSchoolDeleteArgs} args - Arguments to delete one GisuSchool.
     * @example
     * // Delete one GisuSchool
     * const GisuSchool = await prisma.gisuSchool.delete({
     *   where: {
     *     // ... filter to delete one GisuSchool
     *   }
     * })
     * 
     */
    delete<T extends GisuSchoolDeleteArgs>(args: SelectSubset<T, GisuSchoolDeleteArgs<ExtArgs>>): Prisma__GisuSchoolClient<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GisuSchool.
     * @param {GisuSchoolUpdateArgs} args - Arguments to update one GisuSchool.
     * @example
     * // Update one GisuSchool
     * const gisuSchool = await prisma.gisuSchool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GisuSchoolUpdateArgs>(args: SelectSubset<T, GisuSchoolUpdateArgs<ExtArgs>>): Prisma__GisuSchoolClient<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GisuSchools.
     * @param {GisuSchoolDeleteManyArgs} args - Arguments to filter GisuSchools to delete.
     * @example
     * // Delete a few GisuSchools
     * const { count } = await prisma.gisuSchool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GisuSchoolDeleteManyArgs>(args?: SelectSubset<T, GisuSchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GisuSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuSchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GisuSchools
     * const gisuSchool = await prisma.gisuSchool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GisuSchoolUpdateManyArgs>(args: SelectSubset<T, GisuSchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GisuSchools and returns the data updated in the database.
     * @param {GisuSchoolUpdateManyAndReturnArgs} args - Arguments to update many GisuSchools.
     * @example
     * // Update many GisuSchools
     * const gisuSchool = await prisma.gisuSchool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GisuSchools and only return the `id`
     * const gisuSchoolWithIdOnly = await prisma.gisuSchool.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GisuSchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, GisuSchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GisuSchool.
     * @param {GisuSchoolUpsertArgs} args - Arguments to update or create a GisuSchool.
     * @example
     * // Update or create a GisuSchool
     * const gisuSchool = await prisma.gisuSchool.upsert({
     *   create: {
     *     // ... data to create a GisuSchool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GisuSchool we want to update
     *   }
     * })
     */
    upsert<T extends GisuSchoolUpsertArgs>(args: SelectSubset<T, GisuSchoolUpsertArgs<ExtArgs>>): Prisma__GisuSchoolClient<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GisuSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuSchoolCountArgs} args - Arguments to filter GisuSchools to count.
     * @example
     * // Count the number of GisuSchools
     * const count = await prisma.gisuSchool.count({
     *   where: {
     *     // ... the filter for the GisuSchools we want to count
     *   }
     * })
    **/
    count<T extends GisuSchoolCountArgs>(
      args?: Subset<T, GisuSchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GisuSchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GisuSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuSchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GisuSchoolAggregateArgs>(args: Subset<T, GisuSchoolAggregateArgs>): Prisma.PrismaPromise<GetGisuSchoolAggregateType<T>>

    /**
     * Group by GisuSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GisuSchoolGroupByArgs} args - Group by arguments.
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
      T extends GisuSchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GisuSchoolGroupByArgs['orderBy'] }
        : { orderBy?: GisuSchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GisuSchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGisuSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GisuSchool model
   */
  readonly fields: GisuSchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GisuSchool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GisuSchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gisu<T extends GisuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GisuDefaultArgs<ExtArgs>>): Prisma__GisuClient<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leader<T extends ChallengerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengerDefaultArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viceLeader<T extends GisuSchool$viceLeaderArgs<ExtArgs> = {}>(args?: Subset<T, GisuSchool$viceLeaderArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GisuSchool model
   */
  interface GisuSchoolFieldRefs {
    readonly id: FieldRef<"GisuSchool", 'BigInt'>
    readonly gisuId: FieldRef<"GisuSchool", 'BigInt'>
    readonly schoolId: FieldRef<"GisuSchool", 'BigInt'>
    readonly leaderId: FieldRef<"GisuSchool", 'BigInt'>
    readonly viceLeaderId: FieldRef<"GisuSchool", 'BigInt'>
    readonly createdAt: FieldRef<"GisuSchool", 'DateTime'>
    readonly updatedAt: FieldRef<"GisuSchool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GisuSchool findUnique
   */
  export type GisuSchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    /**
     * Filter, which GisuSchool to fetch.
     */
    where: GisuSchoolWhereUniqueInput
  }

  /**
   * GisuSchool findUniqueOrThrow
   */
  export type GisuSchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    /**
     * Filter, which GisuSchool to fetch.
     */
    where: GisuSchoolWhereUniqueInput
  }

  /**
   * GisuSchool findFirst
   */
  export type GisuSchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    /**
     * Filter, which GisuSchool to fetch.
     */
    where?: GisuSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GisuSchools to fetch.
     */
    orderBy?: GisuSchoolOrderByWithRelationInput | GisuSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GisuSchools.
     */
    cursor?: GisuSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GisuSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GisuSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GisuSchools.
     */
    distinct?: GisuSchoolScalarFieldEnum | GisuSchoolScalarFieldEnum[]
  }

  /**
   * GisuSchool findFirstOrThrow
   */
  export type GisuSchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    /**
     * Filter, which GisuSchool to fetch.
     */
    where?: GisuSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GisuSchools to fetch.
     */
    orderBy?: GisuSchoolOrderByWithRelationInput | GisuSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GisuSchools.
     */
    cursor?: GisuSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GisuSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GisuSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GisuSchools.
     */
    distinct?: GisuSchoolScalarFieldEnum | GisuSchoolScalarFieldEnum[]
  }

  /**
   * GisuSchool findMany
   */
  export type GisuSchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    /**
     * Filter, which GisuSchools to fetch.
     */
    where?: GisuSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GisuSchools to fetch.
     */
    orderBy?: GisuSchoolOrderByWithRelationInput | GisuSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GisuSchools.
     */
    cursor?: GisuSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GisuSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GisuSchools.
     */
    skip?: number
    distinct?: GisuSchoolScalarFieldEnum | GisuSchoolScalarFieldEnum[]
  }

  /**
   * GisuSchool create
   */
  export type GisuSchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a GisuSchool.
     */
    data: XOR<GisuSchoolCreateInput, GisuSchoolUncheckedCreateInput>
  }

  /**
   * GisuSchool createMany
   */
  export type GisuSchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GisuSchools.
     */
    data: GisuSchoolCreateManyInput | GisuSchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GisuSchool createManyAndReturn
   */
  export type GisuSchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * The data used to create many GisuSchools.
     */
    data: GisuSchoolCreateManyInput | GisuSchoolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GisuSchool update
   */
  export type GisuSchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a GisuSchool.
     */
    data: XOR<GisuSchoolUpdateInput, GisuSchoolUncheckedUpdateInput>
    /**
     * Choose, which GisuSchool to update.
     */
    where: GisuSchoolWhereUniqueInput
  }

  /**
   * GisuSchool updateMany
   */
  export type GisuSchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GisuSchools.
     */
    data: XOR<GisuSchoolUpdateManyMutationInput, GisuSchoolUncheckedUpdateManyInput>
    /**
     * Filter which GisuSchools to update
     */
    where?: GisuSchoolWhereInput
    /**
     * Limit how many GisuSchools to update.
     */
    limit?: number
  }

  /**
   * GisuSchool updateManyAndReturn
   */
  export type GisuSchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * The data used to update GisuSchools.
     */
    data: XOR<GisuSchoolUpdateManyMutationInput, GisuSchoolUncheckedUpdateManyInput>
    /**
     * Filter which GisuSchools to update
     */
    where?: GisuSchoolWhereInput
    /**
     * Limit how many GisuSchools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GisuSchool upsert
   */
  export type GisuSchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the GisuSchool to update in case it exists.
     */
    where: GisuSchoolWhereUniqueInput
    /**
     * In case the GisuSchool found by the `where` argument doesn't exist, create a new GisuSchool with this data.
     */
    create: XOR<GisuSchoolCreateInput, GisuSchoolUncheckedCreateInput>
    /**
     * In case the GisuSchool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GisuSchoolUpdateInput, GisuSchoolUncheckedUpdateInput>
  }

  /**
   * GisuSchool delete
   */
  export type GisuSchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    /**
     * Filter which GisuSchool to delete.
     */
    where: GisuSchoolWhereUniqueInput
  }

  /**
   * GisuSchool deleteMany
   */
  export type GisuSchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GisuSchools to delete
     */
    where?: GisuSchoolWhereInput
    /**
     * Limit how many GisuSchools to delete.
     */
    limit?: number
  }

  /**
   * GisuSchool.viceLeader
   */
  export type GisuSchool$viceLeaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * GisuSchool without action
   */
  export type GisuSchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    id: number | null
  }

  export type SchoolSumAggregateOutputType = {
    id: bigint | null
  }

  export type SchoolMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    logoImageUrl: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    logoImageUrl: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    logoImageUrl: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    id?: true
  }

  export type SchoolSumAggregateInputType = {
    id?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    logoImageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    logoImageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    logoImageUrl?: true
    description?: true
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
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
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
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: bigint
    name: string
    logoImageUrl: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
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
    id?: boolean
    name?: boolean
    logoImageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challengers?: boolean | School$challengersArgs<ExtArgs>
    gisuSchools?: boolean | School$gisuSchoolsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoImageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoImageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    logoImageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logoImageUrl" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challengers?: boolean | School$challengersArgs<ExtArgs>
    gisuSchools?: boolean | School$gisuSchoolsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      challengers: Prisma.$ChallengerPayload<ExtArgs>[]
      gisuSchools: Prisma.$GisuSchoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      logoImageUrl: string | null
      description: string | null
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
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
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
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    gisuSchools<T extends School$gisuSchoolsArgs<ExtArgs> = {}>(args?: Subset<T, School$gisuSchoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GisuSchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"School", 'BigInt'>
    readonly name: FieldRef<"School", 'String'>
    readonly logoImageUrl: FieldRef<"School", 'String'>
    readonly description: FieldRef<"School", 'String'>
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
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
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
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
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
   * School.gisuSchools
   */
  export type School$gisuSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GisuSchool
     */
    select?: GisuSchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GisuSchool
     */
    omit?: GisuSchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GisuSchoolInclude<ExtArgs> | null
    where?: GisuSchoolWhereInput
    orderBy?: GisuSchoolOrderByWithRelationInput | GisuSchoolOrderByWithRelationInput[]
    cursor?: GisuSchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GisuSchoolScalarFieldEnum | GisuSchoolScalarFieldEnum[]
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
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    id: number | null
    gisuId: number | null
  }

  export type ChapterSumAggregateOutputType = {
    id: bigint | null
    gisuId: bigint | null
  }

  export type ChapterMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    gisuId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    gisuId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    name: number
    description: number
    gisuId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    id?: true
    gisuId?: true
  }

  export type ChapterSumAggregateInputType = {
    id?: true
    gisuId?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    gisuId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    gisuId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    gisuId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: bigint
    name: string
    description: string | null
    gisuId: bigint
    createdAt: Date
    updatedAt: Date
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    gisuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
    projects?: boolean | Chapter$projectsArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    gisuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    gisuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    gisuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "gisuId" | "createdAt" | "updatedAt", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
    projects?: boolean | Chapter$projectsArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChapterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
  }
  export type ChapterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gisu?: boolean | GisuDefaultArgs<ExtArgs>
  }

  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      gisu: Prisma.$GisuPayload<ExtArgs>
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string | null
      gisuId: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterFindManyArgs>(args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends ChapterCreateArgs>(args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterCreateManyArgs>(args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {ChapterCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChapterCreateManyAndReturnArgs>(args?: SelectSubset<T, ChapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends ChapterDeleteArgs>(args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterUpdateArgs>(args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {ChapterUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChapterUpdateManyAndReturnArgs>(args: SelectSubset<T, ChapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
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
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gisu<T extends GisuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GisuDefaultArgs<ExtArgs>>): Prisma__GisuClient<$Result.GetResult<Prisma.$GisuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends Chapter$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chapter model
   */
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", 'BigInt'>
    readonly name: FieldRef<"Chapter", 'String'>
    readonly description: FieldRef<"Chapter", 'String'>
    readonly gisuId: FieldRef<"Chapter", 'BigInt'>
    readonly createdAt: FieldRef<"Chapter", 'DateTime'>
    readonly updatedAt: FieldRef<"Chapter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }

  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapter createManyAndReturn
   */
  export type ChapterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapter updateManyAndReturn
   */
  export type ChapterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }

  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapter.projects
   */
  export type Chapter$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    chapterId: number | null
    planTo: number | null
    designTo: number | null
    webTo: number | null
    androidTo: number | null
    iosTo: number | null
    springbootTo: number | null
    nodejsTo: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: bigint | null
    chapterId: bigint | null
    planTo: number | null
    designTo: number | null
    webTo: number | null
    androidTo: number | null
    iosTo: number | null
    springbootTo: number | null
    nodejsTo: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    chapterId: bigint | null
    logoImageUrl: string | null
    bannerImageUrl: string | null
    planTo: number | null
    designTo: number | null
    webTo: number | null
    androidTo: number | null
    iosTo: number | null
    springbootTo: number | null
    nodejsTo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    chapterId: bigint | null
    logoImageUrl: string | null
    bannerImageUrl: string | null
    planTo: number | null
    designTo: number | null
    webTo: number | null
    androidTo: number | null
    iosTo: number | null
    springbootTo: number | null
    nodejsTo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    chapterId: number
    logoImageUrl: number
    bannerImageUrl: number
    planTo: number
    designTo: number
    webTo: number
    androidTo: number
    iosTo: number
    springbootTo: number
    nodejsTo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    chapterId?: true
    planTo?: true
    designTo?: true
    webTo?: true
    androidTo?: true
    iosTo?: true
    springbootTo?: true
    nodejsTo?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    chapterId?: true
    planTo?: true
    designTo?: true
    webTo?: true
    androidTo?: true
    iosTo?: true
    springbootTo?: true
    nodejsTo?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    chapterId?: true
    logoImageUrl?: true
    bannerImageUrl?: true
    planTo?: true
    designTo?: true
    webTo?: true
    androidTo?: true
    iosTo?: true
    springbootTo?: true
    nodejsTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    chapterId?: true
    logoImageUrl?: true
    bannerImageUrl?: true
    planTo?: true
    designTo?: true
    webTo?: true
    androidTo?: true
    iosTo?: true
    springbootTo?: true
    nodejsTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    chapterId?: true
    logoImageUrl?: true
    bannerImageUrl?: true
    planTo?: true
    designTo?: true
    webTo?: true
    androidTo?: true
    iosTo?: true
    springbootTo?: true
    nodejsTo?: true
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
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
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
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: bigint
    name: string
    description: string | null
    chapterId: bigint
    logoImageUrl: string | null
    bannerImageUrl: string | null
    planTo: number
    designTo: number
    webTo: number
    androidTo: number
    iosTo: number
    springbootTo: number
    nodejsTo: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
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
    name?: boolean
    description?: boolean
    chapterId?: boolean
    logoImageUrl?: boolean
    bannerImageUrl?: boolean
    planTo?: boolean
    designTo?: boolean
    webTo?: boolean
    androidTo?: boolean
    iosTo?: boolean
    springbootTo?: boolean
    nodejsTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    applicationForms?: boolean | Project$applicationFormsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    chapterId?: boolean
    logoImageUrl?: boolean
    bannerImageUrl?: boolean
    planTo?: boolean
    designTo?: boolean
    webTo?: boolean
    androidTo?: boolean
    iosTo?: boolean
    springbootTo?: boolean
    nodejsTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    chapterId?: boolean
    logoImageUrl?: boolean
    bannerImageUrl?: boolean
    planTo?: boolean
    designTo?: boolean
    webTo?: boolean
    androidTo?: boolean
    iosTo?: boolean
    springbootTo?: boolean
    nodejsTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    chapterId?: boolean
    logoImageUrl?: boolean
    bannerImageUrl?: boolean
    planTo?: boolean
    designTo?: boolean
    webTo?: boolean
    androidTo?: boolean
    iosTo?: boolean
    springbootTo?: boolean
    nodejsTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "chapterId" | "logoImageUrl" | "bannerImageUrl" | "planTo" | "designTo" | "webTo" | "androidTo" | "iosTo" | "springbootTo" | "nodejsTo" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    applicationForms?: boolean | Project$applicationFormsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      chapter: Prisma.$ChapterPayload<ExtArgs>
      members: Prisma.$ProjectMemberPayload<ExtArgs>[]
      applicationForms: Prisma.$ApplicationFormPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string | null
      chapterId: bigint
      logoImageUrl: string | null
      bannerImageUrl: string | null
      planTo: number
      designTo: number
      webTo: number
      androidTo: number
      iosTo: number
      springbootTo: number
      nodejsTo: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
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
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Project$membersArgs<ExtArgs> = {}>(args?: Subset<T, Project$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applicationForms<T extends Project$applicationFormsArgs<ExtArgs> = {}>(args?: Subset<T, Project$applicationFormsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Project", 'BigInt'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly chapterId: FieldRef<"Project", 'BigInt'>
    readonly logoImageUrl: FieldRef<"Project", 'String'>
    readonly bannerImageUrl: FieldRef<"Project", 'String'>
    readonly planTo: FieldRef<"Project", 'Int'>
    readonly designTo: FieldRef<"Project", 'Int'>
    readonly webTo: FieldRef<"Project", 'Int'>
    readonly androidTo: FieldRef<"Project", 'Int'>
    readonly iosTo: FieldRef<"Project", 'Int'>
    readonly springbootTo: FieldRef<"Project", 'Int'>
    readonly nodejsTo: FieldRef<"Project", 'Int'>
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
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
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
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Project.members
   */
  export type Project$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Project.applicationForms
   */
  export type Project$applicationFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormInclude<ExtArgs> | null
    where?: ApplicationFormWhereInput
    orderBy?: ApplicationFormOrderByWithRelationInput | ApplicationFormOrderByWithRelationInput[]
    cursor?: ApplicationFormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationFormScalarFieldEnum | ApplicationFormScalarFieldEnum[]
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
   * Model ProjectMember
   */

  export type AggregateProjectMember = {
    _count: ProjectMemberCountAggregateOutputType | null
    _avg: ProjectMemberAvgAggregateOutputType | null
    _sum: ProjectMemberSumAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  export type ProjectMemberAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    challengerId: number | null
  }

  export type ProjectMemberSumAggregateOutputType = {
    id: bigint | null
    projectId: bigint | null
    challengerId: bigint | null
  }

  export type ProjectMemberMinAggregateOutputType = {
    id: bigint | null
    projectId: bigint | null
    challengerId: bigint | null
    role: $Enums.UserPartEnum | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMemberMaxAggregateOutputType = {
    id: bigint | null
    projectId: bigint | null
    challengerId: bigint | null
    role: $Enums.UserPartEnum | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMemberCountAggregateOutputType = {
    id: number
    projectId: number
    challengerId: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMemberAvgAggregateInputType = {
    id?: true
    projectId?: true
    challengerId?: true
  }

  export type ProjectMemberSumAggregateInputType = {
    id?: true
    projectId?: true
    challengerId?: true
  }

  export type ProjectMemberMinAggregateInputType = {
    id?: true
    projectId?: true
    challengerId?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMemberMaxAggregateInputType = {
    id?: true
    projectId?: true
    challengerId?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMemberCountAggregateInputType = {
    id?: true
    projectId?: true
    challengerId?: true
    role?: true
    isActive?: true
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
     * Select which fields to average
    **/
    _avg?: ProjectMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectMemberSumAggregateInputType
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
    _avg?: ProjectMemberAvgAggregateInputType
    _sum?: ProjectMemberSumAggregateInputType
    _min?: ProjectMemberMinAggregateInputType
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type ProjectMemberGroupByOutputType = {
    id: bigint
    projectId: bigint
    challengerId: bigint
    role: $Enums.UserPartEnum
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProjectMemberCountAggregateOutputType | null
    _avg: ProjectMemberAvgAggregateOutputType | null
    _sum: ProjectMemberSumAggregateOutputType | null
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
    challengerId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    challenger?: boolean | ChallengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    challengerId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    challenger?: boolean | ChallengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    challengerId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    challenger?: boolean | ChallengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectScalar = {
    id?: boolean
    projectId?: boolean
    challengerId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "challengerId" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["projectMember"]>
  export type ProjectMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    challenger?: boolean | ChallengerDefaultArgs<ExtArgs>
  }
  export type ProjectMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    challenger?: boolean | ChallengerDefaultArgs<ExtArgs>
  }
  export type ProjectMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    challenger?: boolean | ChallengerDefaultArgs<ExtArgs>
  }

  export type $ProjectMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMember"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      challenger: Prisma.$ChallengerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      projectId: bigint
      challengerId: bigint
      role: $Enums.UserPartEnum
      isActive: boolean
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
     * Create many ProjectMembers and returns the data saved in the database.
     * @param {ProjectMemberCreateManyAndReturnArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectMembers and only return the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more ProjectMembers and returns the data updated in the database.
     * @param {ProjectMemberUpdateManyAndReturnArgs} args - Arguments to update many ProjectMembers.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectMembers and only return the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    challenger<T extends ChallengerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengerDefaultArgs<ExtArgs>>): Prisma__ChallengerClient<$Result.GetResult<Prisma.$ChallengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"ProjectMember", 'BigInt'>
    readonly projectId: FieldRef<"ProjectMember", 'BigInt'>
    readonly challengerId: FieldRef<"ProjectMember", 'BigInt'>
    readonly role: FieldRef<"ProjectMember", 'UserPartEnum'>
    readonly isActive: FieldRef<"ProjectMember", 'Boolean'>
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
    skipDuplicates?: boolean
  }

  /**
   * ProjectMember createManyAndReturn
   */
  export type ProjectMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeCreateManyAndReturn<ExtArgs> | null
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
   * ProjectMember updateManyAndReturn
   */
  export type ProjectMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Model ApplicationForm
   */

  export type AggregateApplicationForm = {
    _count: ApplicationFormCountAggregateOutputType | null
    _avg: ApplicationFormAvgAggregateOutputType | null
    _sum: ApplicationFormSumAggregateOutputType | null
    _min: ApplicationFormMinAggregateOutputType | null
    _max: ApplicationFormMaxAggregateOutputType | null
  }

  export type ApplicationFormAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ApplicationFormSumAggregateOutputType = {
    id: bigint | null
    projectId: bigint | null
  }

  export type ApplicationFormMinAggregateOutputType = {
    id: bigint | null
    projectId: bigint | null
    title: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationFormMaxAggregateOutputType = {
    id: bigint | null
    projectId: bigint | null
    title: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationFormCountAggregateOutputType = {
    id: number
    projectId: number
    title: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationFormAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ApplicationFormSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ApplicationFormMinAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationFormMaxAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationFormCountAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationForm to aggregate.
     */
    where?: ApplicationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationForms to fetch.
     */
    orderBy?: ApplicationFormOrderByWithRelationInput | ApplicationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationForms
    **/
    _count?: true | ApplicationFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationFormMaxAggregateInputType
  }

  export type GetApplicationFormAggregateType<T extends ApplicationFormAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationForm[P]>
      : GetScalarType<T[P], AggregateApplicationForm[P]>
  }




  export type ApplicationFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationFormWhereInput
    orderBy?: ApplicationFormOrderByWithAggregationInput | ApplicationFormOrderByWithAggregationInput[]
    by: ApplicationFormScalarFieldEnum[] | ApplicationFormScalarFieldEnum
    having?: ApplicationFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationFormCountAggregateInputType | true
    _avg?: ApplicationFormAvgAggregateInputType
    _sum?: ApplicationFormSumAggregateInputType
    _min?: ApplicationFormMinAggregateInputType
    _max?: ApplicationFormMaxAggregateInputType
  }

  export type ApplicationFormGroupByOutputType = {
    id: bigint
    projectId: bigint
    title: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ApplicationFormCountAggregateOutputType | null
    _avg: ApplicationFormAvgAggregateOutputType | null
    _sum: ApplicationFormSumAggregateOutputType | null
    _min: ApplicationFormMinAggregateOutputType | null
    _max: ApplicationFormMaxAggregateOutputType | null
  }

  type GetApplicationFormGroupByPayload<T extends ApplicationFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationFormGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationFormGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    questions?: boolean | ApplicationForm$questionsArgs<ExtArgs>
    _count?: boolean | ApplicationFormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationForm"]>

  export type ApplicationFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationForm"]>

  export type ApplicationFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationForm"]>

  export type ApplicationFormSelectScalar = {
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "title" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["applicationForm"]>
  export type ApplicationFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    questions?: boolean | ApplicationForm$questionsArgs<ExtArgs>
    _count?: boolean | ApplicationFormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicationFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ApplicationFormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ApplicationFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationForm"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      questions: Prisma.$FormQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      projectId: bigint
      title: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["applicationForm"]>
    composites: {}
  }

  type ApplicationFormGetPayload<S extends boolean | null | undefined | ApplicationFormDefaultArgs> = $Result.GetResult<Prisma.$ApplicationFormPayload, S>

  type ApplicationFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationFormCountAggregateInputType | true
    }

  export interface ApplicationFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationForm'], meta: { name: 'ApplicationForm' } }
    /**
     * Find zero or one ApplicationForm that matches the filter.
     * @param {ApplicationFormFindUniqueArgs} args - Arguments to find a ApplicationForm
     * @example
     * // Get one ApplicationForm
     * const applicationForm = await prisma.applicationForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFormFindUniqueArgs>(args: SelectSubset<T, ApplicationFormFindUniqueArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFormFindUniqueOrThrowArgs} args - Arguments to find a ApplicationForm
     * @example
     * // Get one ApplicationForm
     * const applicationForm = await prisma.applicationForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFormFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormFindFirstArgs} args - Arguments to find a ApplicationForm
     * @example
     * // Get one ApplicationForm
     * const applicationForm = await prisma.applicationForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFormFindFirstArgs>(args?: SelectSubset<T, ApplicationFormFindFirstArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormFindFirstOrThrowArgs} args - Arguments to find a ApplicationForm
     * @example
     * // Get one ApplicationForm
     * const applicationForm = await prisma.applicationForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFormFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationForms
     * const applicationForms = await prisma.applicationForm.findMany()
     * 
     * // Get first 10 ApplicationForms
     * const applicationForms = await prisma.applicationForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationFormWithIdOnly = await prisma.applicationForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFormFindManyArgs>(args?: SelectSubset<T, ApplicationFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationForm.
     * @param {ApplicationFormCreateArgs} args - Arguments to create a ApplicationForm.
     * @example
     * // Create one ApplicationForm
     * const ApplicationForm = await prisma.applicationForm.create({
     *   data: {
     *     // ... data to create a ApplicationForm
     *   }
     * })
     * 
     */
    create<T extends ApplicationFormCreateArgs>(args: SelectSubset<T, ApplicationFormCreateArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationForms.
     * @param {ApplicationFormCreateManyArgs} args - Arguments to create many ApplicationForms.
     * @example
     * // Create many ApplicationForms
     * const applicationForm = await prisma.applicationForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationFormCreateManyArgs>(args?: SelectSubset<T, ApplicationFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationForms and returns the data saved in the database.
     * @param {ApplicationFormCreateManyAndReturnArgs} args - Arguments to create many ApplicationForms.
     * @example
     * // Create many ApplicationForms
     * const applicationForm = await prisma.applicationForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationForms and only return the `id`
     * const applicationFormWithIdOnly = await prisma.applicationForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationFormCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationForm.
     * @param {ApplicationFormDeleteArgs} args - Arguments to delete one ApplicationForm.
     * @example
     * // Delete one ApplicationForm
     * const ApplicationForm = await prisma.applicationForm.delete({
     *   where: {
     *     // ... filter to delete one ApplicationForm
     *   }
     * })
     * 
     */
    delete<T extends ApplicationFormDeleteArgs>(args: SelectSubset<T, ApplicationFormDeleteArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationForm.
     * @param {ApplicationFormUpdateArgs} args - Arguments to update one ApplicationForm.
     * @example
     * // Update one ApplicationForm
     * const applicationForm = await prisma.applicationForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationFormUpdateArgs>(args: SelectSubset<T, ApplicationFormUpdateArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationForms.
     * @param {ApplicationFormDeleteManyArgs} args - Arguments to filter ApplicationForms to delete.
     * @example
     * // Delete a few ApplicationForms
     * const { count } = await prisma.applicationForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationFormDeleteManyArgs>(args?: SelectSubset<T, ApplicationFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationForms
     * const applicationForm = await prisma.applicationForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationFormUpdateManyArgs>(args: SelectSubset<T, ApplicationFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationForms and returns the data updated in the database.
     * @param {ApplicationFormUpdateManyAndReturnArgs} args - Arguments to update many ApplicationForms.
     * @example
     * // Update many ApplicationForms
     * const applicationForm = await prisma.applicationForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationForms and only return the `id`
     * const applicationFormWithIdOnly = await prisma.applicationForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationFormUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationForm.
     * @param {ApplicationFormUpsertArgs} args - Arguments to update or create a ApplicationForm.
     * @example
     * // Update or create a ApplicationForm
     * const applicationForm = await prisma.applicationForm.upsert({
     *   create: {
     *     // ... data to create a ApplicationForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationForm we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationFormUpsertArgs>(args: SelectSubset<T, ApplicationFormUpsertArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormCountArgs} args - Arguments to filter ApplicationForms to count.
     * @example
     * // Count the number of ApplicationForms
     * const count = await prisma.applicationForm.count({
     *   where: {
     *     // ... the filter for the ApplicationForms we want to count
     *   }
     * })
    **/
    count<T extends ApplicationFormCountArgs>(
      args?: Subset<T, ApplicationFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationFormAggregateArgs>(args: Subset<T, ApplicationFormAggregateArgs>): Prisma.PrismaPromise<GetApplicationFormAggregateType<T>>

    /**
     * Group by ApplicationForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFormGroupByArgs} args - Group by arguments.
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
      T extends ApplicationFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationFormGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationFormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationForm model
   */
  readonly fields: ApplicationFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends ApplicationForm$questionsArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationForm$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ApplicationForm model
   */
  interface ApplicationFormFieldRefs {
    readonly id: FieldRef<"ApplicationForm", 'BigInt'>
    readonly projectId: FieldRef<"ApplicationForm", 'BigInt'>
    readonly title: FieldRef<"ApplicationForm", 'String'>
    readonly description: FieldRef<"ApplicationForm", 'String'>
    readonly isActive: FieldRef<"ApplicationForm", 'Boolean'>
    readonly createdAt: FieldRef<"ApplicationForm", 'DateTime'>
    readonly updatedAt: FieldRef<"ApplicationForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationForm findUnique
   */
  export type ApplicationFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationForm to fetch.
     */
    where: ApplicationFormWhereUniqueInput
  }

  /**
   * ApplicationForm findUniqueOrThrow
   */
  export type ApplicationFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationForm to fetch.
     */
    where: ApplicationFormWhereUniqueInput
  }

  /**
   * ApplicationForm findFirst
   */
  export type ApplicationFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationForm to fetch.
     */
    where?: ApplicationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationForms to fetch.
     */
    orderBy?: ApplicationFormOrderByWithRelationInput | ApplicationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationForms.
     */
    cursor?: ApplicationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationForms.
     */
    distinct?: ApplicationFormScalarFieldEnum | ApplicationFormScalarFieldEnum[]
  }

  /**
   * ApplicationForm findFirstOrThrow
   */
  export type ApplicationFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationForm to fetch.
     */
    where?: ApplicationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationForms to fetch.
     */
    orderBy?: ApplicationFormOrderByWithRelationInput | ApplicationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationForms.
     */
    cursor?: ApplicationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationForms.
     */
    distinct?: ApplicationFormScalarFieldEnum | ApplicationFormScalarFieldEnum[]
  }

  /**
   * ApplicationForm findMany
   */
  export type ApplicationFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationForms to fetch.
     */
    where?: ApplicationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationForms to fetch.
     */
    orderBy?: ApplicationFormOrderByWithRelationInput | ApplicationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationForms.
     */
    cursor?: ApplicationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationForms.
     */
    skip?: number
    distinct?: ApplicationFormScalarFieldEnum | ApplicationFormScalarFieldEnum[]
  }

  /**
   * ApplicationForm create
   */
  export type ApplicationFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationForm.
     */
    data: XOR<ApplicationFormCreateInput, ApplicationFormUncheckedCreateInput>
  }

  /**
   * ApplicationForm createMany
   */
  export type ApplicationFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationForms.
     */
    data: ApplicationFormCreateManyInput | ApplicationFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicationForm createManyAndReturn
   */
  export type ApplicationFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationForms.
     */
    data: ApplicationFormCreateManyInput | ApplicationFormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationForm update
   */
  export type ApplicationFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationForm.
     */
    data: XOR<ApplicationFormUpdateInput, ApplicationFormUncheckedUpdateInput>
    /**
     * Choose, which ApplicationForm to update.
     */
    where: ApplicationFormWhereUniqueInput
  }

  /**
   * ApplicationForm updateMany
   */
  export type ApplicationFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationForms.
     */
    data: XOR<ApplicationFormUpdateManyMutationInput, ApplicationFormUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationForms to update
     */
    where?: ApplicationFormWhereInput
    /**
     * Limit how many ApplicationForms to update.
     */
    limit?: number
  }

  /**
   * ApplicationForm updateManyAndReturn
   */
  export type ApplicationFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationForms.
     */
    data: XOR<ApplicationFormUpdateManyMutationInput, ApplicationFormUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationForms to update
     */
    where?: ApplicationFormWhereInput
    /**
     * Limit how many ApplicationForms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationForm upsert
   */
  export type ApplicationFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationForm to update in case it exists.
     */
    where: ApplicationFormWhereUniqueInput
    /**
     * In case the ApplicationForm found by the `where` argument doesn't exist, create a new ApplicationForm with this data.
     */
    create: XOR<ApplicationFormCreateInput, ApplicationFormUncheckedCreateInput>
    /**
     * In case the ApplicationForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationFormUpdateInput, ApplicationFormUncheckedUpdateInput>
  }

  /**
   * ApplicationForm delete
   */
  export type ApplicationFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormInclude<ExtArgs> | null
    /**
     * Filter which ApplicationForm to delete.
     */
    where: ApplicationFormWhereUniqueInput
  }

  /**
   * ApplicationForm deleteMany
   */
  export type ApplicationFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationForms to delete
     */
    where?: ApplicationFormWhereInput
    /**
     * Limit how many ApplicationForms to delete.
     */
    limit?: number
  }

  /**
   * ApplicationForm.questions
   */
  export type ApplicationForm$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ApplicationForm without action
   */
  export type ApplicationFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationForm
     */
    select?: ApplicationFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationForm
     */
    omit?: ApplicationFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationFormInclude<ExtArgs> | null
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
    id: number | null
    formId: number | null
    questionNo: number | null
  }

  export type FormQuestionSumAggregateOutputType = {
    id: bigint | null
    formId: bigint | null
    questionNo: number | null
  }

  export type FormQuestionMinAggregateOutputType = {
    id: bigint | null
    formId: bigint | null
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
    id: bigint | null
    formId: bigint | null
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
    id?: true
    formId?: true
    questionNo?: true
  }

  export type FormQuestionSumAggregateInputType = {
    id?: true
    formId?: true
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
    id: bigint
    formId: bigint
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
    form?: boolean | ApplicationFormDefaultArgs<ExtArgs>
    responses?: boolean | FormQuestion$responsesArgs<ExtArgs>
    _count?: boolean | FormQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formQuestion"]>

  export type FormQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    form?: boolean | ApplicationFormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formQuestion"]>

  export type FormQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    form?: boolean | ApplicationFormDefaultArgs<ExtArgs>
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
    form?: boolean | ApplicationFormDefaultArgs<ExtArgs>
    responses?: boolean | FormQuestion$responsesArgs<ExtArgs>
    _count?: boolean | FormQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | ApplicationFormDefaultArgs<ExtArgs>
  }
  export type FormQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | ApplicationFormDefaultArgs<ExtArgs>
  }

  export type $FormQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormQuestion"
    objects: {
      form: Prisma.$ApplicationFormPayload<ExtArgs>
      responses: Prisma.$ApplicationResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      formId: bigint
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
     * Create many FormQuestions and returns the data saved in the database.
     * @param {FormQuestionCreateManyAndReturnArgs} args - Arguments to create many FormQuestions.
     * @example
     * // Create many FormQuestions
     * const formQuestion = await prisma.formQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormQuestions and only return the `id`
     * const formQuestionWithIdOnly = await prisma.formQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, FormQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more FormQuestions and returns the data updated in the database.
     * @param {FormQuestionUpdateManyAndReturnArgs} args - Arguments to update many FormQuestions.
     * @example
     * // Update many FormQuestions
     * const formQuestion = await prisma.formQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormQuestions and only return the `id`
     * const formQuestionWithIdOnly = await prisma.formQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, FormQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    form<T extends ApplicationFormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationFormDefaultArgs<ExtArgs>>): Prisma__ApplicationFormClient<$Result.GetResult<Prisma.$ApplicationFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends FormQuestion$responsesArgs<ExtArgs> = {}>(args?: Subset<T, FormQuestion$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"FormQuestion", 'BigInt'>
    readonly formId: FieldRef<"FormQuestion", 'BigInt'>
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
    skipDuplicates?: boolean
  }

  /**
   * FormQuestion createManyAndReturn
   */
  export type FormQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many FormQuestions.
     */
    data: FormQuestionCreateManyInput | FormQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionIncludeCreateManyAndReturn<ExtArgs> | null
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
   * FormQuestion updateManyAndReturn
   */
  export type FormQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormQuestion
     */
    select?: FormQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormQuestion
     */
    omit?: FormQuestionOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * FormQuestion.responses
   */
  export type FormQuestion$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseInclude<ExtArgs> | null
    where?: ApplicationResponseWhereInput
    orderBy?: ApplicationResponseOrderByWithRelationInput | ApplicationResponseOrderByWithRelationInput[]
    cursor?: ApplicationResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationResponseScalarFieldEnum | ApplicationResponseScalarFieldEnum[]
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
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
    applicantId: number | null
    matchingRoundId: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: bigint | null
    applicantId: bigint | null
    matchingRoundId: bigint | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: bigint | null
    applicantId: bigint | null
    matchingRoundId: bigint | null
    status: $Enums.ApplicationStatusEnum | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: bigint | null
    applicantId: bigint | null
    matchingRoundId: bigint | null
    status: $Enums.ApplicationStatusEnum | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    applicantId: number
    matchingRoundId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
    applicantId?: true
    matchingRoundId?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
    applicantId?: true
    matchingRoundId?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    applicantId?: true
    matchingRoundId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    applicantId?: true
    matchingRoundId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    applicantId?: true
    matchingRoundId?: true
    status?: true
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
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
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
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: bigint
    applicantId: bigint
    matchingRoundId: bigint
    status: $Enums.ApplicationStatusEnum
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
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
    matchingRoundId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ChallengerDefaultArgs<ExtArgs>
    matchingRound?: boolean | MatchingRoundDefaultArgs<ExtArgs>
    responses?: boolean | Application$responsesArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    matchingRoundId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ChallengerDefaultArgs<ExtArgs>
    matchingRound?: boolean | MatchingRoundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    matchingRoundId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ChallengerDefaultArgs<ExtArgs>
    matchingRound?: boolean | MatchingRoundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    applicantId?: boolean
    matchingRoundId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicantId" | "matchingRoundId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ChallengerDefaultArgs<ExtArgs>
    matchingRound?: boolean | MatchingRoundDefaultArgs<ExtArgs>
    responses?: boolean | Application$responsesArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ChallengerDefaultArgs<ExtArgs>
    matchingRound?: boolean | MatchingRoundDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ChallengerDefaultArgs<ExtArgs>
    matchingRound?: boolean | MatchingRoundDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      applicant: Prisma.$ChallengerPayload<ExtArgs>
      matchingRound: Prisma.$MatchingRoundPayload<ExtArgs>
      responses: Prisma.$ApplicationResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      applicantId: bigint
      matchingRoundId: bigint
      status: $Enums.ApplicationStatusEnum
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
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    matchingRound<T extends MatchingRoundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchingRoundDefaultArgs<ExtArgs>>): Prisma__MatchingRoundClient<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends Application$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Application$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Application", 'BigInt'>
    readonly applicantId: FieldRef<"Application", 'BigInt'>
    readonly matchingRoundId: FieldRef<"Application", 'BigInt'>
    readonly status: FieldRef<"Application", 'ApplicationStatusEnum'>
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
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
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
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Application.responses
   */
  export type Application$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseInclude<ExtArgs> | null
    where?: ApplicationResponseWhereInput
    orderBy?: ApplicationResponseOrderByWithRelationInput | ApplicationResponseOrderByWithRelationInput[]
    cursor?: ApplicationResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationResponseScalarFieldEnum | ApplicationResponseScalarFieldEnum[]
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
   * Model ApplicationResponse
   */

  export type AggregateApplicationResponse = {
    _count: ApplicationResponseCountAggregateOutputType | null
    _avg: ApplicationResponseAvgAggregateOutputType | null
    _sum: ApplicationResponseSumAggregateOutputType | null
    _min: ApplicationResponseMinAggregateOutputType | null
    _max: ApplicationResponseMaxAggregateOutputType | null
  }

  export type ApplicationResponseAvgAggregateOutputType = {
    id: number | null
    applicationId: number | null
    questionId: number | null
  }

  export type ApplicationResponseSumAggregateOutputType = {
    id: bigint | null
    applicationId: bigint | null
    questionId: bigint | null
  }

  export type ApplicationResponseMinAggregateOutputType = {
    id: bigint | null
    applicationId: bigint | null
    questionId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationResponseMaxAggregateOutputType = {
    id: bigint | null
    applicationId: bigint | null
    questionId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationResponseCountAggregateOutputType = {
    id: number
    applicationId: number
    questionId: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationResponseAvgAggregateInputType = {
    id?: true
    applicationId?: true
    questionId?: true
  }

  export type ApplicationResponseSumAggregateInputType = {
    id?: true
    applicationId?: true
    questionId?: true
  }

  export type ApplicationResponseMinAggregateInputType = {
    id?: true
    applicationId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationResponseMaxAggregateInputType = {
    id?: true
    applicationId?: true
    questionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationResponseCountAggregateInputType = {
    id?: true
    applicationId?: true
    questionId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationResponse to aggregate.
     */
    where?: ApplicationResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationResponses to fetch.
     */
    orderBy?: ApplicationResponseOrderByWithRelationInput | ApplicationResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationResponses
    **/
    _count?: true | ApplicationResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationResponseMaxAggregateInputType
  }

  export type GetApplicationResponseAggregateType<T extends ApplicationResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationResponse[P]>
      : GetScalarType<T[P], AggregateApplicationResponse[P]>
  }




  export type ApplicationResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationResponseWhereInput
    orderBy?: ApplicationResponseOrderByWithAggregationInput | ApplicationResponseOrderByWithAggregationInput[]
    by: ApplicationResponseScalarFieldEnum[] | ApplicationResponseScalarFieldEnum
    having?: ApplicationResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationResponseCountAggregateInputType | true
    _avg?: ApplicationResponseAvgAggregateInputType
    _sum?: ApplicationResponseSumAggregateInputType
    _min?: ApplicationResponseMinAggregateInputType
    _max?: ApplicationResponseMaxAggregateInputType
  }

  export type ApplicationResponseGroupByOutputType = {
    id: bigint
    applicationId: bigint
    questionId: bigint
    value: string[]
    createdAt: Date
    updatedAt: Date
    _count: ApplicationResponseCountAggregateOutputType | null
    _avg: ApplicationResponseAvgAggregateOutputType | null
    _sum: ApplicationResponseSumAggregateOutputType | null
    _min: ApplicationResponseMinAggregateOutputType | null
    _max: ApplicationResponseMaxAggregateOutputType | null
  }

  type GetApplicationResponseGroupByPayload<T extends ApplicationResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationResponseGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationResponseGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    questionId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    question?: boolean | FormQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationResponse"]>

  export type ApplicationResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    questionId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    question?: boolean | FormQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationResponse"]>

  export type ApplicationResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    questionId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    question?: boolean | FormQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationResponse"]>

  export type ApplicationResponseSelectScalar = {
    id?: boolean
    applicationId?: boolean
    questionId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "questionId" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["applicationResponse"]>
  export type ApplicationResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    question?: boolean | FormQuestionDefaultArgs<ExtArgs>
  }
  export type ApplicationResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    question?: boolean | FormQuestionDefaultArgs<ExtArgs>
  }
  export type ApplicationResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    question?: boolean | FormQuestionDefaultArgs<ExtArgs>
  }

  export type $ApplicationResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationResponse"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
      question: Prisma.$FormQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      applicationId: bigint
      questionId: bigint
      value: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["applicationResponse"]>
    composites: {}
  }

  type ApplicationResponseGetPayload<S extends boolean | null | undefined | ApplicationResponseDefaultArgs> = $Result.GetResult<Prisma.$ApplicationResponsePayload, S>

  type ApplicationResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationResponseCountAggregateInputType | true
    }

  export interface ApplicationResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationResponse'], meta: { name: 'ApplicationResponse' } }
    /**
     * Find zero or one ApplicationResponse that matches the filter.
     * @param {ApplicationResponseFindUniqueArgs} args - Arguments to find a ApplicationResponse
     * @example
     * // Get one ApplicationResponse
     * const applicationResponse = await prisma.applicationResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationResponseFindUniqueArgs>(args: SelectSubset<T, ApplicationResponseFindUniqueArgs<ExtArgs>>): Prisma__ApplicationResponseClient<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationResponseFindUniqueOrThrowArgs} args - Arguments to find a ApplicationResponse
     * @example
     * // Get one ApplicationResponse
     * const applicationResponse = await prisma.applicationResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationResponseClient<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationResponseFindFirstArgs} args - Arguments to find a ApplicationResponse
     * @example
     * // Get one ApplicationResponse
     * const applicationResponse = await prisma.applicationResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationResponseFindFirstArgs>(args?: SelectSubset<T, ApplicationResponseFindFirstArgs<ExtArgs>>): Prisma__ApplicationResponseClient<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationResponseFindFirstOrThrowArgs} args - Arguments to find a ApplicationResponse
     * @example
     * // Get one ApplicationResponse
     * const applicationResponse = await prisma.applicationResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationResponseClient<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationResponses
     * const applicationResponses = await prisma.applicationResponse.findMany()
     * 
     * // Get first 10 ApplicationResponses
     * const applicationResponses = await prisma.applicationResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationResponseWithIdOnly = await prisma.applicationResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationResponseFindManyArgs>(args?: SelectSubset<T, ApplicationResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationResponse.
     * @param {ApplicationResponseCreateArgs} args - Arguments to create a ApplicationResponse.
     * @example
     * // Create one ApplicationResponse
     * const ApplicationResponse = await prisma.applicationResponse.create({
     *   data: {
     *     // ... data to create a ApplicationResponse
     *   }
     * })
     * 
     */
    create<T extends ApplicationResponseCreateArgs>(args: SelectSubset<T, ApplicationResponseCreateArgs<ExtArgs>>): Prisma__ApplicationResponseClient<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationResponses.
     * @param {ApplicationResponseCreateManyArgs} args - Arguments to create many ApplicationResponses.
     * @example
     * // Create many ApplicationResponses
     * const applicationResponse = await prisma.applicationResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationResponseCreateManyArgs>(args?: SelectSubset<T, ApplicationResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationResponses and returns the data saved in the database.
     * @param {ApplicationResponseCreateManyAndReturnArgs} args - Arguments to create many ApplicationResponses.
     * @example
     * // Create many ApplicationResponses
     * const applicationResponse = await prisma.applicationResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationResponses and only return the `id`
     * const applicationResponseWithIdOnly = await prisma.applicationResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationResponse.
     * @param {ApplicationResponseDeleteArgs} args - Arguments to delete one ApplicationResponse.
     * @example
     * // Delete one ApplicationResponse
     * const ApplicationResponse = await prisma.applicationResponse.delete({
     *   where: {
     *     // ... filter to delete one ApplicationResponse
     *   }
     * })
     * 
     */
    delete<T extends ApplicationResponseDeleteArgs>(args: SelectSubset<T, ApplicationResponseDeleteArgs<ExtArgs>>): Prisma__ApplicationResponseClient<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationResponse.
     * @param {ApplicationResponseUpdateArgs} args - Arguments to update one ApplicationResponse.
     * @example
     * // Update one ApplicationResponse
     * const applicationResponse = await prisma.applicationResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationResponseUpdateArgs>(args: SelectSubset<T, ApplicationResponseUpdateArgs<ExtArgs>>): Prisma__ApplicationResponseClient<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationResponses.
     * @param {ApplicationResponseDeleteManyArgs} args - Arguments to filter ApplicationResponses to delete.
     * @example
     * // Delete a few ApplicationResponses
     * const { count } = await prisma.applicationResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationResponseDeleteManyArgs>(args?: SelectSubset<T, ApplicationResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationResponses
     * const applicationResponse = await prisma.applicationResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationResponseUpdateManyArgs>(args: SelectSubset<T, ApplicationResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationResponses and returns the data updated in the database.
     * @param {ApplicationResponseUpdateManyAndReturnArgs} args - Arguments to update many ApplicationResponses.
     * @example
     * // Update many ApplicationResponses
     * const applicationResponse = await prisma.applicationResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationResponses and only return the `id`
     * const applicationResponseWithIdOnly = await prisma.applicationResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationResponse.
     * @param {ApplicationResponseUpsertArgs} args - Arguments to update or create a ApplicationResponse.
     * @example
     * // Update or create a ApplicationResponse
     * const applicationResponse = await prisma.applicationResponse.upsert({
     *   create: {
     *     // ... data to create a ApplicationResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationResponse we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationResponseUpsertArgs>(args: SelectSubset<T, ApplicationResponseUpsertArgs<ExtArgs>>): Prisma__ApplicationResponseClient<$Result.GetResult<Prisma.$ApplicationResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationResponseCountArgs} args - Arguments to filter ApplicationResponses to count.
     * @example
     * // Count the number of ApplicationResponses
     * const count = await prisma.applicationResponse.count({
     *   where: {
     *     // ... the filter for the ApplicationResponses we want to count
     *   }
     * })
    **/
    count<T extends ApplicationResponseCountArgs>(
      args?: Subset<T, ApplicationResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationResponseAggregateArgs>(args: Subset<T, ApplicationResponseAggregateArgs>): Prisma.PrismaPromise<GetApplicationResponseAggregateType<T>>

    /**
     * Group by ApplicationResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationResponseGroupByArgs} args - Group by arguments.
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
      T extends ApplicationResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationResponseGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationResponse model
   */
  readonly fields: ApplicationResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ApplicationResponse model
   */
  interface ApplicationResponseFieldRefs {
    readonly id: FieldRef<"ApplicationResponse", 'BigInt'>
    readonly applicationId: FieldRef<"ApplicationResponse", 'BigInt'>
    readonly questionId: FieldRef<"ApplicationResponse", 'BigInt'>
    readonly value: FieldRef<"ApplicationResponse", 'String[]'>
    readonly createdAt: FieldRef<"ApplicationResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"ApplicationResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationResponse findUnique
   */
  export type ApplicationResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationResponse to fetch.
     */
    where: ApplicationResponseWhereUniqueInput
  }

  /**
   * ApplicationResponse findUniqueOrThrow
   */
  export type ApplicationResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationResponse to fetch.
     */
    where: ApplicationResponseWhereUniqueInput
  }

  /**
   * ApplicationResponse findFirst
   */
  export type ApplicationResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationResponse to fetch.
     */
    where?: ApplicationResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationResponses to fetch.
     */
    orderBy?: ApplicationResponseOrderByWithRelationInput | ApplicationResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationResponses.
     */
    cursor?: ApplicationResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationResponses.
     */
    distinct?: ApplicationResponseScalarFieldEnum | ApplicationResponseScalarFieldEnum[]
  }

  /**
   * ApplicationResponse findFirstOrThrow
   */
  export type ApplicationResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationResponse to fetch.
     */
    where?: ApplicationResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationResponses to fetch.
     */
    orderBy?: ApplicationResponseOrderByWithRelationInput | ApplicationResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationResponses.
     */
    cursor?: ApplicationResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationResponses.
     */
    distinct?: ApplicationResponseScalarFieldEnum | ApplicationResponseScalarFieldEnum[]
  }

  /**
   * ApplicationResponse findMany
   */
  export type ApplicationResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationResponses to fetch.
     */
    where?: ApplicationResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationResponses to fetch.
     */
    orderBy?: ApplicationResponseOrderByWithRelationInput | ApplicationResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationResponses.
     */
    cursor?: ApplicationResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationResponses.
     */
    skip?: number
    distinct?: ApplicationResponseScalarFieldEnum | ApplicationResponseScalarFieldEnum[]
  }

  /**
   * ApplicationResponse create
   */
  export type ApplicationResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationResponse.
     */
    data: XOR<ApplicationResponseCreateInput, ApplicationResponseUncheckedCreateInput>
  }

  /**
   * ApplicationResponse createMany
   */
  export type ApplicationResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationResponses.
     */
    data: ApplicationResponseCreateManyInput | ApplicationResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicationResponse createManyAndReturn
   */
  export type ApplicationResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationResponses.
     */
    data: ApplicationResponseCreateManyInput | ApplicationResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationResponse update
   */
  export type ApplicationResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationResponse.
     */
    data: XOR<ApplicationResponseUpdateInput, ApplicationResponseUncheckedUpdateInput>
    /**
     * Choose, which ApplicationResponse to update.
     */
    where: ApplicationResponseWhereUniqueInput
  }

  /**
   * ApplicationResponse updateMany
   */
  export type ApplicationResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationResponses.
     */
    data: XOR<ApplicationResponseUpdateManyMutationInput, ApplicationResponseUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationResponses to update
     */
    where?: ApplicationResponseWhereInput
    /**
     * Limit how many ApplicationResponses to update.
     */
    limit?: number
  }

  /**
   * ApplicationResponse updateManyAndReturn
   */
  export type ApplicationResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationResponses.
     */
    data: XOR<ApplicationResponseUpdateManyMutationInput, ApplicationResponseUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationResponses to update
     */
    where?: ApplicationResponseWhereInput
    /**
     * Limit how many ApplicationResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationResponse upsert
   */
  export type ApplicationResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationResponse to update in case it exists.
     */
    where: ApplicationResponseWhereUniqueInput
    /**
     * In case the ApplicationResponse found by the `where` argument doesn't exist, create a new ApplicationResponse with this data.
     */
    create: XOR<ApplicationResponseCreateInput, ApplicationResponseUncheckedCreateInput>
    /**
     * In case the ApplicationResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationResponseUpdateInput, ApplicationResponseUncheckedUpdateInput>
  }

  /**
   * ApplicationResponse delete
   */
  export type ApplicationResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseInclude<ExtArgs> | null
    /**
     * Filter which ApplicationResponse to delete.
     */
    where: ApplicationResponseWhereUniqueInput
  }

  /**
   * ApplicationResponse deleteMany
   */
  export type ApplicationResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationResponses to delete
     */
    where?: ApplicationResponseWhereInput
    /**
     * Limit how many ApplicationResponses to delete.
     */
    limit?: number
  }

  /**
   * ApplicationResponse without action
   */
  export type ApplicationResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationResponse
     */
    select?: ApplicationResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationResponse
     */
    omit?: ApplicationResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationResponseInclude<ExtArgs> | null
  }


  /**
   * Model MatchingRound
   */

  export type AggregateMatchingRound = {
    _count: MatchingRoundCountAggregateOutputType | null
    _avg: MatchingRoundAvgAggregateOutputType | null
    _sum: MatchingRoundSumAggregateOutputType | null
    _min: MatchingRoundMinAggregateOutputType | null
    _max: MatchingRoundMaxAggregateOutputType | null
  }

  export type MatchingRoundAvgAggregateOutputType = {
    id: number | null
  }

  export type MatchingRoundSumAggregateOutputType = {
    id: bigint | null
  }

  export type MatchingRoundMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    startAt: Date | null
    endAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchingRoundMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    startAt: Date | null
    endAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchingRoundCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startAt: number
    endAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchingRoundAvgAggregateInputType = {
    id?: true
  }

  export type MatchingRoundSumAggregateInputType = {
    id?: true
  }

  export type MatchingRoundMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startAt?: true
    endAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchingRoundMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startAt?: true
    endAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchingRoundCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startAt?: true
    endAt?: true
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
     * Select which fields to average
    **/
    _avg?: MatchingRoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchingRoundSumAggregateInputType
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
    _avg?: MatchingRoundAvgAggregateInputType
    _sum?: MatchingRoundSumAggregateInputType
    _min?: MatchingRoundMinAggregateInputType
    _max?: MatchingRoundMaxAggregateInputType
  }

  export type MatchingRoundGroupByOutputType = {
    id: bigint
    name: string
    description: string | null
    startAt: Date
    endAt: Date
    createdAt: Date
    updatedAt: Date
    _count: MatchingRoundCountAggregateOutputType | null
    _avg: MatchingRoundAvgAggregateOutputType | null
    _sum: MatchingRoundSumAggregateOutputType | null
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
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applications?: boolean | MatchingRound$applicationsArgs<ExtArgs>
    _count?: boolean | MatchingRoundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchingRound"]>

  export type MatchingRoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["matchingRound"]>

  export type MatchingRoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["matchingRound"]>

  export type MatchingRoundSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchingRoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startAt" | "endAt" | "createdAt" | "updatedAt", ExtArgs["result"]["matchingRound"]>
  export type MatchingRoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | MatchingRound$applicationsArgs<ExtArgs>
    _count?: boolean | MatchingRoundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchingRoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MatchingRoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MatchingRoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchingRound"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string | null
      startAt: Date
      endAt: Date
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
     * Create many MatchingRounds and returns the data saved in the database.
     * @param {MatchingRoundCreateManyAndReturnArgs} args - Arguments to create many MatchingRounds.
     * @example
     * // Create many MatchingRounds
     * const matchingRound = await prisma.matchingRound.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchingRounds and only return the `id`
     * const matchingRoundWithIdOnly = await prisma.matchingRound.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchingRoundCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchingRoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more MatchingRounds and returns the data updated in the database.
     * @param {MatchingRoundUpdateManyAndReturnArgs} args - Arguments to update many MatchingRounds.
     * @example
     * // Update many MatchingRounds
     * const matchingRound = await prisma.matchingRound.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchingRounds and only return the `id`
     * const matchingRoundWithIdOnly = await prisma.matchingRound.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchingRoundUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchingRoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchingRoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    applications<T extends MatchingRound$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, MatchingRound$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"MatchingRound", 'BigInt'>
    readonly name: FieldRef<"MatchingRound", 'String'>
    readonly description: FieldRef<"MatchingRound", 'String'>
    readonly startAt: FieldRef<"MatchingRound", 'DateTime'>
    readonly endAt: FieldRef<"MatchingRound", 'DateTime'>
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
    skipDuplicates?: boolean
  }

  /**
   * MatchingRound createManyAndReturn
   */
  export type MatchingRoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRound
     */
    select?: MatchingRoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingRound
     */
    omit?: MatchingRoundOmit<ExtArgs> | null
    /**
     * The data used to create many MatchingRounds.
     */
    data: MatchingRoundCreateManyInput | MatchingRoundCreateManyInput[]
    skipDuplicates?: boolean
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
   * MatchingRound updateManyAndReturn
   */
  export type MatchingRoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchingRound
     */
    select?: MatchingRoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchingRound
     */
    omit?: MatchingRoundOmit<ExtArgs> | null
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
   * MatchingRound.applications
   */
  export type MatchingRound$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChallengerScalarFieldEnum: {
    id: 'id',
    umsbId: 'umsbId',
    name: 'name',
    nickname: 'nickname',
    gender: 'gender',
    schoolId: 'schoolId',
    studentId: 'studentId',
    profileImageUrl: 'profileImageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChallengerScalarFieldEnum = (typeof ChallengerScalarFieldEnum)[keyof typeof ChallengerScalarFieldEnum]


  export const ChallengerGisuScalarFieldEnum: {
    id: 'id',
    challengerId: 'challengerId',
    gisuId: 'gisuId',
    isSchoolAdmin: 'isSchoolAdmin',
    isChapterAdmin: 'isChapterAdmin',
    isCentralAdmin: 'isCentralAdmin',
    schoolAdminType: 'schoolAdminType',
    chapterAdminType: 'chapterAdminType',
    centralAdminType: 'centralAdminType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChallengerGisuScalarFieldEnum = (typeof ChallengerGisuScalarFieldEnum)[keyof typeof ChallengerGisuScalarFieldEnum]


  export const GisuScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GisuScalarFieldEnum = (typeof GisuScalarFieldEnum)[keyof typeof GisuScalarFieldEnum]


  export const GisuSchoolScalarFieldEnum: {
    id: 'id',
    gisuId: 'gisuId',
    schoolId: 'schoolId',
    leaderId: 'leaderId',
    viceLeaderId: 'viceLeaderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GisuSchoolScalarFieldEnum = (typeof GisuSchoolScalarFieldEnum)[keyof typeof GisuSchoolScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logoImageUrl: 'logoImageUrl',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    gisuId: 'gisuId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    chapterId: 'chapterId',
    logoImageUrl: 'logoImageUrl',
    bannerImageUrl: 'bannerImageUrl',
    planTo: 'planTo',
    designTo: 'designTo',
    webTo: 'webTo',
    androidTo: 'androidTo',
    iosTo: 'iosTo',
    springbootTo: 'springbootTo',
    nodejsTo: 'nodejsTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectMemberScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    challengerId: 'challengerId',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectMemberScalarFieldEnum = (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum]


  export const ApplicationFormScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    title: 'title',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationFormScalarFieldEnum = (typeof ApplicationFormScalarFieldEnum)[keyof typeof ApplicationFormScalarFieldEnum]


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


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    applicantId: 'applicantId',
    matchingRoundId: 'matchingRoundId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const ApplicationResponseScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    questionId: 'questionId',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationResponseScalarFieldEnum = (typeof ApplicationResponseScalarFieldEnum)[keyof typeof ApplicationResponseScalarFieldEnum]


  export const MatchingRoundScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startAt: 'startAt',
    endAt: 'endAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchingRoundScalarFieldEnum = (typeof MatchingRoundScalarFieldEnum)[keyof typeof MatchingRoundScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'GenderEnum'
   */
  export type EnumGenderEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderEnum'>
    


  /**
   * Reference to a field of type 'GenderEnum[]'
   */
  export type ListEnumGenderEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderEnum[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserPartEnum'
   */
  export type EnumUserPartEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserPartEnum'>
    


  /**
   * Reference to a field of type 'UserPartEnum[]'
   */
  export type ListEnumUserPartEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserPartEnum[]'>
    


  /**
   * Reference to a field of type 'QuestionTypeEnum'
   */
  export type EnumQuestionTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionTypeEnum'>
    


  /**
   * Reference to a field of type 'QuestionTypeEnum[]'
   */
  export type ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionTypeEnum[]'>
    


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
    id?: BigIntFilter<"Challenger"> | bigint | number
    umsbId?: IntFilter<"Challenger"> | number
    name?: StringFilter<"Challenger"> | string
    nickname?: StringFilter<"Challenger"> | string
    gender?: EnumGenderEnumFilter<"Challenger"> | $Enums.GenderEnum
    schoolId?: BigIntFilter<"Challenger"> | bigint | number
    studentId?: StringFilter<"Challenger"> | string
    profileImageUrl?: StringNullableFilter<"Challenger"> | string | null
    createdAt?: DateTimeFilter<"Challenger"> | Date | string
    updatedAt?: DateTimeFilter<"Challenger"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    gisuRoles?: ChallengerGisuListRelationFilter
    ledGisuSchools?: GisuSchoolListRelationFilter
    viceLedGisuSchools?: GisuSchoolListRelationFilter
    projectMembers?: ProjectMemberListRelationFilter
    applications?: ApplicationListRelationFilter
  }

  export type ChallengerOrderByWithRelationInput = {
    id?: SortOrder
    umsbId?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    gender?: SortOrder
    schoolId?: SortOrder
    studentId?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SchoolOrderByWithRelationInput
    gisuRoles?: ChallengerGisuOrderByRelationAggregateInput
    ledGisuSchools?: GisuSchoolOrderByRelationAggregateInput
    viceLedGisuSchools?: GisuSchoolOrderByRelationAggregateInput
    projectMembers?: ProjectMemberOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type ChallengerWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ChallengerWhereInput | ChallengerWhereInput[]
    OR?: ChallengerWhereInput[]
    NOT?: ChallengerWhereInput | ChallengerWhereInput[]
    umsbId?: IntFilter<"Challenger"> | number
    name?: StringFilter<"Challenger"> | string
    nickname?: StringFilter<"Challenger"> | string
    gender?: EnumGenderEnumFilter<"Challenger"> | $Enums.GenderEnum
    schoolId?: BigIntFilter<"Challenger"> | bigint | number
    studentId?: StringFilter<"Challenger"> | string
    profileImageUrl?: StringNullableFilter<"Challenger"> | string | null
    createdAt?: DateTimeFilter<"Challenger"> | Date | string
    updatedAt?: DateTimeFilter<"Challenger"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    gisuRoles?: ChallengerGisuListRelationFilter
    ledGisuSchools?: GisuSchoolListRelationFilter
    viceLedGisuSchools?: GisuSchoolListRelationFilter
    projectMembers?: ProjectMemberListRelationFilter
    applications?: ApplicationListRelationFilter
  }, "id">

  export type ChallengerOrderByWithAggregationInput = {
    id?: SortOrder
    umsbId?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    gender?: SortOrder
    schoolId?: SortOrder
    studentId?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChallengerCountOrderByAggregateInput
    _avg?: ChallengerAvgOrderByAggregateInput
    _max?: ChallengerMaxOrderByAggregateInput
    _min?: ChallengerMinOrderByAggregateInput
    _sum?: ChallengerSumOrderByAggregateInput
  }

  export type ChallengerScalarWhereWithAggregatesInput = {
    AND?: ChallengerScalarWhereWithAggregatesInput | ChallengerScalarWhereWithAggregatesInput[]
    OR?: ChallengerScalarWhereWithAggregatesInput[]
    NOT?: ChallengerScalarWhereWithAggregatesInput | ChallengerScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Challenger"> | bigint | number
    umsbId?: IntWithAggregatesFilter<"Challenger"> | number
    name?: StringWithAggregatesFilter<"Challenger"> | string
    nickname?: StringWithAggregatesFilter<"Challenger"> | string
    gender?: EnumGenderEnumWithAggregatesFilter<"Challenger"> | $Enums.GenderEnum
    schoolId?: BigIntWithAggregatesFilter<"Challenger"> | bigint | number
    studentId?: StringWithAggregatesFilter<"Challenger"> | string
    profileImageUrl?: StringNullableWithAggregatesFilter<"Challenger"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Challenger"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Challenger"> | Date | string
  }

  export type ChallengerGisuWhereInput = {
    AND?: ChallengerGisuWhereInput | ChallengerGisuWhereInput[]
    OR?: ChallengerGisuWhereInput[]
    NOT?: ChallengerGisuWhereInput | ChallengerGisuWhereInput[]
    id?: BigIntFilter<"ChallengerGisu"> | bigint | number
    challengerId?: BigIntFilter<"ChallengerGisu"> | bigint | number
    gisuId?: BigIntFilter<"ChallengerGisu"> | bigint | number
    isSchoolAdmin?: BoolFilter<"ChallengerGisu"> | boolean
    isChapterAdmin?: BoolFilter<"ChallengerGisu"> | boolean
    isCentralAdmin?: BoolFilter<"ChallengerGisu"> | boolean
    schoolAdminType?: StringNullableFilter<"ChallengerGisu"> | string | null
    chapterAdminType?: StringNullableFilter<"ChallengerGisu"> | string | null
    centralAdminType?: StringNullableFilter<"ChallengerGisu"> | string | null
    createdAt?: DateTimeFilter<"ChallengerGisu"> | Date | string
    updatedAt?: DateTimeFilter<"ChallengerGisu"> | Date | string
    challenger?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
    gisu?: XOR<GisuScalarRelationFilter, GisuWhereInput>
  }

  export type ChallengerGisuOrderByWithRelationInput = {
    id?: SortOrder
    challengerId?: SortOrder
    gisuId?: SortOrder
    isSchoolAdmin?: SortOrder
    isChapterAdmin?: SortOrder
    isCentralAdmin?: SortOrder
    schoolAdminType?: SortOrderInput | SortOrder
    chapterAdminType?: SortOrderInput | SortOrder
    centralAdminType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challenger?: ChallengerOrderByWithRelationInput
    gisu?: GisuOrderByWithRelationInput
  }

  export type ChallengerGisuWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ChallengerGisuWhereInput | ChallengerGisuWhereInput[]
    OR?: ChallengerGisuWhereInput[]
    NOT?: ChallengerGisuWhereInput | ChallengerGisuWhereInput[]
    challengerId?: BigIntFilter<"ChallengerGisu"> | bigint | number
    gisuId?: BigIntFilter<"ChallengerGisu"> | bigint | number
    isSchoolAdmin?: BoolFilter<"ChallengerGisu"> | boolean
    isChapterAdmin?: BoolFilter<"ChallengerGisu"> | boolean
    isCentralAdmin?: BoolFilter<"ChallengerGisu"> | boolean
    schoolAdminType?: StringNullableFilter<"ChallengerGisu"> | string | null
    chapterAdminType?: StringNullableFilter<"ChallengerGisu"> | string | null
    centralAdminType?: StringNullableFilter<"ChallengerGisu"> | string | null
    createdAt?: DateTimeFilter<"ChallengerGisu"> | Date | string
    updatedAt?: DateTimeFilter<"ChallengerGisu"> | Date | string
    challenger?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
    gisu?: XOR<GisuScalarRelationFilter, GisuWhereInput>
  }, "id">

  export type ChallengerGisuOrderByWithAggregationInput = {
    id?: SortOrder
    challengerId?: SortOrder
    gisuId?: SortOrder
    isSchoolAdmin?: SortOrder
    isChapterAdmin?: SortOrder
    isCentralAdmin?: SortOrder
    schoolAdminType?: SortOrderInput | SortOrder
    chapterAdminType?: SortOrderInput | SortOrder
    centralAdminType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChallengerGisuCountOrderByAggregateInput
    _avg?: ChallengerGisuAvgOrderByAggregateInput
    _max?: ChallengerGisuMaxOrderByAggregateInput
    _min?: ChallengerGisuMinOrderByAggregateInput
    _sum?: ChallengerGisuSumOrderByAggregateInput
  }

  export type ChallengerGisuScalarWhereWithAggregatesInput = {
    AND?: ChallengerGisuScalarWhereWithAggregatesInput | ChallengerGisuScalarWhereWithAggregatesInput[]
    OR?: ChallengerGisuScalarWhereWithAggregatesInput[]
    NOT?: ChallengerGisuScalarWhereWithAggregatesInput | ChallengerGisuScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ChallengerGisu"> | bigint | number
    challengerId?: BigIntWithAggregatesFilter<"ChallengerGisu"> | bigint | number
    gisuId?: BigIntWithAggregatesFilter<"ChallengerGisu"> | bigint | number
    isSchoolAdmin?: BoolWithAggregatesFilter<"ChallengerGisu"> | boolean
    isChapterAdmin?: BoolWithAggregatesFilter<"ChallengerGisu"> | boolean
    isCentralAdmin?: BoolWithAggregatesFilter<"ChallengerGisu"> | boolean
    schoolAdminType?: StringNullableWithAggregatesFilter<"ChallengerGisu"> | string | null
    chapterAdminType?: StringNullableWithAggregatesFilter<"ChallengerGisu"> | string | null
    centralAdminType?: StringNullableWithAggregatesFilter<"ChallengerGisu"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChallengerGisu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChallengerGisu"> | Date | string
  }

  export type GisuWhereInput = {
    AND?: GisuWhereInput | GisuWhereInput[]
    OR?: GisuWhereInput[]
    NOT?: GisuWhereInput | GisuWhereInput[]
    id?: BigIntFilter<"Gisu"> | bigint | number
    name?: StringFilter<"Gisu"> | string
    description?: StringNullableFilter<"Gisu"> | string | null
    createdAt?: DateTimeFilter<"Gisu"> | Date | string
    updatedAt?: DateTimeFilter<"Gisu"> | Date | string
    gisuSchools?: GisuSchoolListRelationFilter
    chapters?: ChapterListRelationFilter
    challengerGisus?: ChallengerGisuListRelationFilter
  }

  export type GisuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gisuSchools?: GisuSchoolOrderByRelationAggregateInput
    chapters?: ChapterOrderByRelationAggregateInput
    challengerGisus?: ChallengerGisuOrderByRelationAggregateInput
  }

  export type GisuWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: GisuWhereInput | GisuWhereInput[]
    OR?: GisuWhereInput[]
    NOT?: GisuWhereInput | GisuWhereInput[]
    name?: StringFilter<"Gisu"> | string
    description?: StringNullableFilter<"Gisu"> | string | null
    createdAt?: DateTimeFilter<"Gisu"> | Date | string
    updatedAt?: DateTimeFilter<"Gisu"> | Date | string
    gisuSchools?: GisuSchoolListRelationFilter
    chapters?: ChapterListRelationFilter
    challengerGisus?: ChallengerGisuListRelationFilter
  }, "id">

  export type GisuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GisuCountOrderByAggregateInput
    _avg?: GisuAvgOrderByAggregateInput
    _max?: GisuMaxOrderByAggregateInput
    _min?: GisuMinOrderByAggregateInput
    _sum?: GisuSumOrderByAggregateInput
  }

  export type GisuScalarWhereWithAggregatesInput = {
    AND?: GisuScalarWhereWithAggregatesInput | GisuScalarWhereWithAggregatesInput[]
    OR?: GisuScalarWhereWithAggregatesInput[]
    NOT?: GisuScalarWhereWithAggregatesInput | GisuScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Gisu"> | bigint | number
    name?: StringWithAggregatesFilter<"Gisu"> | string
    description?: StringNullableWithAggregatesFilter<"Gisu"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Gisu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gisu"> | Date | string
  }

  export type GisuSchoolWhereInput = {
    AND?: GisuSchoolWhereInput | GisuSchoolWhereInput[]
    OR?: GisuSchoolWhereInput[]
    NOT?: GisuSchoolWhereInput | GisuSchoolWhereInput[]
    id?: BigIntFilter<"GisuSchool"> | bigint | number
    gisuId?: BigIntFilter<"GisuSchool"> | bigint | number
    schoolId?: BigIntFilter<"GisuSchool"> | bigint | number
    leaderId?: BigIntFilter<"GisuSchool"> | bigint | number
    viceLeaderId?: BigIntNullableFilter<"GisuSchool"> | bigint | number | null
    createdAt?: DateTimeFilter<"GisuSchool"> | Date | string
    updatedAt?: DateTimeFilter<"GisuSchool"> | Date | string
    gisu?: XOR<GisuScalarRelationFilter, GisuWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    leader?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
    viceLeader?: XOR<ChallengerNullableScalarRelationFilter, ChallengerWhereInput> | null
  }

  export type GisuSchoolOrderByWithRelationInput = {
    id?: SortOrder
    gisuId?: SortOrder
    schoolId?: SortOrder
    leaderId?: SortOrder
    viceLeaderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gisu?: GisuOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
    leader?: ChallengerOrderByWithRelationInput
    viceLeader?: ChallengerOrderByWithRelationInput
  }

  export type GisuSchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: GisuSchoolWhereInput | GisuSchoolWhereInput[]
    OR?: GisuSchoolWhereInput[]
    NOT?: GisuSchoolWhereInput | GisuSchoolWhereInput[]
    gisuId?: BigIntFilter<"GisuSchool"> | bigint | number
    schoolId?: BigIntFilter<"GisuSchool"> | bigint | number
    leaderId?: BigIntFilter<"GisuSchool"> | bigint | number
    viceLeaderId?: BigIntNullableFilter<"GisuSchool"> | bigint | number | null
    createdAt?: DateTimeFilter<"GisuSchool"> | Date | string
    updatedAt?: DateTimeFilter<"GisuSchool"> | Date | string
    gisu?: XOR<GisuScalarRelationFilter, GisuWhereInput>
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    leader?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
    viceLeader?: XOR<ChallengerNullableScalarRelationFilter, ChallengerWhereInput> | null
  }, "id">

  export type GisuSchoolOrderByWithAggregationInput = {
    id?: SortOrder
    gisuId?: SortOrder
    schoolId?: SortOrder
    leaderId?: SortOrder
    viceLeaderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GisuSchoolCountOrderByAggregateInput
    _avg?: GisuSchoolAvgOrderByAggregateInput
    _max?: GisuSchoolMaxOrderByAggregateInput
    _min?: GisuSchoolMinOrderByAggregateInput
    _sum?: GisuSchoolSumOrderByAggregateInput
  }

  export type GisuSchoolScalarWhereWithAggregatesInput = {
    AND?: GisuSchoolScalarWhereWithAggregatesInput | GisuSchoolScalarWhereWithAggregatesInput[]
    OR?: GisuSchoolScalarWhereWithAggregatesInput[]
    NOT?: GisuSchoolScalarWhereWithAggregatesInput | GisuSchoolScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"GisuSchool"> | bigint | number
    gisuId?: BigIntWithAggregatesFilter<"GisuSchool"> | bigint | number
    schoolId?: BigIntWithAggregatesFilter<"GisuSchool"> | bigint | number
    leaderId?: BigIntWithAggregatesFilter<"GisuSchool"> | bigint | number
    viceLeaderId?: BigIntNullableWithAggregatesFilter<"GisuSchool"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"GisuSchool"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GisuSchool"> | Date | string
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: BigIntFilter<"School"> | bigint | number
    name?: StringFilter<"School"> | string
    logoImageUrl?: StringNullableFilter<"School"> | string | null
    description?: StringNullableFilter<"School"> | string | null
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    challengers?: ChallengerListRelationFilter
    gisuSchools?: GisuSchoolListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logoImageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengers?: ChallengerOrderByRelationAggregateInput
    gisuSchools?: GisuSchoolOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    logoImageUrl?: StringNullableFilter<"School"> | string | null
    description?: StringNullableFilter<"School"> | string | null
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    challengers?: ChallengerListRelationFilter
    gisuSchools?: GisuSchoolListRelationFilter
  }, "id">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logoImageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"School"> | bigint | number
    name?: StringWithAggregatesFilter<"School"> | string
    logoImageUrl?: StringNullableWithAggregatesFilter<"School"> | string | null
    description?: StringNullableWithAggregatesFilter<"School"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: BigIntFilter<"Chapter"> | bigint | number
    name?: StringFilter<"Chapter"> | string
    description?: StringNullableFilter<"Chapter"> | string | null
    gisuId?: BigIntFilter<"Chapter"> | bigint | number
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
    gisu?: XOR<GisuScalarRelationFilter, GisuWhereInput>
    projects?: ProjectListRelationFilter
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    gisuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gisu?: GisuOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    name?: StringFilter<"Chapter"> | string
    description?: StringNullableFilter<"Chapter"> | string | null
    gisuId?: BigIntFilter<"Chapter"> | bigint | number
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
    gisu?: XOR<GisuScalarRelationFilter, GisuWhereInput>
    projects?: ProjectListRelationFilter
  }, "id">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    gisuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _avg?: ChapterAvgOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
    _sum?: ChapterSumOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Chapter"> | bigint | number
    name?: StringWithAggregatesFilter<"Chapter"> | string
    description?: StringNullableWithAggregatesFilter<"Chapter"> | string | null
    gisuId?: BigIntWithAggregatesFilter<"Chapter"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: BigIntFilter<"Project"> | bigint | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    chapterId?: BigIntFilter<"Project"> | bigint | number
    logoImageUrl?: StringNullableFilter<"Project"> | string | null
    bannerImageUrl?: StringNullableFilter<"Project"> | string | null
    planTo?: IntFilter<"Project"> | number
    designTo?: IntFilter<"Project"> | number
    webTo?: IntFilter<"Project"> | number
    androidTo?: IntFilter<"Project"> | number
    iosTo?: IntFilter<"Project"> | number
    springbootTo?: IntFilter<"Project"> | number
    nodejsTo?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    members?: ProjectMemberListRelationFilter
    applicationForms?: ApplicationFormListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    chapterId?: SortOrder
    logoImageUrl?: SortOrderInput | SortOrder
    bannerImageUrl?: SortOrderInput | SortOrder
    planTo?: SortOrder
    designTo?: SortOrder
    webTo?: SortOrder
    androidTo?: SortOrder
    iosTo?: SortOrder
    springbootTo?: SortOrder
    nodejsTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chapter?: ChapterOrderByWithRelationInput
    members?: ProjectMemberOrderByRelationAggregateInput
    applicationForms?: ApplicationFormOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    chapterId?: BigIntFilter<"Project"> | bigint | number
    logoImageUrl?: StringNullableFilter<"Project"> | string | null
    bannerImageUrl?: StringNullableFilter<"Project"> | string | null
    planTo?: IntFilter<"Project"> | number
    designTo?: IntFilter<"Project"> | number
    webTo?: IntFilter<"Project"> | number
    androidTo?: IntFilter<"Project"> | number
    iosTo?: IntFilter<"Project"> | number
    springbootTo?: IntFilter<"Project"> | number
    nodejsTo?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    members?: ProjectMemberListRelationFilter
    applicationForms?: ApplicationFormListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    chapterId?: SortOrder
    logoImageUrl?: SortOrderInput | SortOrder
    bannerImageUrl?: SortOrderInput | SortOrder
    planTo?: SortOrder
    designTo?: SortOrder
    webTo?: SortOrder
    androidTo?: SortOrder
    iosTo?: SortOrder
    springbootTo?: SortOrder
    nodejsTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Project"> | bigint | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    chapterId?: BigIntWithAggregatesFilter<"Project"> | bigint | number
    logoImageUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    bannerImageUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    planTo?: IntWithAggregatesFilter<"Project"> | number
    designTo?: IntWithAggregatesFilter<"Project"> | number
    webTo?: IntWithAggregatesFilter<"Project"> | number
    androidTo?: IntWithAggregatesFilter<"Project"> | number
    iosTo?: IntWithAggregatesFilter<"Project"> | number
    springbootTo?: IntWithAggregatesFilter<"Project"> | number
    nodejsTo?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectMemberWhereInput = {
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    id?: BigIntFilter<"ProjectMember"> | bigint | number
    projectId?: BigIntFilter<"ProjectMember"> | bigint | number
    challengerId?: BigIntFilter<"ProjectMember"> | bigint | number
    role?: EnumUserPartEnumFilter<"ProjectMember"> | $Enums.UserPartEnum
    isActive?: BoolFilter<"ProjectMember"> | boolean
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectMember"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    challenger?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
  }

  export type ProjectMemberOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    challengerId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    challenger?: ChallengerOrderByWithRelationInput
  }

  export type ProjectMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    projectId?: BigIntFilter<"ProjectMember"> | bigint | number
    challengerId?: BigIntFilter<"ProjectMember"> | bigint | number
    role?: EnumUserPartEnumFilter<"ProjectMember"> | $Enums.UserPartEnum
    isActive?: BoolFilter<"ProjectMember"> | boolean
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectMember"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    challenger?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
  }, "id">

  export type ProjectMemberOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    challengerId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectMemberCountOrderByAggregateInput
    _avg?: ProjectMemberAvgOrderByAggregateInput
    _max?: ProjectMemberMaxOrderByAggregateInput
    _min?: ProjectMemberMinOrderByAggregateInput
    _sum?: ProjectMemberSumOrderByAggregateInput
  }

  export type ProjectMemberScalarWhereWithAggregatesInput = {
    AND?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    OR?: ProjectMemberScalarWhereWithAggregatesInput[]
    NOT?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ProjectMember"> | bigint | number
    projectId?: BigIntWithAggregatesFilter<"ProjectMember"> | bigint | number
    challengerId?: BigIntWithAggregatesFilter<"ProjectMember"> | bigint | number
    role?: EnumUserPartEnumWithAggregatesFilter<"ProjectMember"> | $Enums.UserPartEnum
    isActive?: BoolWithAggregatesFilter<"ProjectMember"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProjectMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectMember"> | Date | string
  }

  export type ApplicationFormWhereInput = {
    AND?: ApplicationFormWhereInput | ApplicationFormWhereInput[]
    OR?: ApplicationFormWhereInput[]
    NOT?: ApplicationFormWhereInput | ApplicationFormWhereInput[]
    id?: BigIntFilter<"ApplicationForm"> | bigint | number
    projectId?: BigIntFilter<"ApplicationForm"> | bigint | number
    title?: StringFilter<"ApplicationForm"> | string
    description?: StringNullableFilter<"ApplicationForm"> | string | null
    isActive?: BoolFilter<"ApplicationForm"> | boolean
    createdAt?: DateTimeFilter<"ApplicationForm"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationForm"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    questions?: FormQuestionListRelationFilter
  }

  export type ApplicationFormOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    questions?: FormQuestionOrderByRelationAggregateInput
  }

  export type ApplicationFormWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ApplicationFormWhereInput | ApplicationFormWhereInput[]
    OR?: ApplicationFormWhereInput[]
    NOT?: ApplicationFormWhereInput | ApplicationFormWhereInput[]
    projectId?: BigIntFilter<"ApplicationForm"> | bigint | number
    title?: StringFilter<"ApplicationForm"> | string
    description?: StringNullableFilter<"ApplicationForm"> | string | null
    isActive?: BoolFilter<"ApplicationForm"> | boolean
    createdAt?: DateTimeFilter<"ApplicationForm"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationForm"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    questions?: FormQuestionListRelationFilter
  }, "id">

  export type ApplicationFormOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationFormCountOrderByAggregateInput
    _avg?: ApplicationFormAvgOrderByAggregateInput
    _max?: ApplicationFormMaxOrderByAggregateInput
    _min?: ApplicationFormMinOrderByAggregateInput
    _sum?: ApplicationFormSumOrderByAggregateInput
  }

  export type ApplicationFormScalarWhereWithAggregatesInput = {
    AND?: ApplicationFormScalarWhereWithAggregatesInput | ApplicationFormScalarWhereWithAggregatesInput[]
    OR?: ApplicationFormScalarWhereWithAggregatesInput[]
    NOT?: ApplicationFormScalarWhereWithAggregatesInput | ApplicationFormScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ApplicationForm"> | bigint | number
    projectId?: BigIntWithAggregatesFilter<"ApplicationForm"> | bigint | number
    title?: StringWithAggregatesFilter<"ApplicationForm"> | string
    description?: StringNullableWithAggregatesFilter<"ApplicationForm"> | string | null
    isActive?: BoolWithAggregatesFilter<"ApplicationForm"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ApplicationForm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApplicationForm"> | Date | string
  }

  export type FormQuestionWhereInput = {
    AND?: FormQuestionWhereInput | FormQuestionWhereInput[]
    OR?: FormQuestionWhereInput[]
    NOT?: FormQuestionWhereInput | FormQuestionWhereInput[]
    id?: BigIntFilter<"FormQuestion"> | bigint | number
    formId?: BigIntFilter<"FormQuestion"> | bigint | number
    questionNo?: IntFilter<"FormQuestion"> | number
    title?: StringFilter<"FormQuestion"> | string
    description?: StringNullableFilter<"FormQuestion"> | string | null
    type?: EnumQuestionTypeEnumFilter<"FormQuestion"> | $Enums.QuestionTypeEnum
    options?: StringNullableListFilter<"FormQuestion">
    isRequired?: BoolFilter<"FormQuestion"> | boolean
    isDeleted?: BoolFilter<"FormQuestion"> | boolean
    createdAt?: DateTimeFilter<"FormQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"FormQuestion"> | Date | string
    form?: XOR<ApplicationFormScalarRelationFilter, ApplicationFormWhereInput>
    responses?: ApplicationResponseListRelationFilter
  }

  export type FormQuestionOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    questionNo?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    options?: SortOrder
    isRequired?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    form?: ApplicationFormOrderByWithRelationInput
    responses?: ApplicationResponseOrderByRelationAggregateInput
  }

  export type FormQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: FormQuestionWhereInput | FormQuestionWhereInput[]
    OR?: FormQuestionWhereInput[]
    NOT?: FormQuestionWhereInput | FormQuestionWhereInput[]
    formId?: BigIntFilter<"FormQuestion"> | bigint | number
    questionNo?: IntFilter<"FormQuestion"> | number
    title?: StringFilter<"FormQuestion"> | string
    description?: StringNullableFilter<"FormQuestion"> | string | null
    type?: EnumQuestionTypeEnumFilter<"FormQuestion"> | $Enums.QuestionTypeEnum
    options?: StringNullableListFilter<"FormQuestion">
    isRequired?: BoolFilter<"FormQuestion"> | boolean
    isDeleted?: BoolFilter<"FormQuestion"> | boolean
    createdAt?: DateTimeFilter<"FormQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"FormQuestion"> | Date | string
    form?: XOR<ApplicationFormScalarRelationFilter, ApplicationFormWhereInput>
    responses?: ApplicationResponseListRelationFilter
  }, "id">

  export type FormQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    questionNo?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
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
    id?: BigIntWithAggregatesFilter<"FormQuestion"> | bigint | number
    formId?: BigIntWithAggregatesFilter<"FormQuestion"> | bigint | number
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

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: BigIntFilter<"Application"> | bigint | number
    applicantId?: BigIntFilter<"Application"> | bigint | number
    matchingRoundId?: BigIntFilter<"Application"> | bigint | number
    status?: EnumApplicationStatusEnumFilter<"Application"> | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    applicant?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
    matchingRound?: XOR<MatchingRoundScalarRelationFilter, MatchingRoundWhereInput>
    responses?: ApplicationResponseListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    matchingRoundId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: ChallengerOrderByWithRelationInput
    matchingRound?: MatchingRoundOrderByWithRelationInput
    responses?: ApplicationResponseOrderByRelationAggregateInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    applicantId?: BigIntFilter<"Application"> | bigint | number
    matchingRoundId?: BigIntFilter<"Application"> | bigint | number
    status?: EnumApplicationStatusEnumFilter<"Application"> | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    applicant?: XOR<ChallengerScalarRelationFilter, ChallengerWhereInput>
    matchingRound?: XOR<MatchingRoundScalarRelationFilter, MatchingRoundWhereInput>
    responses?: ApplicationResponseListRelationFilter
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    matchingRoundId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Application"> | bigint | number
    applicantId?: BigIntWithAggregatesFilter<"Application"> | bigint | number
    matchingRoundId?: BigIntWithAggregatesFilter<"Application"> | bigint | number
    status?: EnumApplicationStatusEnumWithAggregatesFilter<"Application"> | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type ApplicationResponseWhereInput = {
    AND?: ApplicationResponseWhereInput | ApplicationResponseWhereInput[]
    OR?: ApplicationResponseWhereInput[]
    NOT?: ApplicationResponseWhereInput | ApplicationResponseWhereInput[]
    id?: BigIntFilter<"ApplicationResponse"> | bigint | number
    applicationId?: BigIntFilter<"ApplicationResponse"> | bigint | number
    questionId?: BigIntFilter<"ApplicationResponse"> | bigint | number
    value?: StringNullableListFilter<"ApplicationResponse">
    createdAt?: DateTimeFilter<"ApplicationResponse"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationResponse"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    question?: XOR<FormQuestionScalarRelationFilter, FormQuestionWhereInput>
  }

  export type ApplicationResponseOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    questionId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    question?: FormQuestionOrderByWithRelationInput
  }

  export type ApplicationResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ApplicationResponseWhereInput | ApplicationResponseWhereInput[]
    OR?: ApplicationResponseWhereInput[]
    NOT?: ApplicationResponseWhereInput | ApplicationResponseWhereInput[]
    applicationId?: BigIntFilter<"ApplicationResponse"> | bigint | number
    questionId?: BigIntFilter<"ApplicationResponse"> | bigint | number
    value?: StringNullableListFilter<"ApplicationResponse">
    createdAt?: DateTimeFilter<"ApplicationResponse"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationResponse"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    question?: XOR<FormQuestionScalarRelationFilter, FormQuestionWhereInput>
  }, "id">

  export type ApplicationResponseOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    questionId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationResponseCountOrderByAggregateInput
    _avg?: ApplicationResponseAvgOrderByAggregateInput
    _max?: ApplicationResponseMaxOrderByAggregateInput
    _min?: ApplicationResponseMinOrderByAggregateInput
    _sum?: ApplicationResponseSumOrderByAggregateInput
  }

  export type ApplicationResponseScalarWhereWithAggregatesInput = {
    AND?: ApplicationResponseScalarWhereWithAggregatesInput | ApplicationResponseScalarWhereWithAggregatesInput[]
    OR?: ApplicationResponseScalarWhereWithAggregatesInput[]
    NOT?: ApplicationResponseScalarWhereWithAggregatesInput | ApplicationResponseScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ApplicationResponse"> | bigint | number
    applicationId?: BigIntWithAggregatesFilter<"ApplicationResponse"> | bigint | number
    questionId?: BigIntWithAggregatesFilter<"ApplicationResponse"> | bigint | number
    value?: StringNullableListFilter<"ApplicationResponse">
    createdAt?: DateTimeWithAggregatesFilter<"ApplicationResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApplicationResponse"> | Date | string
  }

  export type MatchingRoundWhereInput = {
    AND?: MatchingRoundWhereInput | MatchingRoundWhereInput[]
    OR?: MatchingRoundWhereInput[]
    NOT?: MatchingRoundWhereInput | MatchingRoundWhereInput[]
    id?: BigIntFilter<"MatchingRound"> | bigint | number
    name?: StringFilter<"MatchingRound"> | string
    description?: StringNullableFilter<"MatchingRound"> | string | null
    startAt?: DateTimeFilter<"MatchingRound"> | Date | string
    endAt?: DateTimeFilter<"MatchingRound"> | Date | string
    createdAt?: DateTimeFilter<"MatchingRound"> | Date | string
    updatedAt?: DateTimeFilter<"MatchingRound"> | Date | string
    applications?: ApplicationListRelationFilter
  }

  export type MatchingRoundOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type MatchingRoundWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: MatchingRoundWhereInput | MatchingRoundWhereInput[]
    OR?: MatchingRoundWhereInput[]
    NOT?: MatchingRoundWhereInput | MatchingRoundWhereInput[]
    name?: StringFilter<"MatchingRound"> | string
    description?: StringNullableFilter<"MatchingRound"> | string | null
    startAt?: DateTimeFilter<"MatchingRound"> | Date | string
    endAt?: DateTimeFilter<"MatchingRound"> | Date | string
    createdAt?: DateTimeFilter<"MatchingRound"> | Date | string
    updatedAt?: DateTimeFilter<"MatchingRound"> | Date | string
    applications?: ApplicationListRelationFilter
  }, "id">

  export type MatchingRoundOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchingRoundCountOrderByAggregateInput
    _avg?: MatchingRoundAvgOrderByAggregateInput
    _max?: MatchingRoundMaxOrderByAggregateInput
    _min?: MatchingRoundMinOrderByAggregateInput
    _sum?: MatchingRoundSumOrderByAggregateInput
  }

  export type MatchingRoundScalarWhereWithAggregatesInput = {
    AND?: MatchingRoundScalarWhereWithAggregatesInput | MatchingRoundScalarWhereWithAggregatesInput[]
    OR?: MatchingRoundScalarWhereWithAggregatesInput[]
    NOT?: MatchingRoundScalarWhereWithAggregatesInput | MatchingRoundScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"MatchingRound"> | bigint | number
    name?: StringWithAggregatesFilter<"MatchingRound"> | string
    description?: StringNullableWithAggregatesFilter<"MatchingRound"> | string | null
    startAt?: DateTimeWithAggregatesFilter<"MatchingRound"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"MatchingRound"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MatchingRound"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchingRound"> | Date | string
  }

  export type ChallengerCreateInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutChallengersInput
    gisuRoles?: ChallengerGisuCreateNestedManyWithoutChallengerInput
    ledGisuSchools?: GisuSchoolCreateNestedManyWithoutLeaderInput
    viceLedGisuSchools?: GisuSchoolCreateNestedManyWithoutViceLeaderInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutChallengerInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
  }

  export type ChallengerUncheckedCreateInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    schoolId: bigint | number
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuRoles?: ChallengerGisuUncheckedCreateNestedManyWithoutChallengerInput
    ledGisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutLeaderInput
    viceLedGisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutViceLeaderInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutChallengerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ChallengerUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutChallengersNestedInput
    gisuRoles?: ChallengerGisuUpdateManyWithoutChallengerNestedInput
    ledGisuSchools?: GisuSchoolUpdateManyWithoutLeaderNestedInput
    viceLedGisuSchools?: GisuSchoolUpdateManyWithoutViceLeaderNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutChallengerNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
  }

  export type ChallengerUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuRoles?: ChallengerGisuUncheckedUpdateManyWithoutChallengerNestedInput
    ledGisuSchools?: GisuSchoolUncheckedUpdateManyWithoutLeaderNestedInput
    viceLedGisuSchools?: GisuSchoolUncheckedUpdateManyWithoutViceLeaderNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutChallengerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ChallengerCreateManyInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    schoolId: bigint | number
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengerUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengerUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengerGisuCreateInput = {
    id?: bigint | number
    isSchoolAdmin: boolean
    isChapterAdmin: boolean
    isCentralAdmin: boolean
    schoolAdminType?: string | null
    chapterAdminType?: string | null
    centralAdminType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challenger: ChallengerCreateNestedOneWithoutGisuRolesInput
    gisu: GisuCreateNestedOneWithoutChallengerGisusInput
  }

  export type ChallengerGisuUncheckedCreateInput = {
    id?: bigint | number
    challengerId: bigint | number
    gisuId: bigint | number
    isSchoolAdmin: boolean
    isChapterAdmin: boolean
    isCentralAdmin: boolean
    schoolAdminType?: string | null
    chapterAdminType?: string | null
    centralAdminType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengerGisuUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isSchoolAdmin?: BoolFieldUpdateOperationsInput | boolean
    isChapterAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCentralAdmin?: BoolFieldUpdateOperationsInput | boolean
    schoolAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    chapterAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    centralAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenger?: ChallengerUpdateOneRequiredWithoutGisuRolesNestedInput
    gisu?: GisuUpdateOneRequiredWithoutChallengerGisusNestedInput
  }

  export type ChallengerGisuUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    challengerId?: BigIntFieldUpdateOperationsInput | bigint | number
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    isSchoolAdmin?: BoolFieldUpdateOperationsInput | boolean
    isChapterAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCentralAdmin?: BoolFieldUpdateOperationsInput | boolean
    schoolAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    chapterAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    centralAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengerGisuCreateManyInput = {
    id?: bigint | number
    challengerId: bigint | number
    gisuId: bigint | number
    isSchoolAdmin: boolean
    isChapterAdmin: boolean
    isCentralAdmin: boolean
    schoolAdminType?: string | null
    chapterAdminType?: string | null
    centralAdminType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengerGisuUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isSchoolAdmin?: BoolFieldUpdateOperationsInput | boolean
    isChapterAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCentralAdmin?: BoolFieldUpdateOperationsInput | boolean
    schoolAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    chapterAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    centralAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengerGisuUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    challengerId?: BigIntFieldUpdateOperationsInput | bigint | number
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    isSchoolAdmin?: BoolFieldUpdateOperationsInput | boolean
    isChapterAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCentralAdmin?: BoolFieldUpdateOperationsInput | boolean
    schoolAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    chapterAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    centralAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuSchools?: GisuSchoolCreateNestedManyWithoutGisuInput
    chapters?: ChapterCreateNestedManyWithoutGisuInput
    challengerGisus?: ChallengerGisuCreateNestedManyWithoutGisuInput
  }

  export type GisuUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutGisuInput
    chapters?: ChapterUncheckedCreateNestedManyWithoutGisuInput
    challengerGisus?: ChallengerGisuUncheckedCreateNestedManyWithoutGisuInput
  }

  export type GisuUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuSchools?: GisuSchoolUpdateManyWithoutGisuNestedInput
    chapters?: ChapterUpdateManyWithoutGisuNestedInput
    challengerGisus?: ChallengerGisuUpdateManyWithoutGisuNestedInput
  }

  export type GisuUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuSchools?: GisuSchoolUncheckedUpdateManyWithoutGisuNestedInput
    chapters?: ChapterUncheckedUpdateManyWithoutGisuNestedInput
    challengerGisus?: ChallengerGisuUncheckedUpdateManyWithoutGisuNestedInput
  }

  export type GisuCreateManyInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GisuUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuSchoolCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    gisu: GisuCreateNestedOneWithoutGisuSchoolsInput
    school: SchoolCreateNestedOneWithoutGisuSchoolsInput
    leader: ChallengerCreateNestedOneWithoutLedGisuSchoolsInput
    viceLeader?: ChallengerCreateNestedOneWithoutViceLedGisuSchoolsInput
  }

  export type GisuSchoolUncheckedCreateInput = {
    id?: bigint | number
    gisuId: bigint | number
    schoolId: bigint | number
    leaderId: bigint | number
    viceLeaderId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GisuSchoolUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisu?: GisuUpdateOneRequiredWithoutGisuSchoolsNestedInput
    school?: SchoolUpdateOneRequiredWithoutGisuSchoolsNestedInput
    leader?: ChallengerUpdateOneRequiredWithoutLedGisuSchoolsNestedInput
    viceLeader?: ChallengerUpdateOneWithoutViceLedGisuSchoolsNestedInput
  }

  export type GisuSchoolUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    leaderId?: BigIntFieldUpdateOperationsInput | bigint | number
    viceLeaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuSchoolCreateManyInput = {
    id?: bigint | number
    gisuId: bigint | number
    schoolId: bigint | number
    leaderId: bigint | number
    viceLeaderId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GisuSchoolUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuSchoolUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    leaderId?: BigIntFieldUpdateOperationsInput | bigint | number
    viceLeaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateInput = {
    id?: bigint | number
    name: string
    logoImageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengers?: ChallengerCreateNestedManyWithoutSchoolInput
    gisuSchools?: GisuSchoolCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: bigint | number
    name: string
    logoImageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengers?: ChallengerUncheckedCreateNestedManyWithoutSchoolInput
    gisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengers?: ChallengerUpdateManyWithoutSchoolNestedInput
    gisuSchools?: GisuSchoolUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengers?: ChallengerUncheckedUpdateManyWithoutSchoolNestedInput
    gisuSchools?: GisuSchoolUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: bigint | number
    name: string
    logoImageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisu: GisuCreateNestedOneWithoutChaptersInput
    projects?: ProjectCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    gisuId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisu?: GisuUpdateOneRequiredWithoutChaptersNestedInput
    projects?: ProjectUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterCreateManyInput = {
    id?: bigint | number
    name: string
    description?: string | null
    gisuId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    logoImageUrl?: string | null
    bannerImageUrl?: string | null
    planTo: number
    designTo: number
    webTo: number
    androidTo: number
    iosTo: number
    springbootTo: number
    nodejsTo: number
    createdAt?: Date | string
    updatedAt?: Date | string
    chapter: ChapterCreateNestedOneWithoutProjectsInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    applicationForms?: ApplicationFormCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    chapterId: bigint | number
    logoImageUrl?: string | null
    bannerImageUrl?: string | null
    planTo: number
    designTo: number
    webTo: number
    androidTo: number
    iosTo: number
    springbootTo: number
    nodejsTo: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    applicationForms?: ApplicationFormUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    planTo?: IntFieldUpdateOperationsInput | number
    designTo?: IntFieldUpdateOperationsInput | number
    webTo?: IntFieldUpdateOperationsInput | number
    androidTo?: IntFieldUpdateOperationsInput | number
    iosTo?: IntFieldUpdateOperationsInput | number
    springbootTo?: IntFieldUpdateOperationsInput | number
    nodejsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutProjectsNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    applicationForms?: ApplicationFormUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapterId?: BigIntFieldUpdateOperationsInput | bigint | number
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    planTo?: IntFieldUpdateOperationsInput | number
    designTo?: IntFieldUpdateOperationsInput | number
    webTo?: IntFieldUpdateOperationsInput | number
    androidTo?: IntFieldUpdateOperationsInput | number
    iosTo?: IntFieldUpdateOperationsInput | number
    springbootTo?: IntFieldUpdateOperationsInput | number
    nodejsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    applicationForms?: ApplicationFormUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: bigint | number
    name: string
    description?: string | null
    chapterId: bigint | number
    logoImageUrl?: string | null
    bannerImageUrl?: string | null
    planTo: number
    designTo: number
    webTo: number
    androidTo: number
    iosTo: number
    springbootTo: number
    nodejsTo: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    planTo?: IntFieldUpdateOperationsInput | number
    designTo?: IntFieldUpdateOperationsInput | number
    webTo?: IntFieldUpdateOperationsInput | number
    androidTo?: IntFieldUpdateOperationsInput | number
    iosTo?: IntFieldUpdateOperationsInput | number
    springbootTo?: IntFieldUpdateOperationsInput | number
    nodejsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapterId?: BigIntFieldUpdateOperationsInput | bigint | number
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    planTo?: IntFieldUpdateOperationsInput | number
    designTo?: IntFieldUpdateOperationsInput | number
    webTo?: IntFieldUpdateOperationsInput | number
    androidTo?: IntFieldUpdateOperationsInput | number
    iosTo?: IntFieldUpdateOperationsInput | number
    springbootTo?: IntFieldUpdateOperationsInput | number
    nodejsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateInput = {
    id?: bigint | number
    role: $Enums.UserPartEnum
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMembersInput
    challenger: ChallengerCreateNestedOneWithoutProjectMembersInput
  }

  export type ProjectMemberUncheckedCreateInput = {
    id?: bigint | number
    projectId: bigint | number
    challengerId: bigint | number
    role: $Enums.UserPartEnum
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
    challenger?: ChallengerUpdateOneRequiredWithoutProjectMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projectId?: BigIntFieldUpdateOperationsInput | bigint | number
    challengerId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateManyInput = {
    id?: bigint | number
    projectId: bigint | number
    challengerId: bigint | number
    role: $Enums.UserPartEnum
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projectId?: BigIntFieldUpdateOperationsInput | bigint | number
    challengerId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationFormCreateInput = {
    id?: bigint | number
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutApplicationFormsInput
    questions?: FormQuestionCreateNestedManyWithoutFormInput
  }

  export type ApplicationFormUncheckedCreateInput = {
    id?: bigint | number
    projectId: bigint | number
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: FormQuestionUncheckedCreateNestedManyWithoutFormInput
  }

  export type ApplicationFormUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutApplicationFormsNestedInput
    questions?: FormQuestionUpdateManyWithoutFormNestedInput
  }

  export type ApplicationFormUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projectId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: FormQuestionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type ApplicationFormCreateManyInput = {
    id?: bigint | number
    projectId: bigint | number
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationFormUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationFormUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projectId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormQuestionCreateInput = {
    id?: bigint | number
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    form: ApplicationFormCreateNestedOneWithoutQuestionsInput
    responses?: ApplicationResponseCreateNestedManyWithoutQuestionInput
  }

  export type FormQuestionUncheckedCreateInput = {
    id?: bigint | number
    formId: bigint | number
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ApplicationResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type FormQuestionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: ApplicationFormUpdateOneRequiredWithoutQuestionsNestedInput
    responses?: ApplicationResponseUpdateManyWithoutQuestionNestedInput
  }

  export type FormQuestionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    formId?: BigIntFieldUpdateOperationsInput | bigint | number
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ApplicationResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type FormQuestionCreateManyInput = {
    id?: bigint | number
    formId: bigint | number
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
    id?: BigIntFieldUpdateOperationsInput | bigint | number
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
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    formId?: BigIntFieldUpdateOperationsInput | bigint | number
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

  export type ApplicationCreateInput = {
    id?: bigint | number
    status: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ChallengerCreateNestedOneWithoutApplicationsInput
    matchingRound: MatchingRoundCreateNestedOneWithoutApplicationsInput
    responses?: ApplicationResponseCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: bigint | number
    applicantId: bigint | number
    matchingRoundId: bigint | number
    status: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ApplicationResponseUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ChallengerUpdateOneRequiredWithoutApplicationsNestedInput
    matchingRound?: MatchingRoundUpdateOneRequiredWithoutApplicationsNestedInput
    responses?: ApplicationResponseUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applicantId?: BigIntFieldUpdateOperationsInput | bigint | number
    matchingRoundId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ApplicationResponseUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: bigint | number
    applicantId: bigint | number
    matchingRoundId: bigint | number
    status: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applicantId?: BigIntFieldUpdateOperationsInput | bigint | number
    matchingRoundId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationResponseCreateInput = {
    id?: bigint | number
    value?: ApplicationResponseCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutResponsesInput
    question: FormQuestionCreateNestedOneWithoutResponsesInput
  }

  export type ApplicationResponseUncheckedCreateInput = {
    id?: bigint | number
    applicationId: bigint | number
    questionId: bigint | number
    value?: ApplicationResponseCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationResponseUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: ApplicationResponseUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutResponsesNestedInput
    question?: FormQuestionUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ApplicationResponseUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applicationId?: BigIntFieldUpdateOperationsInput | bigint | number
    questionId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: ApplicationResponseUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationResponseCreateManyInput = {
    id?: bigint | number
    applicationId: bigint | number
    questionId: bigint | number
    value?: ApplicationResponseCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationResponseUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: ApplicationResponseUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationResponseUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applicationId?: BigIntFieldUpdateOperationsInput | bigint | number
    questionId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: ApplicationResponseUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingRoundCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutMatchingRoundInput
  }

  export type MatchingRoundUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutMatchingRoundInput
  }

  export type MatchingRoundUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutMatchingRoundNestedInput
  }

  export type MatchingRoundUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutMatchingRoundNestedInput
  }

  export type MatchingRoundCreateManyInput = {
    id?: bigint | number
    name: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchingRoundUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingRoundUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type EnumGenderEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel>
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderEnumFilter<$PrismaModel> | $Enums.GenderEnum
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

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type ChallengerGisuListRelationFilter = {
    every?: ChallengerGisuWhereInput
    some?: ChallengerGisuWhereInput
    none?: ChallengerGisuWhereInput
  }

  export type GisuSchoolListRelationFilter = {
    every?: GisuSchoolWhereInput
    some?: GisuSchoolWhereInput
    none?: GisuSchoolWhereInput
  }

  export type ProjectMemberListRelationFilter = {
    every?: ProjectMemberWhereInput
    some?: ProjectMemberWhereInput
    none?: ProjectMemberWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChallengerGisuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GisuSchoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengerCountOrderByAggregateInput = {
    id?: SortOrder
    umsbId?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    gender?: SortOrder
    schoolId?: SortOrder
    studentId?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengerAvgOrderByAggregateInput = {
    id?: SortOrder
    umsbId?: SortOrder
    schoolId?: SortOrder
  }

  export type ChallengerMaxOrderByAggregateInput = {
    id?: SortOrder
    umsbId?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    gender?: SortOrder
    schoolId?: SortOrder
    studentId?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengerMinOrderByAggregateInput = {
    id?: SortOrder
    umsbId?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    gender?: SortOrder
    schoolId?: SortOrder
    studentId?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengerSumOrderByAggregateInput = {
    id?: SortOrder
    umsbId?: SortOrder
    schoolId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type EnumGenderEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel>
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderEnumWithAggregatesFilter<$PrismaModel> | $Enums.GenderEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderEnumFilter<$PrismaModel>
    _max?: NestedEnumGenderEnumFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChallengerScalarRelationFilter = {
    is?: ChallengerWhereInput
    isNot?: ChallengerWhereInput
  }

  export type GisuScalarRelationFilter = {
    is?: GisuWhereInput
    isNot?: GisuWhereInput
  }

  export type ChallengerGisuCountOrderByAggregateInput = {
    id?: SortOrder
    challengerId?: SortOrder
    gisuId?: SortOrder
    isSchoolAdmin?: SortOrder
    isChapterAdmin?: SortOrder
    isCentralAdmin?: SortOrder
    schoolAdminType?: SortOrder
    chapterAdminType?: SortOrder
    centralAdminType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengerGisuAvgOrderByAggregateInput = {
    id?: SortOrder
    challengerId?: SortOrder
    gisuId?: SortOrder
  }

  export type ChallengerGisuMaxOrderByAggregateInput = {
    id?: SortOrder
    challengerId?: SortOrder
    gisuId?: SortOrder
    isSchoolAdmin?: SortOrder
    isChapterAdmin?: SortOrder
    isCentralAdmin?: SortOrder
    schoolAdminType?: SortOrder
    chapterAdminType?: SortOrder
    centralAdminType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengerGisuMinOrderByAggregateInput = {
    id?: SortOrder
    challengerId?: SortOrder
    gisuId?: SortOrder
    isSchoolAdmin?: SortOrder
    isChapterAdmin?: SortOrder
    isCentralAdmin?: SortOrder
    schoolAdminType?: SortOrder
    chapterAdminType?: SortOrder
    centralAdminType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengerGisuSumOrderByAggregateInput = {
    id?: SortOrder
    challengerId?: SortOrder
    gisuId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GisuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GisuAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GisuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GisuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GisuSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type ChallengerNullableScalarRelationFilter = {
    is?: ChallengerWhereInput | null
    isNot?: ChallengerWhereInput | null
  }

  export type GisuSchoolCountOrderByAggregateInput = {
    id?: SortOrder
    gisuId?: SortOrder
    schoolId?: SortOrder
    leaderId?: SortOrder
    viceLeaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GisuSchoolAvgOrderByAggregateInput = {
    id?: SortOrder
    gisuId?: SortOrder
    schoolId?: SortOrder
    leaderId?: SortOrder
    viceLeaderId?: SortOrder
  }

  export type GisuSchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    gisuId?: SortOrder
    schoolId?: SortOrder
    leaderId?: SortOrder
    viceLeaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GisuSchoolMinOrderByAggregateInput = {
    id?: SortOrder
    gisuId?: SortOrder
    schoolId?: SortOrder
    leaderId?: SortOrder
    viceLeaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GisuSchoolSumOrderByAggregateInput = {
    id?: SortOrder
    gisuId?: SortOrder
    schoolId?: SortOrder
    leaderId?: SortOrder
    viceLeaderId?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ChallengerListRelationFilter = {
    every?: ChallengerWhereInput
    some?: ChallengerWhereInput
    none?: ChallengerWhereInput
  }

  export type ChallengerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoImageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoImageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoImageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    gisuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterAvgOrderByAggregateInput = {
    id?: SortOrder
    gisuId?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    gisuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    gisuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterSumOrderByAggregateInput = {
    id?: SortOrder
    gisuId?: SortOrder
  }

  export type ChapterScalarRelationFilter = {
    is?: ChapterWhereInput
    isNot?: ChapterWhereInput
  }

  export type ApplicationFormListRelationFilter = {
    every?: ApplicationFormWhereInput
    some?: ApplicationFormWhereInput
    none?: ApplicationFormWhereInput
  }

  export type ApplicationFormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    chapterId?: SortOrder
    logoImageUrl?: SortOrder
    bannerImageUrl?: SortOrder
    planTo?: SortOrder
    designTo?: SortOrder
    webTo?: SortOrder
    androidTo?: SortOrder
    iosTo?: SortOrder
    springbootTo?: SortOrder
    nodejsTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    chapterId?: SortOrder
    planTo?: SortOrder
    designTo?: SortOrder
    webTo?: SortOrder
    androidTo?: SortOrder
    iosTo?: SortOrder
    springbootTo?: SortOrder
    nodejsTo?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    chapterId?: SortOrder
    logoImageUrl?: SortOrder
    bannerImageUrl?: SortOrder
    planTo?: SortOrder
    designTo?: SortOrder
    webTo?: SortOrder
    androidTo?: SortOrder
    iosTo?: SortOrder
    springbootTo?: SortOrder
    nodejsTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    chapterId?: SortOrder
    logoImageUrl?: SortOrder
    bannerImageUrl?: SortOrder
    planTo?: SortOrder
    designTo?: SortOrder
    webTo?: SortOrder
    androidTo?: SortOrder
    iosTo?: SortOrder
    springbootTo?: SortOrder
    nodejsTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    chapterId?: SortOrder
    planTo?: SortOrder
    designTo?: SortOrder
    webTo?: SortOrder
    androidTo?: SortOrder
    iosTo?: SortOrder
    springbootTo?: SortOrder
    nodejsTo?: SortOrder
  }

  export type EnumUserPartEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPartEnum | EnumUserPartEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserPartEnum[] | ListEnumUserPartEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPartEnum[] | ListEnumUserPartEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPartEnumFilter<$PrismaModel> | $Enums.UserPartEnum
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectMemberCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    challengerId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    challengerId?: SortOrder
  }

  export type ProjectMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    challengerId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMemberMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    challengerId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMemberSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    challengerId?: SortOrder
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

  export type FormQuestionListRelationFilter = {
    every?: FormQuestionWhereInput
    some?: FormQuestionWhereInput
    none?: FormQuestionWhereInput
  }

  export type FormQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationFormCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationFormAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type ApplicationFormMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationFormMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationFormSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type EnumQuestionTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionTypeEnum | EnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionTypeEnum[] | ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionTypeEnum[] | ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeEnumFilter<$PrismaModel> | $Enums.QuestionTypeEnum
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ApplicationFormScalarRelationFilter = {
    is?: ApplicationFormWhereInput
    isNot?: ApplicationFormWhereInput
  }

  export type ApplicationResponseListRelationFilter = {
    every?: ApplicationResponseWhereInput
    some?: ApplicationResponseWhereInput
    none?: ApplicationResponseWhereInput
  }

  export type ApplicationResponseOrderByRelationAggregateInput = {
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
    id?: SortOrder
    formId?: SortOrder
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
    id?: SortOrder
    formId?: SortOrder
    questionNo?: SortOrder
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

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    matchingRoundId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    matchingRoundId?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    matchingRoundId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    matchingRoundId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    matchingRoundId?: SortOrder
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

  export type ApplicationScalarRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type FormQuestionScalarRelationFilter = {
    is?: FormQuestionWhereInput
    isNot?: FormQuestionWhereInput
  }

  export type ApplicationResponseCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    questionId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationResponseAvgOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    questionId?: SortOrder
  }

  export type ApplicationResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationResponseMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    questionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationResponseSumOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    questionId?: SortOrder
  }

  export type MatchingRoundCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchingRoundAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MatchingRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchingRoundMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchingRoundSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SchoolCreateNestedOneWithoutChallengersInput = {
    create?: XOR<SchoolCreateWithoutChallengersInput, SchoolUncheckedCreateWithoutChallengersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutChallengersInput
    connect?: SchoolWhereUniqueInput
  }

  export type ChallengerGisuCreateNestedManyWithoutChallengerInput = {
    create?: XOR<ChallengerGisuCreateWithoutChallengerInput, ChallengerGisuUncheckedCreateWithoutChallengerInput> | ChallengerGisuCreateWithoutChallengerInput[] | ChallengerGisuUncheckedCreateWithoutChallengerInput[]
    connectOrCreate?: ChallengerGisuCreateOrConnectWithoutChallengerInput | ChallengerGisuCreateOrConnectWithoutChallengerInput[]
    createMany?: ChallengerGisuCreateManyChallengerInputEnvelope
    connect?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
  }

  export type GisuSchoolCreateNestedManyWithoutLeaderInput = {
    create?: XOR<GisuSchoolCreateWithoutLeaderInput, GisuSchoolUncheckedCreateWithoutLeaderInput> | GisuSchoolCreateWithoutLeaderInput[] | GisuSchoolUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutLeaderInput | GisuSchoolCreateOrConnectWithoutLeaderInput[]
    createMany?: GisuSchoolCreateManyLeaderInputEnvelope
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
  }

  export type GisuSchoolCreateNestedManyWithoutViceLeaderInput = {
    create?: XOR<GisuSchoolCreateWithoutViceLeaderInput, GisuSchoolUncheckedCreateWithoutViceLeaderInput> | GisuSchoolCreateWithoutViceLeaderInput[] | GisuSchoolUncheckedCreateWithoutViceLeaderInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutViceLeaderInput | GisuSchoolCreateOrConnectWithoutViceLeaderInput[]
    createMany?: GisuSchoolCreateManyViceLeaderInputEnvelope
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
  }

  export type ProjectMemberCreateNestedManyWithoutChallengerInput = {
    create?: XOR<ProjectMemberCreateWithoutChallengerInput, ProjectMemberUncheckedCreateWithoutChallengerInput> | ProjectMemberCreateWithoutChallengerInput[] | ProjectMemberUncheckedCreateWithoutChallengerInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutChallengerInput | ProjectMemberCreateOrConnectWithoutChallengerInput[]
    createMany?: ProjectMemberCreateManyChallengerInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ChallengerGisuUncheckedCreateNestedManyWithoutChallengerInput = {
    create?: XOR<ChallengerGisuCreateWithoutChallengerInput, ChallengerGisuUncheckedCreateWithoutChallengerInput> | ChallengerGisuCreateWithoutChallengerInput[] | ChallengerGisuUncheckedCreateWithoutChallengerInput[]
    connectOrCreate?: ChallengerGisuCreateOrConnectWithoutChallengerInput | ChallengerGisuCreateOrConnectWithoutChallengerInput[]
    createMany?: ChallengerGisuCreateManyChallengerInputEnvelope
    connect?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
  }

  export type GisuSchoolUncheckedCreateNestedManyWithoutLeaderInput = {
    create?: XOR<GisuSchoolCreateWithoutLeaderInput, GisuSchoolUncheckedCreateWithoutLeaderInput> | GisuSchoolCreateWithoutLeaderInput[] | GisuSchoolUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutLeaderInput | GisuSchoolCreateOrConnectWithoutLeaderInput[]
    createMany?: GisuSchoolCreateManyLeaderInputEnvelope
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
  }

  export type GisuSchoolUncheckedCreateNestedManyWithoutViceLeaderInput = {
    create?: XOR<GisuSchoolCreateWithoutViceLeaderInput, GisuSchoolUncheckedCreateWithoutViceLeaderInput> | GisuSchoolCreateWithoutViceLeaderInput[] | GisuSchoolUncheckedCreateWithoutViceLeaderInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutViceLeaderInput | GisuSchoolCreateOrConnectWithoutViceLeaderInput[]
    createMany?: GisuSchoolCreateManyViceLeaderInputEnvelope
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutChallengerInput = {
    create?: XOR<ProjectMemberCreateWithoutChallengerInput, ProjectMemberUncheckedCreateWithoutChallengerInput> | ProjectMemberCreateWithoutChallengerInput[] | ProjectMemberUncheckedCreateWithoutChallengerInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutChallengerInput | ProjectMemberCreateOrConnectWithoutChallengerInput[]
    createMany?: ProjectMemberCreateManyChallengerInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGenderEnumFieldUpdateOperationsInput = {
    set?: $Enums.GenderEnum
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SchoolUpdateOneRequiredWithoutChallengersNestedInput = {
    create?: XOR<SchoolCreateWithoutChallengersInput, SchoolUncheckedCreateWithoutChallengersInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutChallengersInput
    upsert?: SchoolUpsertWithoutChallengersInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutChallengersInput, SchoolUpdateWithoutChallengersInput>, SchoolUncheckedUpdateWithoutChallengersInput>
  }

  export type ChallengerGisuUpdateManyWithoutChallengerNestedInput = {
    create?: XOR<ChallengerGisuCreateWithoutChallengerInput, ChallengerGisuUncheckedCreateWithoutChallengerInput> | ChallengerGisuCreateWithoutChallengerInput[] | ChallengerGisuUncheckedCreateWithoutChallengerInput[]
    connectOrCreate?: ChallengerGisuCreateOrConnectWithoutChallengerInput | ChallengerGisuCreateOrConnectWithoutChallengerInput[]
    upsert?: ChallengerGisuUpsertWithWhereUniqueWithoutChallengerInput | ChallengerGisuUpsertWithWhereUniqueWithoutChallengerInput[]
    createMany?: ChallengerGisuCreateManyChallengerInputEnvelope
    set?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    disconnect?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    delete?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    connect?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    update?: ChallengerGisuUpdateWithWhereUniqueWithoutChallengerInput | ChallengerGisuUpdateWithWhereUniqueWithoutChallengerInput[]
    updateMany?: ChallengerGisuUpdateManyWithWhereWithoutChallengerInput | ChallengerGisuUpdateManyWithWhereWithoutChallengerInput[]
    deleteMany?: ChallengerGisuScalarWhereInput | ChallengerGisuScalarWhereInput[]
  }

  export type GisuSchoolUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<GisuSchoolCreateWithoutLeaderInput, GisuSchoolUncheckedCreateWithoutLeaderInput> | GisuSchoolCreateWithoutLeaderInput[] | GisuSchoolUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutLeaderInput | GisuSchoolCreateOrConnectWithoutLeaderInput[]
    upsert?: GisuSchoolUpsertWithWhereUniqueWithoutLeaderInput | GisuSchoolUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: GisuSchoolCreateManyLeaderInputEnvelope
    set?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    disconnect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    delete?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    update?: GisuSchoolUpdateWithWhereUniqueWithoutLeaderInput | GisuSchoolUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: GisuSchoolUpdateManyWithWhereWithoutLeaderInput | GisuSchoolUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: GisuSchoolScalarWhereInput | GisuSchoolScalarWhereInput[]
  }

  export type GisuSchoolUpdateManyWithoutViceLeaderNestedInput = {
    create?: XOR<GisuSchoolCreateWithoutViceLeaderInput, GisuSchoolUncheckedCreateWithoutViceLeaderInput> | GisuSchoolCreateWithoutViceLeaderInput[] | GisuSchoolUncheckedCreateWithoutViceLeaderInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutViceLeaderInput | GisuSchoolCreateOrConnectWithoutViceLeaderInput[]
    upsert?: GisuSchoolUpsertWithWhereUniqueWithoutViceLeaderInput | GisuSchoolUpsertWithWhereUniqueWithoutViceLeaderInput[]
    createMany?: GisuSchoolCreateManyViceLeaderInputEnvelope
    set?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    disconnect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    delete?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    update?: GisuSchoolUpdateWithWhereUniqueWithoutViceLeaderInput | GisuSchoolUpdateWithWhereUniqueWithoutViceLeaderInput[]
    updateMany?: GisuSchoolUpdateManyWithWhereWithoutViceLeaderInput | GisuSchoolUpdateManyWithWhereWithoutViceLeaderInput[]
    deleteMany?: GisuSchoolScalarWhereInput | GisuSchoolScalarWhereInput[]
  }

  export type ProjectMemberUpdateManyWithoutChallengerNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutChallengerInput, ProjectMemberUncheckedCreateWithoutChallengerInput> | ProjectMemberCreateWithoutChallengerInput[] | ProjectMemberUncheckedCreateWithoutChallengerInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutChallengerInput | ProjectMemberCreateOrConnectWithoutChallengerInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutChallengerInput | ProjectMemberUpsertWithWhereUniqueWithoutChallengerInput[]
    createMany?: ProjectMemberCreateManyChallengerInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutChallengerInput | ProjectMemberUpdateWithWhereUniqueWithoutChallengerInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutChallengerInput | ProjectMemberUpdateManyWithWhereWithoutChallengerInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
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

  export type ChallengerGisuUncheckedUpdateManyWithoutChallengerNestedInput = {
    create?: XOR<ChallengerGisuCreateWithoutChallengerInput, ChallengerGisuUncheckedCreateWithoutChallengerInput> | ChallengerGisuCreateWithoutChallengerInput[] | ChallengerGisuUncheckedCreateWithoutChallengerInput[]
    connectOrCreate?: ChallengerGisuCreateOrConnectWithoutChallengerInput | ChallengerGisuCreateOrConnectWithoutChallengerInput[]
    upsert?: ChallengerGisuUpsertWithWhereUniqueWithoutChallengerInput | ChallengerGisuUpsertWithWhereUniqueWithoutChallengerInput[]
    createMany?: ChallengerGisuCreateManyChallengerInputEnvelope
    set?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    disconnect?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    delete?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    connect?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    update?: ChallengerGisuUpdateWithWhereUniqueWithoutChallengerInput | ChallengerGisuUpdateWithWhereUniqueWithoutChallengerInput[]
    updateMany?: ChallengerGisuUpdateManyWithWhereWithoutChallengerInput | ChallengerGisuUpdateManyWithWhereWithoutChallengerInput[]
    deleteMany?: ChallengerGisuScalarWhereInput | ChallengerGisuScalarWhereInput[]
  }

  export type GisuSchoolUncheckedUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<GisuSchoolCreateWithoutLeaderInput, GisuSchoolUncheckedCreateWithoutLeaderInput> | GisuSchoolCreateWithoutLeaderInput[] | GisuSchoolUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutLeaderInput | GisuSchoolCreateOrConnectWithoutLeaderInput[]
    upsert?: GisuSchoolUpsertWithWhereUniqueWithoutLeaderInput | GisuSchoolUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: GisuSchoolCreateManyLeaderInputEnvelope
    set?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    disconnect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    delete?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    update?: GisuSchoolUpdateWithWhereUniqueWithoutLeaderInput | GisuSchoolUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: GisuSchoolUpdateManyWithWhereWithoutLeaderInput | GisuSchoolUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: GisuSchoolScalarWhereInput | GisuSchoolScalarWhereInput[]
  }

  export type GisuSchoolUncheckedUpdateManyWithoutViceLeaderNestedInput = {
    create?: XOR<GisuSchoolCreateWithoutViceLeaderInput, GisuSchoolUncheckedCreateWithoutViceLeaderInput> | GisuSchoolCreateWithoutViceLeaderInput[] | GisuSchoolUncheckedCreateWithoutViceLeaderInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutViceLeaderInput | GisuSchoolCreateOrConnectWithoutViceLeaderInput[]
    upsert?: GisuSchoolUpsertWithWhereUniqueWithoutViceLeaderInput | GisuSchoolUpsertWithWhereUniqueWithoutViceLeaderInput[]
    createMany?: GisuSchoolCreateManyViceLeaderInputEnvelope
    set?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    disconnect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    delete?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    update?: GisuSchoolUpdateWithWhereUniqueWithoutViceLeaderInput | GisuSchoolUpdateWithWhereUniqueWithoutViceLeaderInput[]
    updateMany?: GisuSchoolUpdateManyWithWhereWithoutViceLeaderInput | GisuSchoolUpdateManyWithWhereWithoutViceLeaderInput[]
    deleteMany?: GisuSchoolScalarWhereInput | GisuSchoolScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutChallengerNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutChallengerInput, ProjectMemberUncheckedCreateWithoutChallengerInput> | ProjectMemberCreateWithoutChallengerInput[] | ProjectMemberUncheckedCreateWithoutChallengerInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutChallengerInput | ProjectMemberCreateOrConnectWithoutChallengerInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutChallengerInput | ProjectMemberUpsertWithWhereUniqueWithoutChallengerInput[]
    createMany?: ProjectMemberCreateManyChallengerInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutChallengerInput | ProjectMemberUpdateWithWhereUniqueWithoutChallengerInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutChallengerInput | ProjectMemberUpdateManyWithWhereWithoutChallengerInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
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

  export type ChallengerCreateNestedOneWithoutGisuRolesInput = {
    create?: XOR<ChallengerCreateWithoutGisuRolesInput, ChallengerUncheckedCreateWithoutGisuRolesInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutGisuRolesInput
    connect?: ChallengerWhereUniqueInput
  }

  export type GisuCreateNestedOneWithoutChallengerGisusInput = {
    create?: XOR<GisuCreateWithoutChallengerGisusInput, GisuUncheckedCreateWithoutChallengerGisusInput>
    connectOrCreate?: GisuCreateOrConnectWithoutChallengerGisusInput
    connect?: GisuWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChallengerUpdateOneRequiredWithoutGisuRolesNestedInput = {
    create?: XOR<ChallengerCreateWithoutGisuRolesInput, ChallengerUncheckedCreateWithoutGisuRolesInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutGisuRolesInput
    upsert?: ChallengerUpsertWithoutGisuRolesInput
    connect?: ChallengerWhereUniqueInput
    update?: XOR<XOR<ChallengerUpdateToOneWithWhereWithoutGisuRolesInput, ChallengerUpdateWithoutGisuRolesInput>, ChallengerUncheckedUpdateWithoutGisuRolesInput>
  }

  export type GisuUpdateOneRequiredWithoutChallengerGisusNestedInput = {
    create?: XOR<GisuCreateWithoutChallengerGisusInput, GisuUncheckedCreateWithoutChallengerGisusInput>
    connectOrCreate?: GisuCreateOrConnectWithoutChallengerGisusInput
    upsert?: GisuUpsertWithoutChallengerGisusInput
    connect?: GisuWhereUniqueInput
    update?: XOR<XOR<GisuUpdateToOneWithWhereWithoutChallengerGisusInput, GisuUpdateWithoutChallengerGisusInput>, GisuUncheckedUpdateWithoutChallengerGisusInput>
  }

  export type GisuSchoolCreateNestedManyWithoutGisuInput = {
    create?: XOR<GisuSchoolCreateWithoutGisuInput, GisuSchoolUncheckedCreateWithoutGisuInput> | GisuSchoolCreateWithoutGisuInput[] | GisuSchoolUncheckedCreateWithoutGisuInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutGisuInput | GisuSchoolCreateOrConnectWithoutGisuInput[]
    createMany?: GisuSchoolCreateManyGisuInputEnvelope
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
  }

  export type ChapterCreateNestedManyWithoutGisuInput = {
    create?: XOR<ChapterCreateWithoutGisuInput, ChapterUncheckedCreateWithoutGisuInput> | ChapterCreateWithoutGisuInput[] | ChapterUncheckedCreateWithoutGisuInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutGisuInput | ChapterCreateOrConnectWithoutGisuInput[]
    createMany?: ChapterCreateManyGisuInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ChallengerGisuCreateNestedManyWithoutGisuInput = {
    create?: XOR<ChallengerGisuCreateWithoutGisuInput, ChallengerGisuUncheckedCreateWithoutGisuInput> | ChallengerGisuCreateWithoutGisuInput[] | ChallengerGisuUncheckedCreateWithoutGisuInput[]
    connectOrCreate?: ChallengerGisuCreateOrConnectWithoutGisuInput | ChallengerGisuCreateOrConnectWithoutGisuInput[]
    createMany?: ChallengerGisuCreateManyGisuInputEnvelope
    connect?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
  }

  export type GisuSchoolUncheckedCreateNestedManyWithoutGisuInput = {
    create?: XOR<GisuSchoolCreateWithoutGisuInput, GisuSchoolUncheckedCreateWithoutGisuInput> | GisuSchoolCreateWithoutGisuInput[] | GisuSchoolUncheckedCreateWithoutGisuInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutGisuInput | GisuSchoolCreateOrConnectWithoutGisuInput[]
    createMany?: GisuSchoolCreateManyGisuInputEnvelope
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
  }

  export type ChapterUncheckedCreateNestedManyWithoutGisuInput = {
    create?: XOR<ChapterCreateWithoutGisuInput, ChapterUncheckedCreateWithoutGisuInput> | ChapterCreateWithoutGisuInput[] | ChapterUncheckedCreateWithoutGisuInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutGisuInput | ChapterCreateOrConnectWithoutGisuInput[]
    createMany?: ChapterCreateManyGisuInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ChallengerGisuUncheckedCreateNestedManyWithoutGisuInput = {
    create?: XOR<ChallengerGisuCreateWithoutGisuInput, ChallengerGisuUncheckedCreateWithoutGisuInput> | ChallengerGisuCreateWithoutGisuInput[] | ChallengerGisuUncheckedCreateWithoutGisuInput[]
    connectOrCreate?: ChallengerGisuCreateOrConnectWithoutGisuInput | ChallengerGisuCreateOrConnectWithoutGisuInput[]
    createMany?: ChallengerGisuCreateManyGisuInputEnvelope
    connect?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
  }

  export type GisuSchoolUpdateManyWithoutGisuNestedInput = {
    create?: XOR<GisuSchoolCreateWithoutGisuInput, GisuSchoolUncheckedCreateWithoutGisuInput> | GisuSchoolCreateWithoutGisuInput[] | GisuSchoolUncheckedCreateWithoutGisuInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutGisuInput | GisuSchoolCreateOrConnectWithoutGisuInput[]
    upsert?: GisuSchoolUpsertWithWhereUniqueWithoutGisuInput | GisuSchoolUpsertWithWhereUniqueWithoutGisuInput[]
    createMany?: GisuSchoolCreateManyGisuInputEnvelope
    set?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    disconnect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    delete?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    update?: GisuSchoolUpdateWithWhereUniqueWithoutGisuInput | GisuSchoolUpdateWithWhereUniqueWithoutGisuInput[]
    updateMany?: GisuSchoolUpdateManyWithWhereWithoutGisuInput | GisuSchoolUpdateManyWithWhereWithoutGisuInput[]
    deleteMany?: GisuSchoolScalarWhereInput | GisuSchoolScalarWhereInput[]
  }

  export type ChapterUpdateManyWithoutGisuNestedInput = {
    create?: XOR<ChapterCreateWithoutGisuInput, ChapterUncheckedCreateWithoutGisuInput> | ChapterCreateWithoutGisuInput[] | ChapterUncheckedCreateWithoutGisuInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutGisuInput | ChapterCreateOrConnectWithoutGisuInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutGisuInput | ChapterUpsertWithWhereUniqueWithoutGisuInput[]
    createMany?: ChapterCreateManyGisuInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutGisuInput | ChapterUpdateWithWhereUniqueWithoutGisuInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutGisuInput | ChapterUpdateManyWithWhereWithoutGisuInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type ChallengerGisuUpdateManyWithoutGisuNestedInput = {
    create?: XOR<ChallengerGisuCreateWithoutGisuInput, ChallengerGisuUncheckedCreateWithoutGisuInput> | ChallengerGisuCreateWithoutGisuInput[] | ChallengerGisuUncheckedCreateWithoutGisuInput[]
    connectOrCreate?: ChallengerGisuCreateOrConnectWithoutGisuInput | ChallengerGisuCreateOrConnectWithoutGisuInput[]
    upsert?: ChallengerGisuUpsertWithWhereUniqueWithoutGisuInput | ChallengerGisuUpsertWithWhereUniqueWithoutGisuInput[]
    createMany?: ChallengerGisuCreateManyGisuInputEnvelope
    set?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    disconnect?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    delete?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    connect?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    update?: ChallengerGisuUpdateWithWhereUniqueWithoutGisuInput | ChallengerGisuUpdateWithWhereUniqueWithoutGisuInput[]
    updateMany?: ChallengerGisuUpdateManyWithWhereWithoutGisuInput | ChallengerGisuUpdateManyWithWhereWithoutGisuInput[]
    deleteMany?: ChallengerGisuScalarWhereInput | ChallengerGisuScalarWhereInput[]
  }

  export type GisuSchoolUncheckedUpdateManyWithoutGisuNestedInput = {
    create?: XOR<GisuSchoolCreateWithoutGisuInput, GisuSchoolUncheckedCreateWithoutGisuInput> | GisuSchoolCreateWithoutGisuInput[] | GisuSchoolUncheckedCreateWithoutGisuInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutGisuInput | GisuSchoolCreateOrConnectWithoutGisuInput[]
    upsert?: GisuSchoolUpsertWithWhereUniqueWithoutGisuInput | GisuSchoolUpsertWithWhereUniqueWithoutGisuInput[]
    createMany?: GisuSchoolCreateManyGisuInputEnvelope
    set?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    disconnect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    delete?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    update?: GisuSchoolUpdateWithWhereUniqueWithoutGisuInput | GisuSchoolUpdateWithWhereUniqueWithoutGisuInput[]
    updateMany?: GisuSchoolUpdateManyWithWhereWithoutGisuInput | GisuSchoolUpdateManyWithWhereWithoutGisuInput[]
    deleteMany?: GisuSchoolScalarWhereInput | GisuSchoolScalarWhereInput[]
  }

  export type ChapterUncheckedUpdateManyWithoutGisuNestedInput = {
    create?: XOR<ChapterCreateWithoutGisuInput, ChapterUncheckedCreateWithoutGisuInput> | ChapterCreateWithoutGisuInput[] | ChapterUncheckedCreateWithoutGisuInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutGisuInput | ChapterCreateOrConnectWithoutGisuInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutGisuInput | ChapterUpsertWithWhereUniqueWithoutGisuInput[]
    createMany?: ChapterCreateManyGisuInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutGisuInput | ChapterUpdateWithWhereUniqueWithoutGisuInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutGisuInput | ChapterUpdateManyWithWhereWithoutGisuInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type ChallengerGisuUncheckedUpdateManyWithoutGisuNestedInput = {
    create?: XOR<ChallengerGisuCreateWithoutGisuInput, ChallengerGisuUncheckedCreateWithoutGisuInput> | ChallengerGisuCreateWithoutGisuInput[] | ChallengerGisuUncheckedCreateWithoutGisuInput[]
    connectOrCreate?: ChallengerGisuCreateOrConnectWithoutGisuInput | ChallengerGisuCreateOrConnectWithoutGisuInput[]
    upsert?: ChallengerGisuUpsertWithWhereUniqueWithoutGisuInput | ChallengerGisuUpsertWithWhereUniqueWithoutGisuInput[]
    createMany?: ChallengerGisuCreateManyGisuInputEnvelope
    set?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    disconnect?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    delete?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    connect?: ChallengerGisuWhereUniqueInput | ChallengerGisuWhereUniqueInput[]
    update?: ChallengerGisuUpdateWithWhereUniqueWithoutGisuInput | ChallengerGisuUpdateWithWhereUniqueWithoutGisuInput[]
    updateMany?: ChallengerGisuUpdateManyWithWhereWithoutGisuInput | ChallengerGisuUpdateManyWithWhereWithoutGisuInput[]
    deleteMany?: ChallengerGisuScalarWhereInput | ChallengerGisuScalarWhereInput[]
  }

  export type GisuCreateNestedOneWithoutGisuSchoolsInput = {
    create?: XOR<GisuCreateWithoutGisuSchoolsInput, GisuUncheckedCreateWithoutGisuSchoolsInput>
    connectOrCreate?: GisuCreateOrConnectWithoutGisuSchoolsInput
    connect?: GisuWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutGisuSchoolsInput = {
    create?: XOR<SchoolCreateWithoutGisuSchoolsInput, SchoolUncheckedCreateWithoutGisuSchoolsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutGisuSchoolsInput
    connect?: SchoolWhereUniqueInput
  }

  export type ChallengerCreateNestedOneWithoutLedGisuSchoolsInput = {
    create?: XOR<ChallengerCreateWithoutLedGisuSchoolsInput, ChallengerUncheckedCreateWithoutLedGisuSchoolsInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutLedGisuSchoolsInput
    connect?: ChallengerWhereUniqueInput
  }

  export type ChallengerCreateNestedOneWithoutViceLedGisuSchoolsInput = {
    create?: XOR<ChallengerCreateWithoutViceLedGisuSchoolsInput, ChallengerUncheckedCreateWithoutViceLedGisuSchoolsInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutViceLedGisuSchoolsInput
    connect?: ChallengerWhereUniqueInput
  }

  export type GisuUpdateOneRequiredWithoutGisuSchoolsNestedInput = {
    create?: XOR<GisuCreateWithoutGisuSchoolsInput, GisuUncheckedCreateWithoutGisuSchoolsInput>
    connectOrCreate?: GisuCreateOrConnectWithoutGisuSchoolsInput
    upsert?: GisuUpsertWithoutGisuSchoolsInput
    connect?: GisuWhereUniqueInput
    update?: XOR<XOR<GisuUpdateToOneWithWhereWithoutGisuSchoolsInput, GisuUpdateWithoutGisuSchoolsInput>, GisuUncheckedUpdateWithoutGisuSchoolsInput>
  }

  export type SchoolUpdateOneRequiredWithoutGisuSchoolsNestedInput = {
    create?: XOR<SchoolCreateWithoutGisuSchoolsInput, SchoolUncheckedCreateWithoutGisuSchoolsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutGisuSchoolsInput
    upsert?: SchoolUpsertWithoutGisuSchoolsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutGisuSchoolsInput, SchoolUpdateWithoutGisuSchoolsInput>, SchoolUncheckedUpdateWithoutGisuSchoolsInput>
  }

  export type ChallengerUpdateOneRequiredWithoutLedGisuSchoolsNestedInput = {
    create?: XOR<ChallengerCreateWithoutLedGisuSchoolsInput, ChallengerUncheckedCreateWithoutLedGisuSchoolsInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutLedGisuSchoolsInput
    upsert?: ChallengerUpsertWithoutLedGisuSchoolsInput
    connect?: ChallengerWhereUniqueInput
    update?: XOR<XOR<ChallengerUpdateToOneWithWhereWithoutLedGisuSchoolsInput, ChallengerUpdateWithoutLedGisuSchoolsInput>, ChallengerUncheckedUpdateWithoutLedGisuSchoolsInput>
  }

  export type ChallengerUpdateOneWithoutViceLedGisuSchoolsNestedInput = {
    create?: XOR<ChallengerCreateWithoutViceLedGisuSchoolsInput, ChallengerUncheckedCreateWithoutViceLedGisuSchoolsInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutViceLedGisuSchoolsInput
    upsert?: ChallengerUpsertWithoutViceLedGisuSchoolsInput
    disconnect?: ChallengerWhereInput | boolean
    delete?: ChallengerWhereInput | boolean
    connect?: ChallengerWhereUniqueInput
    update?: XOR<XOR<ChallengerUpdateToOneWithWhereWithoutViceLedGisuSchoolsInput, ChallengerUpdateWithoutViceLedGisuSchoolsInput>, ChallengerUncheckedUpdateWithoutViceLedGisuSchoolsInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ChallengerCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ChallengerCreateWithoutSchoolInput, ChallengerUncheckedCreateWithoutSchoolInput> | ChallengerCreateWithoutSchoolInput[] | ChallengerUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ChallengerCreateOrConnectWithoutSchoolInput | ChallengerCreateOrConnectWithoutSchoolInput[]
    createMany?: ChallengerCreateManySchoolInputEnvelope
    connect?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
  }

  export type GisuSchoolCreateNestedManyWithoutSchoolInput = {
    create?: XOR<GisuSchoolCreateWithoutSchoolInput, GisuSchoolUncheckedCreateWithoutSchoolInput> | GisuSchoolCreateWithoutSchoolInput[] | GisuSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutSchoolInput | GisuSchoolCreateOrConnectWithoutSchoolInput[]
    createMany?: GisuSchoolCreateManySchoolInputEnvelope
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
  }

  export type ChallengerUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ChallengerCreateWithoutSchoolInput, ChallengerUncheckedCreateWithoutSchoolInput> | ChallengerCreateWithoutSchoolInput[] | ChallengerUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ChallengerCreateOrConnectWithoutSchoolInput | ChallengerCreateOrConnectWithoutSchoolInput[]
    createMany?: ChallengerCreateManySchoolInputEnvelope
    connect?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
  }

  export type GisuSchoolUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<GisuSchoolCreateWithoutSchoolInput, GisuSchoolUncheckedCreateWithoutSchoolInput> | GisuSchoolCreateWithoutSchoolInput[] | GisuSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutSchoolInput | GisuSchoolCreateOrConnectWithoutSchoolInput[]
    createMany?: GisuSchoolCreateManySchoolInputEnvelope
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
  }

  export type ChallengerUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ChallengerCreateWithoutSchoolInput, ChallengerUncheckedCreateWithoutSchoolInput> | ChallengerCreateWithoutSchoolInput[] | ChallengerUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ChallengerCreateOrConnectWithoutSchoolInput | ChallengerCreateOrConnectWithoutSchoolInput[]
    upsert?: ChallengerUpsertWithWhereUniqueWithoutSchoolInput | ChallengerUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ChallengerCreateManySchoolInputEnvelope
    set?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    disconnect?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    delete?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    connect?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    update?: ChallengerUpdateWithWhereUniqueWithoutSchoolInput | ChallengerUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ChallengerUpdateManyWithWhereWithoutSchoolInput | ChallengerUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ChallengerScalarWhereInput | ChallengerScalarWhereInput[]
  }

  export type GisuSchoolUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<GisuSchoolCreateWithoutSchoolInput, GisuSchoolUncheckedCreateWithoutSchoolInput> | GisuSchoolCreateWithoutSchoolInput[] | GisuSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutSchoolInput | GisuSchoolCreateOrConnectWithoutSchoolInput[]
    upsert?: GisuSchoolUpsertWithWhereUniqueWithoutSchoolInput | GisuSchoolUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: GisuSchoolCreateManySchoolInputEnvelope
    set?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    disconnect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    delete?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    update?: GisuSchoolUpdateWithWhereUniqueWithoutSchoolInput | GisuSchoolUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: GisuSchoolUpdateManyWithWhereWithoutSchoolInput | GisuSchoolUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: GisuSchoolScalarWhereInput | GisuSchoolScalarWhereInput[]
  }

  export type ChallengerUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ChallengerCreateWithoutSchoolInput, ChallengerUncheckedCreateWithoutSchoolInput> | ChallengerCreateWithoutSchoolInput[] | ChallengerUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ChallengerCreateOrConnectWithoutSchoolInput | ChallengerCreateOrConnectWithoutSchoolInput[]
    upsert?: ChallengerUpsertWithWhereUniqueWithoutSchoolInput | ChallengerUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ChallengerCreateManySchoolInputEnvelope
    set?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    disconnect?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    delete?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    connect?: ChallengerWhereUniqueInput | ChallengerWhereUniqueInput[]
    update?: ChallengerUpdateWithWhereUniqueWithoutSchoolInput | ChallengerUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ChallengerUpdateManyWithWhereWithoutSchoolInput | ChallengerUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ChallengerScalarWhereInput | ChallengerScalarWhereInput[]
  }

  export type GisuSchoolUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<GisuSchoolCreateWithoutSchoolInput, GisuSchoolUncheckedCreateWithoutSchoolInput> | GisuSchoolCreateWithoutSchoolInput[] | GisuSchoolUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: GisuSchoolCreateOrConnectWithoutSchoolInput | GisuSchoolCreateOrConnectWithoutSchoolInput[]
    upsert?: GisuSchoolUpsertWithWhereUniqueWithoutSchoolInput | GisuSchoolUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: GisuSchoolCreateManySchoolInputEnvelope
    set?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    disconnect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    delete?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    connect?: GisuSchoolWhereUniqueInput | GisuSchoolWhereUniqueInput[]
    update?: GisuSchoolUpdateWithWhereUniqueWithoutSchoolInput | GisuSchoolUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: GisuSchoolUpdateManyWithWhereWithoutSchoolInput | GisuSchoolUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: GisuSchoolScalarWhereInput | GisuSchoolScalarWhereInput[]
  }

  export type GisuCreateNestedOneWithoutChaptersInput = {
    create?: XOR<GisuCreateWithoutChaptersInput, GisuUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: GisuCreateOrConnectWithoutChaptersInput
    connect?: GisuWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutChapterInput = {
    create?: XOR<ProjectCreateWithoutChapterInput, ProjectUncheckedCreateWithoutChapterInput> | ProjectCreateWithoutChapterInput[] | ProjectUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutChapterInput | ProjectCreateOrConnectWithoutChapterInput[]
    createMany?: ProjectCreateManyChapterInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<ProjectCreateWithoutChapterInput, ProjectUncheckedCreateWithoutChapterInput> | ProjectCreateWithoutChapterInput[] | ProjectUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutChapterInput | ProjectCreateOrConnectWithoutChapterInput[]
    createMany?: ProjectCreateManyChapterInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type GisuUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<GisuCreateWithoutChaptersInput, GisuUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: GisuCreateOrConnectWithoutChaptersInput
    upsert?: GisuUpsertWithoutChaptersInput
    connect?: GisuWhereUniqueInput
    update?: XOR<XOR<GisuUpdateToOneWithWhereWithoutChaptersInput, GisuUpdateWithoutChaptersInput>, GisuUncheckedUpdateWithoutChaptersInput>
  }

  export type ProjectUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ProjectCreateWithoutChapterInput, ProjectUncheckedCreateWithoutChapterInput> | ProjectCreateWithoutChapterInput[] | ProjectUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutChapterInput | ProjectCreateOrConnectWithoutChapterInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutChapterInput | ProjectUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ProjectCreateManyChapterInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutChapterInput | ProjectUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutChapterInput | ProjectUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ProjectCreateWithoutChapterInput, ProjectUncheckedCreateWithoutChapterInput> | ProjectCreateWithoutChapterInput[] | ProjectUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutChapterInput | ProjectCreateOrConnectWithoutChapterInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutChapterInput | ProjectUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ProjectCreateManyChapterInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutChapterInput | ProjectUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutChapterInput | ProjectUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ChapterCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ChapterCreateWithoutProjectsInput, ChapterUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutProjectsInput
    connect?: ChapterWhereUniqueInput
  }

  export type ProjectMemberCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type ApplicationFormCreateNestedManyWithoutProjectInput = {
    create?: XOR<ApplicationFormCreateWithoutProjectInput, ApplicationFormUncheckedCreateWithoutProjectInput> | ApplicationFormCreateWithoutProjectInput[] | ApplicationFormUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApplicationFormCreateOrConnectWithoutProjectInput | ApplicationFormCreateOrConnectWithoutProjectInput[]
    createMany?: ApplicationFormCreateManyProjectInputEnvelope
    connect?: ApplicationFormWhereUniqueInput | ApplicationFormWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type ApplicationFormUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ApplicationFormCreateWithoutProjectInput, ApplicationFormUncheckedCreateWithoutProjectInput> | ApplicationFormCreateWithoutProjectInput[] | ApplicationFormUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApplicationFormCreateOrConnectWithoutProjectInput | ApplicationFormCreateOrConnectWithoutProjectInput[]
    createMany?: ApplicationFormCreateManyProjectInputEnvelope
    connect?: ApplicationFormWhereUniqueInput | ApplicationFormWhereUniqueInput[]
  }

  export type ChapterUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ChapterCreateWithoutProjectsInput, ChapterUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutProjectsInput
    upsert?: ChapterUpsertWithoutProjectsInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutProjectsInput, ChapterUpdateWithoutProjectsInput>, ChapterUncheckedUpdateWithoutProjectsInput>
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

  export type ApplicationFormUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ApplicationFormCreateWithoutProjectInput, ApplicationFormUncheckedCreateWithoutProjectInput> | ApplicationFormCreateWithoutProjectInput[] | ApplicationFormUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApplicationFormCreateOrConnectWithoutProjectInput | ApplicationFormCreateOrConnectWithoutProjectInput[]
    upsert?: ApplicationFormUpsertWithWhereUniqueWithoutProjectInput | ApplicationFormUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ApplicationFormCreateManyProjectInputEnvelope
    set?: ApplicationFormWhereUniqueInput | ApplicationFormWhereUniqueInput[]
    disconnect?: ApplicationFormWhereUniqueInput | ApplicationFormWhereUniqueInput[]
    delete?: ApplicationFormWhereUniqueInput | ApplicationFormWhereUniqueInput[]
    connect?: ApplicationFormWhereUniqueInput | ApplicationFormWhereUniqueInput[]
    update?: ApplicationFormUpdateWithWhereUniqueWithoutProjectInput | ApplicationFormUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ApplicationFormUpdateManyWithWhereWithoutProjectInput | ApplicationFormUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ApplicationFormScalarWhereInput | ApplicationFormScalarWhereInput[]
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

  export type ApplicationFormUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ApplicationFormCreateWithoutProjectInput, ApplicationFormUncheckedCreateWithoutProjectInput> | ApplicationFormCreateWithoutProjectInput[] | ApplicationFormUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ApplicationFormCreateOrConnectWithoutProjectInput | ApplicationFormCreateOrConnectWithoutProjectInput[]
    upsert?: ApplicationFormUpsertWithWhereUniqueWithoutProjectInput | ApplicationFormUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ApplicationFormCreateManyProjectInputEnvelope
    set?: ApplicationFormWhereUniqueInput | ApplicationFormWhereUniqueInput[]
    disconnect?: ApplicationFormWhereUniqueInput | ApplicationFormWhereUniqueInput[]
    delete?: ApplicationFormWhereUniqueInput | ApplicationFormWhereUniqueInput[]
    connect?: ApplicationFormWhereUniqueInput | ApplicationFormWhereUniqueInput[]
    update?: ApplicationFormUpdateWithWhereUniqueWithoutProjectInput | ApplicationFormUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ApplicationFormUpdateManyWithWhereWithoutProjectInput | ApplicationFormUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ApplicationFormScalarWhereInput | ApplicationFormScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutMembersInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    connect?: ProjectWhereUniqueInput
  }

  export type ChallengerCreateNestedOneWithoutProjectMembersInput = {
    create?: XOR<ChallengerCreateWithoutProjectMembersInput, ChallengerUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutProjectMembersInput
    connect?: ChallengerWhereUniqueInput
  }

  export type EnumUserPartEnumFieldUpdateOperationsInput = {
    set?: $Enums.UserPartEnum
  }

  export type ProjectUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    upsert?: ProjectUpsertWithoutMembersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMembersInput, ProjectUpdateWithoutMembersInput>, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ChallengerUpdateOneRequiredWithoutProjectMembersNestedInput = {
    create?: XOR<ChallengerCreateWithoutProjectMembersInput, ChallengerUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutProjectMembersInput
    upsert?: ChallengerUpsertWithoutProjectMembersInput
    connect?: ChallengerWhereUniqueInput
    update?: XOR<XOR<ChallengerUpdateToOneWithWhereWithoutProjectMembersInput, ChallengerUpdateWithoutProjectMembersInput>, ChallengerUncheckedUpdateWithoutProjectMembersInput>
  }

  export type ProjectCreateNestedOneWithoutApplicationFormsInput = {
    create?: XOR<ProjectCreateWithoutApplicationFormsInput, ProjectUncheckedCreateWithoutApplicationFormsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutApplicationFormsInput
    connect?: ProjectWhereUniqueInput
  }

  export type FormQuestionCreateNestedManyWithoutFormInput = {
    create?: XOR<FormQuestionCreateWithoutFormInput, FormQuestionUncheckedCreateWithoutFormInput> | FormQuestionCreateWithoutFormInput[] | FormQuestionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormQuestionCreateOrConnectWithoutFormInput | FormQuestionCreateOrConnectWithoutFormInput[]
    createMany?: FormQuestionCreateManyFormInputEnvelope
    connect?: FormQuestionWhereUniqueInput | FormQuestionWhereUniqueInput[]
  }

  export type FormQuestionUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<FormQuestionCreateWithoutFormInput, FormQuestionUncheckedCreateWithoutFormInput> | FormQuestionCreateWithoutFormInput[] | FormQuestionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormQuestionCreateOrConnectWithoutFormInput | FormQuestionCreateOrConnectWithoutFormInput[]
    createMany?: FormQuestionCreateManyFormInputEnvelope
    connect?: FormQuestionWhereUniqueInput | FormQuestionWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutApplicationFormsNestedInput = {
    create?: XOR<ProjectCreateWithoutApplicationFormsInput, ProjectUncheckedCreateWithoutApplicationFormsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutApplicationFormsInput
    upsert?: ProjectUpsertWithoutApplicationFormsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutApplicationFormsInput, ProjectUpdateWithoutApplicationFormsInput>, ProjectUncheckedUpdateWithoutApplicationFormsInput>
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

  export type ApplicationFormCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ApplicationFormCreateWithoutQuestionsInput, ApplicationFormUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ApplicationFormCreateOrConnectWithoutQuestionsInput
    connect?: ApplicationFormWhereUniqueInput
  }

  export type ApplicationResponseCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ApplicationResponseCreateWithoutQuestionInput, ApplicationResponseUncheckedCreateWithoutQuestionInput> | ApplicationResponseCreateWithoutQuestionInput[] | ApplicationResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ApplicationResponseCreateOrConnectWithoutQuestionInput | ApplicationResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: ApplicationResponseCreateManyQuestionInputEnvelope
    connect?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
  }

  export type ApplicationResponseUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ApplicationResponseCreateWithoutQuestionInput, ApplicationResponseUncheckedCreateWithoutQuestionInput> | ApplicationResponseCreateWithoutQuestionInput[] | ApplicationResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ApplicationResponseCreateOrConnectWithoutQuestionInput | ApplicationResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: ApplicationResponseCreateManyQuestionInputEnvelope
    connect?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
  }

  export type EnumQuestionTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.QuestionTypeEnum
  }

  export type FormQuestionUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ApplicationFormUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ApplicationFormCreateWithoutQuestionsInput, ApplicationFormUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ApplicationFormCreateOrConnectWithoutQuestionsInput
    upsert?: ApplicationFormUpsertWithoutQuestionsInput
    connect?: ApplicationFormWhereUniqueInput
    update?: XOR<XOR<ApplicationFormUpdateToOneWithWhereWithoutQuestionsInput, ApplicationFormUpdateWithoutQuestionsInput>, ApplicationFormUncheckedUpdateWithoutQuestionsInput>
  }

  export type ApplicationResponseUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ApplicationResponseCreateWithoutQuestionInput, ApplicationResponseUncheckedCreateWithoutQuestionInput> | ApplicationResponseCreateWithoutQuestionInput[] | ApplicationResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ApplicationResponseCreateOrConnectWithoutQuestionInput | ApplicationResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: ApplicationResponseUpsertWithWhereUniqueWithoutQuestionInput | ApplicationResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ApplicationResponseCreateManyQuestionInputEnvelope
    set?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    disconnect?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    delete?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    connect?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    update?: ApplicationResponseUpdateWithWhereUniqueWithoutQuestionInput | ApplicationResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ApplicationResponseUpdateManyWithWhereWithoutQuestionInput | ApplicationResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ApplicationResponseScalarWhereInput | ApplicationResponseScalarWhereInput[]
  }

  export type ApplicationResponseUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ApplicationResponseCreateWithoutQuestionInput, ApplicationResponseUncheckedCreateWithoutQuestionInput> | ApplicationResponseCreateWithoutQuestionInput[] | ApplicationResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ApplicationResponseCreateOrConnectWithoutQuestionInput | ApplicationResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: ApplicationResponseUpsertWithWhereUniqueWithoutQuestionInput | ApplicationResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ApplicationResponseCreateManyQuestionInputEnvelope
    set?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    disconnect?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    delete?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    connect?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    update?: ApplicationResponseUpdateWithWhereUniqueWithoutQuestionInput | ApplicationResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ApplicationResponseUpdateManyWithWhereWithoutQuestionInput | ApplicationResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ApplicationResponseScalarWhereInput | ApplicationResponseScalarWhereInput[]
  }

  export type ChallengerCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ChallengerCreateWithoutApplicationsInput, ChallengerUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ChallengerCreateOrConnectWithoutApplicationsInput
    connect?: ChallengerWhereUniqueInput
  }

  export type MatchingRoundCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<MatchingRoundCreateWithoutApplicationsInput, MatchingRoundUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: MatchingRoundCreateOrConnectWithoutApplicationsInput
    connect?: MatchingRoundWhereUniqueInput
  }

  export type ApplicationResponseCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationResponseCreateWithoutApplicationInput, ApplicationResponseUncheckedCreateWithoutApplicationInput> | ApplicationResponseCreateWithoutApplicationInput[] | ApplicationResponseUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationResponseCreateOrConnectWithoutApplicationInput | ApplicationResponseCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationResponseCreateManyApplicationInputEnvelope
    connect?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
  }

  export type ApplicationResponseUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationResponseCreateWithoutApplicationInput, ApplicationResponseUncheckedCreateWithoutApplicationInput> | ApplicationResponseCreateWithoutApplicationInput[] | ApplicationResponseUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationResponseCreateOrConnectWithoutApplicationInput | ApplicationResponseCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationResponseCreateManyApplicationInputEnvelope
    connect?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
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

  export type MatchingRoundUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<MatchingRoundCreateWithoutApplicationsInput, MatchingRoundUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: MatchingRoundCreateOrConnectWithoutApplicationsInput
    upsert?: MatchingRoundUpsertWithoutApplicationsInput
    connect?: MatchingRoundWhereUniqueInput
    update?: XOR<XOR<MatchingRoundUpdateToOneWithWhereWithoutApplicationsInput, MatchingRoundUpdateWithoutApplicationsInput>, MatchingRoundUncheckedUpdateWithoutApplicationsInput>
  }

  export type ApplicationResponseUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationResponseCreateWithoutApplicationInput, ApplicationResponseUncheckedCreateWithoutApplicationInput> | ApplicationResponseCreateWithoutApplicationInput[] | ApplicationResponseUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationResponseCreateOrConnectWithoutApplicationInput | ApplicationResponseCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationResponseUpsertWithWhereUniqueWithoutApplicationInput | ApplicationResponseUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationResponseCreateManyApplicationInputEnvelope
    set?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    disconnect?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    delete?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    connect?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    update?: ApplicationResponseUpdateWithWhereUniqueWithoutApplicationInput | ApplicationResponseUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationResponseUpdateManyWithWhereWithoutApplicationInput | ApplicationResponseUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationResponseScalarWhereInput | ApplicationResponseScalarWhereInput[]
  }

  export type ApplicationResponseUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationResponseCreateWithoutApplicationInput, ApplicationResponseUncheckedCreateWithoutApplicationInput> | ApplicationResponseCreateWithoutApplicationInput[] | ApplicationResponseUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationResponseCreateOrConnectWithoutApplicationInput | ApplicationResponseCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationResponseUpsertWithWhereUniqueWithoutApplicationInput | ApplicationResponseUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationResponseCreateManyApplicationInputEnvelope
    set?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    disconnect?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    delete?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    connect?: ApplicationResponseWhereUniqueInput | ApplicationResponseWhereUniqueInput[]
    update?: ApplicationResponseUpdateWithWhereUniqueWithoutApplicationInput | ApplicationResponseUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationResponseUpdateManyWithWhereWithoutApplicationInput | ApplicationResponseUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationResponseScalarWhereInput | ApplicationResponseScalarWhereInput[]
  }

  export type ApplicationResponseCreatevalueInput = {
    set: string[]
  }

  export type ApplicationCreateNestedOneWithoutResponsesInput = {
    create?: XOR<ApplicationCreateWithoutResponsesInput, ApplicationUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutResponsesInput
    connect?: ApplicationWhereUniqueInput
  }

  export type FormQuestionCreateNestedOneWithoutResponsesInput = {
    create?: XOR<FormQuestionCreateWithoutResponsesInput, FormQuestionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormQuestionCreateOrConnectWithoutResponsesInput
    connect?: FormQuestionWhereUniqueInput
  }

  export type ApplicationResponseUpdatevalueInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ApplicationUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<ApplicationCreateWithoutResponsesInput, ApplicationUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutResponsesInput
    upsert?: ApplicationUpsertWithoutResponsesInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutResponsesInput, ApplicationUpdateWithoutResponsesInput>, ApplicationUncheckedUpdateWithoutResponsesInput>
  }

  export type FormQuestionUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<FormQuestionCreateWithoutResponsesInput, FormQuestionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormQuestionCreateOrConnectWithoutResponsesInput
    upsert?: FormQuestionUpsertWithoutResponsesInput
    connect?: FormQuestionWhereUniqueInput
    update?: XOR<XOR<FormQuestionUpdateToOneWithWhereWithoutResponsesInput, FormQuestionUpdateWithoutResponsesInput>, FormQuestionUncheckedUpdateWithoutResponsesInput>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedEnumGenderEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel>
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderEnumFilter<$PrismaModel> | $Enums.GenderEnum
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedEnumGenderEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel>
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderEnumWithAggregatesFilter<$PrismaModel> | $Enums.GenderEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderEnumFilter<$PrismaModel>
    _max?: NestedEnumGenderEnumFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserPartEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPartEnum | EnumUserPartEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserPartEnum[] | ListEnumUserPartEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPartEnum[] | ListEnumUserPartEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPartEnumFilter<$PrismaModel> | $Enums.UserPartEnum
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

  export type NestedEnumQuestionTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionTypeEnum | EnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionTypeEnum[] | ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionTypeEnum[] | ListEnumQuestionTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeEnumFilter<$PrismaModel> | $Enums.QuestionTypeEnum
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

  export type SchoolCreateWithoutChallengersInput = {
    id?: bigint | number
    name: string
    logoImageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuSchools?: GisuSchoolCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutChallengersInput = {
    id?: bigint | number
    name: string
    logoImageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutChallengersInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutChallengersInput, SchoolUncheckedCreateWithoutChallengersInput>
  }

  export type ChallengerGisuCreateWithoutChallengerInput = {
    id?: bigint | number
    isSchoolAdmin: boolean
    isChapterAdmin: boolean
    isCentralAdmin: boolean
    schoolAdminType?: string | null
    chapterAdminType?: string | null
    centralAdminType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisu: GisuCreateNestedOneWithoutChallengerGisusInput
  }

  export type ChallengerGisuUncheckedCreateWithoutChallengerInput = {
    id?: bigint | number
    gisuId: bigint | number
    isSchoolAdmin: boolean
    isChapterAdmin: boolean
    isCentralAdmin: boolean
    schoolAdminType?: string | null
    chapterAdminType?: string | null
    centralAdminType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengerGisuCreateOrConnectWithoutChallengerInput = {
    where: ChallengerGisuWhereUniqueInput
    create: XOR<ChallengerGisuCreateWithoutChallengerInput, ChallengerGisuUncheckedCreateWithoutChallengerInput>
  }

  export type ChallengerGisuCreateManyChallengerInputEnvelope = {
    data: ChallengerGisuCreateManyChallengerInput | ChallengerGisuCreateManyChallengerInput[]
    skipDuplicates?: boolean
  }

  export type GisuSchoolCreateWithoutLeaderInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    gisu: GisuCreateNestedOneWithoutGisuSchoolsInput
    school: SchoolCreateNestedOneWithoutGisuSchoolsInput
    viceLeader?: ChallengerCreateNestedOneWithoutViceLedGisuSchoolsInput
  }

  export type GisuSchoolUncheckedCreateWithoutLeaderInput = {
    id?: bigint | number
    gisuId: bigint | number
    schoolId: bigint | number
    viceLeaderId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GisuSchoolCreateOrConnectWithoutLeaderInput = {
    where: GisuSchoolWhereUniqueInput
    create: XOR<GisuSchoolCreateWithoutLeaderInput, GisuSchoolUncheckedCreateWithoutLeaderInput>
  }

  export type GisuSchoolCreateManyLeaderInputEnvelope = {
    data: GisuSchoolCreateManyLeaderInput | GisuSchoolCreateManyLeaderInput[]
    skipDuplicates?: boolean
  }

  export type GisuSchoolCreateWithoutViceLeaderInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    gisu: GisuCreateNestedOneWithoutGisuSchoolsInput
    school: SchoolCreateNestedOneWithoutGisuSchoolsInput
    leader: ChallengerCreateNestedOneWithoutLedGisuSchoolsInput
  }

  export type GisuSchoolUncheckedCreateWithoutViceLeaderInput = {
    id?: bigint | number
    gisuId: bigint | number
    schoolId: bigint | number
    leaderId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GisuSchoolCreateOrConnectWithoutViceLeaderInput = {
    where: GisuSchoolWhereUniqueInput
    create: XOR<GisuSchoolCreateWithoutViceLeaderInput, GisuSchoolUncheckedCreateWithoutViceLeaderInput>
  }

  export type GisuSchoolCreateManyViceLeaderInputEnvelope = {
    data: GisuSchoolCreateManyViceLeaderInput | GisuSchoolCreateManyViceLeaderInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMemberCreateWithoutChallengerInput = {
    id?: bigint | number
    role: $Enums.UserPartEnum
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMembersInput
  }

  export type ProjectMemberUncheckedCreateWithoutChallengerInput = {
    id?: bigint | number
    projectId: bigint | number
    role: $Enums.UserPartEnum
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberCreateOrConnectWithoutChallengerInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutChallengerInput, ProjectMemberUncheckedCreateWithoutChallengerInput>
  }

  export type ProjectMemberCreateManyChallengerInputEnvelope = {
    data: ProjectMemberCreateManyChallengerInput | ProjectMemberCreateManyChallengerInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutApplicantInput = {
    id?: bigint | number
    status: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    matchingRound: MatchingRoundCreateNestedOneWithoutApplicationsInput
    responses?: ApplicationResponseCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: bigint | number
    matchingRoundId: bigint | number
    status: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ApplicationResponseUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationCreateManyApplicantInputEnvelope = {
    data: ApplicationCreateManyApplicantInput | ApplicationCreateManyApplicantInput[]
    skipDuplicates?: boolean
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
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuSchools?: GisuSchoolUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutChallengersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuSchools?: GisuSchoolUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type ChallengerGisuUpsertWithWhereUniqueWithoutChallengerInput = {
    where: ChallengerGisuWhereUniqueInput
    update: XOR<ChallengerGisuUpdateWithoutChallengerInput, ChallengerGisuUncheckedUpdateWithoutChallengerInput>
    create: XOR<ChallengerGisuCreateWithoutChallengerInput, ChallengerGisuUncheckedCreateWithoutChallengerInput>
  }

  export type ChallengerGisuUpdateWithWhereUniqueWithoutChallengerInput = {
    where: ChallengerGisuWhereUniqueInput
    data: XOR<ChallengerGisuUpdateWithoutChallengerInput, ChallengerGisuUncheckedUpdateWithoutChallengerInput>
  }

  export type ChallengerGisuUpdateManyWithWhereWithoutChallengerInput = {
    where: ChallengerGisuScalarWhereInput
    data: XOR<ChallengerGisuUpdateManyMutationInput, ChallengerGisuUncheckedUpdateManyWithoutChallengerInput>
  }

  export type ChallengerGisuScalarWhereInput = {
    AND?: ChallengerGisuScalarWhereInput | ChallengerGisuScalarWhereInput[]
    OR?: ChallengerGisuScalarWhereInput[]
    NOT?: ChallengerGisuScalarWhereInput | ChallengerGisuScalarWhereInput[]
    id?: BigIntFilter<"ChallengerGisu"> | bigint | number
    challengerId?: BigIntFilter<"ChallengerGisu"> | bigint | number
    gisuId?: BigIntFilter<"ChallengerGisu"> | bigint | number
    isSchoolAdmin?: BoolFilter<"ChallengerGisu"> | boolean
    isChapterAdmin?: BoolFilter<"ChallengerGisu"> | boolean
    isCentralAdmin?: BoolFilter<"ChallengerGisu"> | boolean
    schoolAdminType?: StringNullableFilter<"ChallengerGisu"> | string | null
    chapterAdminType?: StringNullableFilter<"ChallengerGisu"> | string | null
    centralAdminType?: StringNullableFilter<"ChallengerGisu"> | string | null
    createdAt?: DateTimeFilter<"ChallengerGisu"> | Date | string
    updatedAt?: DateTimeFilter<"ChallengerGisu"> | Date | string
  }

  export type GisuSchoolUpsertWithWhereUniqueWithoutLeaderInput = {
    where: GisuSchoolWhereUniqueInput
    update: XOR<GisuSchoolUpdateWithoutLeaderInput, GisuSchoolUncheckedUpdateWithoutLeaderInput>
    create: XOR<GisuSchoolCreateWithoutLeaderInput, GisuSchoolUncheckedCreateWithoutLeaderInput>
  }

  export type GisuSchoolUpdateWithWhereUniqueWithoutLeaderInput = {
    where: GisuSchoolWhereUniqueInput
    data: XOR<GisuSchoolUpdateWithoutLeaderInput, GisuSchoolUncheckedUpdateWithoutLeaderInput>
  }

  export type GisuSchoolUpdateManyWithWhereWithoutLeaderInput = {
    where: GisuSchoolScalarWhereInput
    data: XOR<GisuSchoolUpdateManyMutationInput, GisuSchoolUncheckedUpdateManyWithoutLeaderInput>
  }

  export type GisuSchoolScalarWhereInput = {
    AND?: GisuSchoolScalarWhereInput | GisuSchoolScalarWhereInput[]
    OR?: GisuSchoolScalarWhereInput[]
    NOT?: GisuSchoolScalarWhereInput | GisuSchoolScalarWhereInput[]
    id?: BigIntFilter<"GisuSchool"> | bigint | number
    gisuId?: BigIntFilter<"GisuSchool"> | bigint | number
    schoolId?: BigIntFilter<"GisuSchool"> | bigint | number
    leaderId?: BigIntFilter<"GisuSchool"> | bigint | number
    viceLeaderId?: BigIntNullableFilter<"GisuSchool"> | bigint | number | null
    createdAt?: DateTimeFilter<"GisuSchool"> | Date | string
    updatedAt?: DateTimeFilter<"GisuSchool"> | Date | string
  }

  export type GisuSchoolUpsertWithWhereUniqueWithoutViceLeaderInput = {
    where: GisuSchoolWhereUniqueInput
    update: XOR<GisuSchoolUpdateWithoutViceLeaderInput, GisuSchoolUncheckedUpdateWithoutViceLeaderInput>
    create: XOR<GisuSchoolCreateWithoutViceLeaderInput, GisuSchoolUncheckedCreateWithoutViceLeaderInput>
  }

  export type GisuSchoolUpdateWithWhereUniqueWithoutViceLeaderInput = {
    where: GisuSchoolWhereUniqueInput
    data: XOR<GisuSchoolUpdateWithoutViceLeaderInput, GisuSchoolUncheckedUpdateWithoutViceLeaderInput>
  }

  export type GisuSchoolUpdateManyWithWhereWithoutViceLeaderInput = {
    where: GisuSchoolScalarWhereInput
    data: XOR<GisuSchoolUpdateManyMutationInput, GisuSchoolUncheckedUpdateManyWithoutViceLeaderInput>
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutChallengerInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutChallengerInput, ProjectMemberUncheckedUpdateWithoutChallengerInput>
    create: XOR<ProjectMemberCreateWithoutChallengerInput, ProjectMemberUncheckedCreateWithoutChallengerInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutChallengerInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutChallengerInput, ProjectMemberUncheckedUpdateWithoutChallengerInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutChallengerInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutChallengerInput>
  }

  export type ProjectMemberScalarWhereInput = {
    AND?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    OR?: ProjectMemberScalarWhereInput[]
    NOT?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    id?: BigIntFilter<"ProjectMember"> | bigint | number
    projectId?: BigIntFilter<"ProjectMember"> | bigint | number
    challengerId?: BigIntFilter<"ProjectMember"> | bigint | number
    role?: EnumUserPartEnumFilter<"ProjectMember"> | $Enums.UserPartEnum
    isActive?: BoolFilter<"ProjectMember"> | boolean
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectMember"> | Date | string
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
    id?: BigIntFilter<"Application"> | bigint | number
    applicantId?: BigIntFilter<"Application"> | bigint | number
    matchingRoundId?: BigIntFilter<"Application"> | bigint | number
    status?: EnumApplicationStatusEnumFilter<"Application"> | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type ChallengerCreateWithoutGisuRolesInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutChallengersInput
    ledGisuSchools?: GisuSchoolCreateNestedManyWithoutLeaderInput
    viceLedGisuSchools?: GisuSchoolCreateNestedManyWithoutViceLeaderInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutChallengerInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
  }

  export type ChallengerUncheckedCreateWithoutGisuRolesInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    schoolId: bigint | number
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ledGisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutLeaderInput
    viceLedGisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutViceLeaderInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutChallengerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ChallengerCreateOrConnectWithoutGisuRolesInput = {
    where: ChallengerWhereUniqueInput
    create: XOR<ChallengerCreateWithoutGisuRolesInput, ChallengerUncheckedCreateWithoutGisuRolesInput>
  }

  export type GisuCreateWithoutChallengerGisusInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuSchools?: GisuSchoolCreateNestedManyWithoutGisuInput
    chapters?: ChapterCreateNestedManyWithoutGisuInput
  }

  export type GisuUncheckedCreateWithoutChallengerGisusInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutGisuInput
    chapters?: ChapterUncheckedCreateNestedManyWithoutGisuInput
  }

  export type GisuCreateOrConnectWithoutChallengerGisusInput = {
    where: GisuWhereUniqueInput
    create: XOR<GisuCreateWithoutChallengerGisusInput, GisuUncheckedCreateWithoutChallengerGisusInput>
  }

  export type ChallengerUpsertWithoutGisuRolesInput = {
    update: XOR<ChallengerUpdateWithoutGisuRolesInput, ChallengerUncheckedUpdateWithoutGisuRolesInput>
    create: XOR<ChallengerCreateWithoutGisuRolesInput, ChallengerUncheckedCreateWithoutGisuRolesInput>
    where?: ChallengerWhereInput
  }

  export type ChallengerUpdateToOneWithWhereWithoutGisuRolesInput = {
    where?: ChallengerWhereInput
    data: XOR<ChallengerUpdateWithoutGisuRolesInput, ChallengerUncheckedUpdateWithoutGisuRolesInput>
  }

  export type ChallengerUpdateWithoutGisuRolesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutChallengersNestedInput
    ledGisuSchools?: GisuSchoolUpdateManyWithoutLeaderNestedInput
    viceLedGisuSchools?: GisuSchoolUpdateManyWithoutViceLeaderNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutChallengerNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
  }

  export type ChallengerUncheckedUpdateWithoutGisuRolesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGisuSchools?: GisuSchoolUncheckedUpdateManyWithoutLeaderNestedInput
    viceLedGisuSchools?: GisuSchoolUncheckedUpdateManyWithoutViceLeaderNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutChallengerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type GisuUpsertWithoutChallengerGisusInput = {
    update: XOR<GisuUpdateWithoutChallengerGisusInput, GisuUncheckedUpdateWithoutChallengerGisusInput>
    create: XOR<GisuCreateWithoutChallengerGisusInput, GisuUncheckedCreateWithoutChallengerGisusInput>
    where?: GisuWhereInput
  }

  export type GisuUpdateToOneWithWhereWithoutChallengerGisusInput = {
    where?: GisuWhereInput
    data: XOR<GisuUpdateWithoutChallengerGisusInput, GisuUncheckedUpdateWithoutChallengerGisusInput>
  }

  export type GisuUpdateWithoutChallengerGisusInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuSchools?: GisuSchoolUpdateManyWithoutGisuNestedInput
    chapters?: ChapterUpdateManyWithoutGisuNestedInput
  }

  export type GisuUncheckedUpdateWithoutChallengerGisusInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuSchools?: GisuSchoolUncheckedUpdateManyWithoutGisuNestedInput
    chapters?: ChapterUncheckedUpdateManyWithoutGisuNestedInput
  }

  export type GisuSchoolCreateWithoutGisuInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutGisuSchoolsInput
    leader: ChallengerCreateNestedOneWithoutLedGisuSchoolsInput
    viceLeader?: ChallengerCreateNestedOneWithoutViceLedGisuSchoolsInput
  }

  export type GisuSchoolUncheckedCreateWithoutGisuInput = {
    id?: bigint | number
    schoolId: bigint | number
    leaderId: bigint | number
    viceLeaderId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GisuSchoolCreateOrConnectWithoutGisuInput = {
    where: GisuSchoolWhereUniqueInput
    create: XOR<GisuSchoolCreateWithoutGisuInput, GisuSchoolUncheckedCreateWithoutGisuInput>
  }

  export type GisuSchoolCreateManyGisuInputEnvelope = {
    data: GisuSchoolCreateManyGisuInput | GisuSchoolCreateManyGisuInput[]
    skipDuplicates?: boolean
  }

  export type ChapterCreateWithoutGisuInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutGisuInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutGisuInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutGisuInput, ChapterUncheckedCreateWithoutGisuInput>
  }

  export type ChapterCreateManyGisuInputEnvelope = {
    data: ChapterCreateManyGisuInput | ChapterCreateManyGisuInput[]
    skipDuplicates?: boolean
  }

  export type ChallengerGisuCreateWithoutGisuInput = {
    id?: bigint | number
    isSchoolAdmin: boolean
    isChapterAdmin: boolean
    isCentralAdmin: boolean
    schoolAdminType?: string | null
    chapterAdminType?: string | null
    centralAdminType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challenger: ChallengerCreateNestedOneWithoutGisuRolesInput
  }

  export type ChallengerGisuUncheckedCreateWithoutGisuInput = {
    id?: bigint | number
    challengerId: bigint | number
    isSchoolAdmin: boolean
    isChapterAdmin: boolean
    isCentralAdmin: boolean
    schoolAdminType?: string | null
    chapterAdminType?: string | null
    centralAdminType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengerGisuCreateOrConnectWithoutGisuInput = {
    where: ChallengerGisuWhereUniqueInput
    create: XOR<ChallengerGisuCreateWithoutGisuInput, ChallengerGisuUncheckedCreateWithoutGisuInput>
  }

  export type ChallengerGisuCreateManyGisuInputEnvelope = {
    data: ChallengerGisuCreateManyGisuInput | ChallengerGisuCreateManyGisuInput[]
    skipDuplicates?: boolean
  }

  export type GisuSchoolUpsertWithWhereUniqueWithoutGisuInput = {
    where: GisuSchoolWhereUniqueInput
    update: XOR<GisuSchoolUpdateWithoutGisuInput, GisuSchoolUncheckedUpdateWithoutGisuInput>
    create: XOR<GisuSchoolCreateWithoutGisuInput, GisuSchoolUncheckedCreateWithoutGisuInput>
  }

  export type GisuSchoolUpdateWithWhereUniqueWithoutGisuInput = {
    where: GisuSchoolWhereUniqueInput
    data: XOR<GisuSchoolUpdateWithoutGisuInput, GisuSchoolUncheckedUpdateWithoutGisuInput>
  }

  export type GisuSchoolUpdateManyWithWhereWithoutGisuInput = {
    where: GisuSchoolScalarWhereInput
    data: XOR<GisuSchoolUpdateManyMutationInput, GisuSchoolUncheckedUpdateManyWithoutGisuInput>
  }

  export type ChapterUpsertWithWhereUniqueWithoutGisuInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutGisuInput, ChapterUncheckedUpdateWithoutGisuInput>
    create: XOR<ChapterCreateWithoutGisuInput, ChapterUncheckedCreateWithoutGisuInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutGisuInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutGisuInput, ChapterUncheckedUpdateWithoutGisuInput>
  }

  export type ChapterUpdateManyWithWhereWithoutGisuInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutGisuInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    OR?: ChapterScalarWhereInput[]
    NOT?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    id?: BigIntFilter<"Chapter"> | bigint | number
    name?: StringFilter<"Chapter"> | string
    description?: StringNullableFilter<"Chapter"> | string | null
    gisuId?: BigIntFilter<"Chapter"> | bigint | number
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
  }

  export type ChallengerGisuUpsertWithWhereUniqueWithoutGisuInput = {
    where: ChallengerGisuWhereUniqueInput
    update: XOR<ChallengerGisuUpdateWithoutGisuInput, ChallengerGisuUncheckedUpdateWithoutGisuInput>
    create: XOR<ChallengerGisuCreateWithoutGisuInput, ChallengerGisuUncheckedCreateWithoutGisuInput>
  }

  export type ChallengerGisuUpdateWithWhereUniqueWithoutGisuInput = {
    where: ChallengerGisuWhereUniqueInput
    data: XOR<ChallengerGisuUpdateWithoutGisuInput, ChallengerGisuUncheckedUpdateWithoutGisuInput>
  }

  export type ChallengerGisuUpdateManyWithWhereWithoutGisuInput = {
    where: ChallengerGisuScalarWhereInput
    data: XOR<ChallengerGisuUpdateManyMutationInput, ChallengerGisuUncheckedUpdateManyWithoutGisuInput>
  }

  export type GisuCreateWithoutGisuSchoolsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterCreateNestedManyWithoutGisuInput
    challengerGisus?: ChallengerGisuCreateNestedManyWithoutGisuInput
  }

  export type GisuUncheckedCreateWithoutGisuSchoolsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutGisuInput
    challengerGisus?: ChallengerGisuUncheckedCreateNestedManyWithoutGisuInput
  }

  export type GisuCreateOrConnectWithoutGisuSchoolsInput = {
    where: GisuWhereUniqueInput
    create: XOR<GisuCreateWithoutGisuSchoolsInput, GisuUncheckedCreateWithoutGisuSchoolsInput>
  }

  export type SchoolCreateWithoutGisuSchoolsInput = {
    id?: bigint | number
    name: string
    logoImageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengers?: ChallengerCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutGisuSchoolsInput = {
    id?: bigint | number
    name: string
    logoImageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challengers?: ChallengerUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutGisuSchoolsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutGisuSchoolsInput, SchoolUncheckedCreateWithoutGisuSchoolsInput>
  }

  export type ChallengerCreateWithoutLedGisuSchoolsInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutChallengersInput
    gisuRoles?: ChallengerGisuCreateNestedManyWithoutChallengerInput
    viceLedGisuSchools?: GisuSchoolCreateNestedManyWithoutViceLeaderInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutChallengerInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
  }

  export type ChallengerUncheckedCreateWithoutLedGisuSchoolsInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    schoolId: bigint | number
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuRoles?: ChallengerGisuUncheckedCreateNestedManyWithoutChallengerInput
    viceLedGisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutViceLeaderInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutChallengerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ChallengerCreateOrConnectWithoutLedGisuSchoolsInput = {
    where: ChallengerWhereUniqueInput
    create: XOR<ChallengerCreateWithoutLedGisuSchoolsInput, ChallengerUncheckedCreateWithoutLedGisuSchoolsInput>
  }

  export type ChallengerCreateWithoutViceLedGisuSchoolsInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutChallengersInput
    gisuRoles?: ChallengerGisuCreateNestedManyWithoutChallengerInput
    ledGisuSchools?: GisuSchoolCreateNestedManyWithoutLeaderInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutChallengerInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
  }

  export type ChallengerUncheckedCreateWithoutViceLedGisuSchoolsInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    schoolId: bigint | number
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuRoles?: ChallengerGisuUncheckedCreateNestedManyWithoutChallengerInput
    ledGisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutLeaderInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutChallengerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ChallengerCreateOrConnectWithoutViceLedGisuSchoolsInput = {
    where: ChallengerWhereUniqueInput
    create: XOR<ChallengerCreateWithoutViceLedGisuSchoolsInput, ChallengerUncheckedCreateWithoutViceLedGisuSchoolsInput>
  }

  export type GisuUpsertWithoutGisuSchoolsInput = {
    update: XOR<GisuUpdateWithoutGisuSchoolsInput, GisuUncheckedUpdateWithoutGisuSchoolsInput>
    create: XOR<GisuCreateWithoutGisuSchoolsInput, GisuUncheckedCreateWithoutGisuSchoolsInput>
    where?: GisuWhereInput
  }

  export type GisuUpdateToOneWithWhereWithoutGisuSchoolsInput = {
    where?: GisuWhereInput
    data: XOR<GisuUpdateWithoutGisuSchoolsInput, GisuUncheckedUpdateWithoutGisuSchoolsInput>
  }

  export type GisuUpdateWithoutGisuSchoolsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUpdateManyWithoutGisuNestedInput
    challengerGisus?: ChallengerGisuUpdateManyWithoutGisuNestedInput
  }

  export type GisuUncheckedUpdateWithoutGisuSchoolsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutGisuNestedInput
    challengerGisus?: ChallengerGisuUncheckedUpdateManyWithoutGisuNestedInput
  }

  export type SchoolUpsertWithoutGisuSchoolsInput = {
    update: XOR<SchoolUpdateWithoutGisuSchoolsInput, SchoolUncheckedUpdateWithoutGisuSchoolsInput>
    create: XOR<SchoolCreateWithoutGisuSchoolsInput, SchoolUncheckedCreateWithoutGisuSchoolsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutGisuSchoolsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutGisuSchoolsInput, SchoolUncheckedUpdateWithoutGisuSchoolsInput>
  }

  export type SchoolUpdateWithoutGisuSchoolsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengers?: ChallengerUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutGisuSchoolsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengers?: ChallengerUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type ChallengerUpsertWithoutLedGisuSchoolsInput = {
    update: XOR<ChallengerUpdateWithoutLedGisuSchoolsInput, ChallengerUncheckedUpdateWithoutLedGisuSchoolsInput>
    create: XOR<ChallengerCreateWithoutLedGisuSchoolsInput, ChallengerUncheckedCreateWithoutLedGisuSchoolsInput>
    where?: ChallengerWhereInput
  }

  export type ChallengerUpdateToOneWithWhereWithoutLedGisuSchoolsInput = {
    where?: ChallengerWhereInput
    data: XOR<ChallengerUpdateWithoutLedGisuSchoolsInput, ChallengerUncheckedUpdateWithoutLedGisuSchoolsInput>
  }

  export type ChallengerUpdateWithoutLedGisuSchoolsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutChallengersNestedInput
    gisuRoles?: ChallengerGisuUpdateManyWithoutChallengerNestedInput
    viceLedGisuSchools?: GisuSchoolUpdateManyWithoutViceLeaderNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutChallengerNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
  }

  export type ChallengerUncheckedUpdateWithoutLedGisuSchoolsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuRoles?: ChallengerGisuUncheckedUpdateManyWithoutChallengerNestedInput
    viceLedGisuSchools?: GisuSchoolUncheckedUpdateManyWithoutViceLeaderNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutChallengerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ChallengerUpsertWithoutViceLedGisuSchoolsInput = {
    update: XOR<ChallengerUpdateWithoutViceLedGisuSchoolsInput, ChallengerUncheckedUpdateWithoutViceLedGisuSchoolsInput>
    create: XOR<ChallengerCreateWithoutViceLedGisuSchoolsInput, ChallengerUncheckedCreateWithoutViceLedGisuSchoolsInput>
    where?: ChallengerWhereInput
  }

  export type ChallengerUpdateToOneWithWhereWithoutViceLedGisuSchoolsInput = {
    where?: ChallengerWhereInput
    data: XOR<ChallengerUpdateWithoutViceLedGisuSchoolsInput, ChallengerUncheckedUpdateWithoutViceLedGisuSchoolsInput>
  }

  export type ChallengerUpdateWithoutViceLedGisuSchoolsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutChallengersNestedInput
    gisuRoles?: ChallengerGisuUpdateManyWithoutChallengerNestedInput
    ledGisuSchools?: GisuSchoolUpdateManyWithoutLeaderNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutChallengerNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
  }

  export type ChallengerUncheckedUpdateWithoutViceLedGisuSchoolsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuRoles?: ChallengerGisuUncheckedUpdateManyWithoutChallengerNestedInput
    ledGisuSchools?: GisuSchoolUncheckedUpdateManyWithoutLeaderNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutChallengerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ChallengerCreateWithoutSchoolInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuRoles?: ChallengerGisuCreateNestedManyWithoutChallengerInput
    ledGisuSchools?: GisuSchoolCreateNestedManyWithoutLeaderInput
    viceLedGisuSchools?: GisuSchoolCreateNestedManyWithoutViceLeaderInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutChallengerInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
  }

  export type ChallengerUncheckedCreateWithoutSchoolInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuRoles?: ChallengerGisuUncheckedCreateNestedManyWithoutChallengerInput
    ledGisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutLeaderInput
    viceLedGisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutViceLeaderInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutChallengerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ChallengerCreateOrConnectWithoutSchoolInput = {
    where: ChallengerWhereUniqueInput
    create: XOR<ChallengerCreateWithoutSchoolInput, ChallengerUncheckedCreateWithoutSchoolInput>
  }

  export type ChallengerCreateManySchoolInputEnvelope = {
    data: ChallengerCreateManySchoolInput | ChallengerCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type GisuSchoolCreateWithoutSchoolInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    gisu: GisuCreateNestedOneWithoutGisuSchoolsInput
    leader: ChallengerCreateNestedOneWithoutLedGisuSchoolsInput
    viceLeader?: ChallengerCreateNestedOneWithoutViceLedGisuSchoolsInput
  }

  export type GisuSchoolUncheckedCreateWithoutSchoolInput = {
    id?: bigint | number
    gisuId: bigint | number
    leaderId: bigint | number
    viceLeaderId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GisuSchoolCreateOrConnectWithoutSchoolInput = {
    where: GisuSchoolWhereUniqueInput
    create: XOR<GisuSchoolCreateWithoutSchoolInput, GisuSchoolUncheckedCreateWithoutSchoolInput>
  }

  export type GisuSchoolCreateManySchoolInputEnvelope = {
    data: GisuSchoolCreateManySchoolInput | GisuSchoolCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type ChallengerUpsertWithWhereUniqueWithoutSchoolInput = {
    where: ChallengerWhereUniqueInput
    update: XOR<ChallengerUpdateWithoutSchoolInput, ChallengerUncheckedUpdateWithoutSchoolInput>
    create: XOR<ChallengerCreateWithoutSchoolInput, ChallengerUncheckedCreateWithoutSchoolInput>
  }

  export type ChallengerUpdateWithWhereUniqueWithoutSchoolInput = {
    where: ChallengerWhereUniqueInput
    data: XOR<ChallengerUpdateWithoutSchoolInput, ChallengerUncheckedUpdateWithoutSchoolInput>
  }

  export type ChallengerUpdateManyWithWhereWithoutSchoolInput = {
    where: ChallengerScalarWhereInput
    data: XOR<ChallengerUpdateManyMutationInput, ChallengerUncheckedUpdateManyWithoutSchoolInput>
  }

  export type ChallengerScalarWhereInput = {
    AND?: ChallengerScalarWhereInput | ChallengerScalarWhereInput[]
    OR?: ChallengerScalarWhereInput[]
    NOT?: ChallengerScalarWhereInput | ChallengerScalarWhereInput[]
    id?: BigIntFilter<"Challenger"> | bigint | number
    umsbId?: IntFilter<"Challenger"> | number
    name?: StringFilter<"Challenger"> | string
    nickname?: StringFilter<"Challenger"> | string
    gender?: EnumGenderEnumFilter<"Challenger"> | $Enums.GenderEnum
    schoolId?: BigIntFilter<"Challenger"> | bigint | number
    studentId?: StringFilter<"Challenger"> | string
    profileImageUrl?: StringNullableFilter<"Challenger"> | string | null
    createdAt?: DateTimeFilter<"Challenger"> | Date | string
    updatedAt?: DateTimeFilter<"Challenger"> | Date | string
  }

  export type GisuSchoolUpsertWithWhereUniqueWithoutSchoolInput = {
    where: GisuSchoolWhereUniqueInput
    update: XOR<GisuSchoolUpdateWithoutSchoolInput, GisuSchoolUncheckedUpdateWithoutSchoolInput>
    create: XOR<GisuSchoolCreateWithoutSchoolInput, GisuSchoolUncheckedCreateWithoutSchoolInput>
  }

  export type GisuSchoolUpdateWithWhereUniqueWithoutSchoolInput = {
    where: GisuSchoolWhereUniqueInput
    data: XOR<GisuSchoolUpdateWithoutSchoolInput, GisuSchoolUncheckedUpdateWithoutSchoolInput>
  }

  export type GisuSchoolUpdateManyWithWhereWithoutSchoolInput = {
    where: GisuSchoolScalarWhereInput
    data: XOR<GisuSchoolUpdateManyMutationInput, GisuSchoolUncheckedUpdateManyWithoutSchoolInput>
  }

  export type GisuCreateWithoutChaptersInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuSchools?: GisuSchoolCreateNestedManyWithoutGisuInput
    challengerGisus?: ChallengerGisuCreateNestedManyWithoutGisuInput
  }

  export type GisuUncheckedCreateWithoutChaptersInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutGisuInput
    challengerGisus?: ChallengerGisuUncheckedCreateNestedManyWithoutGisuInput
  }

  export type GisuCreateOrConnectWithoutChaptersInput = {
    where: GisuWhereUniqueInput
    create: XOR<GisuCreateWithoutChaptersInput, GisuUncheckedCreateWithoutChaptersInput>
  }

  export type ProjectCreateWithoutChapterInput = {
    id?: bigint | number
    name: string
    description?: string | null
    logoImageUrl?: string | null
    bannerImageUrl?: string | null
    planTo: number
    designTo: number
    webTo: number
    androidTo: number
    iosTo: number
    springbootTo: number
    nodejsTo: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    applicationForms?: ApplicationFormCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutChapterInput = {
    id?: bigint | number
    name: string
    description?: string | null
    logoImageUrl?: string | null
    bannerImageUrl?: string | null
    planTo: number
    designTo: number
    webTo: number
    androidTo: number
    iosTo: number
    springbootTo: number
    nodejsTo: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    applicationForms?: ApplicationFormUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutChapterInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutChapterInput, ProjectUncheckedCreateWithoutChapterInput>
  }

  export type ProjectCreateManyChapterInputEnvelope = {
    data: ProjectCreateManyChapterInput | ProjectCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type GisuUpsertWithoutChaptersInput = {
    update: XOR<GisuUpdateWithoutChaptersInput, GisuUncheckedUpdateWithoutChaptersInput>
    create: XOR<GisuCreateWithoutChaptersInput, GisuUncheckedCreateWithoutChaptersInput>
    where?: GisuWhereInput
  }

  export type GisuUpdateToOneWithWhereWithoutChaptersInput = {
    where?: GisuWhereInput
    data: XOR<GisuUpdateWithoutChaptersInput, GisuUncheckedUpdateWithoutChaptersInput>
  }

  export type GisuUpdateWithoutChaptersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuSchools?: GisuSchoolUpdateManyWithoutGisuNestedInput
    challengerGisus?: ChallengerGisuUpdateManyWithoutGisuNestedInput
  }

  export type GisuUncheckedUpdateWithoutChaptersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuSchools?: GisuSchoolUncheckedUpdateManyWithoutGisuNestedInput
    challengerGisus?: ChallengerGisuUncheckedUpdateManyWithoutGisuNestedInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutChapterInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutChapterInput, ProjectUncheckedUpdateWithoutChapterInput>
    create: XOR<ProjectCreateWithoutChapterInput, ProjectUncheckedCreateWithoutChapterInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutChapterInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutChapterInput, ProjectUncheckedUpdateWithoutChapterInput>
  }

  export type ProjectUpdateManyWithWhereWithoutChapterInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutChapterInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: BigIntFilter<"Project"> | bigint | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    chapterId?: BigIntFilter<"Project"> | bigint | number
    logoImageUrl?: StringNullableFilter<"Project"> | string | null
    bannerImageUrl?: StringNullableFilter<"Project"> | string | null
    planTo?: IntFilter<"Project"> | number
    designTo?: IntFilter<"Project"> | number
    webTo?: IntFilter<"Project"> | number
    androidTo?: IntFilter<"Project"> | number
    iosTo?: IntFilter<"Project"> | number
    springbootTo?: IntFilter<"Project"> | number
    nodejsTo?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ChapterCreateWithoutProjectsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisu: GisuCreateNestedOneWithoutChaptersInput
  }

  export type ChapterUncheckedCreateWithoutProjectsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    gisuId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterCreateOrConnectWithoutProjectsInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutProjectsInput, ChapterUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectMemberCreateWithoutProjectInput = {
    id?: bigint | number
    role: $Enums.UserPartEnum
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    challenger: ChallengerCreateNestedOneWithoutProjectMembersInput
  }

  export type ProjectMemberUncheckedCreateWithoutProjectInput = {
    id?: bigint | number
    challengerId: bigint | number
    role: $Enums.UserPartEnum
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberCreateOrConnectWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberCreateManyProjectInputEnvelope = {
    data: ProjectMemberCreateManyProjectInput | ProjectMemberCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationFormCreateWithoutProjectInput = {
    id?: bigint | number
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: FormQuestionCreateNestedManyWithoutFormInput
  }

  export type ApplicationFormUncheckedCreateWithoutProjectInput = {
    id?: bigint | number
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: FormQuestionUncheckedCreateNestedManyWithoutFormInput
  }

  export type ApplicationFormCreateOrConnectWithoutProjectInput = {
    where: ApplicationFormWhereUniqueInput
    create: XOR<ApplicationFormCreateWithoutProjectInput, ApplicationFormUncheckedCreateWithoutProjectInput>
  }

  export type ApplicationFormCreateManyProjectInputEnvelope = {
    data: ApplicationFormCreateManyProjectInput | ApplicationFormCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ChapterUpsertWithoutProjectsInput = {
    update: XOR<ChapterUpdateWithoutProjectsInput, ChapterUncheckedUpdateWithoutProjectsInput>
    create: XOR<ChapterCreateWithoutProjectsInput, ChapterUncheckedCreateWithoutProjectsInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutProjectsInput, ChapterUncheckedUpdateWithoutProjectsInput>
  }

  export type ChapterUpdateWithoutProjectsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisu?: GisuUpdateOneRequiredWithoutChaptersNestedInput
  }

  export type ChapterUncheckedUpdateWithoutProjectsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ApplicationFormUpsertWithWhereUniqueWithoutProjectInput = {
    where: ApplicationFormWhereUniqueInput
    update: XOR<ApplicationFormUpdateWithoutProjectInput, ApplicationFormUncheckedUpdateWithoutProjectInput>
    create: XOR<ApplicationFormCreateWithoutProjectInput, ApplicationFormUncheckedCreateWithoutProjectInput>
  }

  export type ApplicationFormUpdateWithWhereUniqueWithoutProjectInput = {
    where: ApplicationFormWhereUniqueInput
    data: XOR<ApplicationFormUpdateWithoutProjectInput, ApplicationFormUncheckedUpdateWithoutProjectInput>
  }

  export type ApplicationFormUpdateManyWithWhereWithoutProjectInput = {
    where: ApplicationFormScalarWhereInput
    data: XOR<ApplicationFormUpdateManyMutationInput, ApplicationFormUncheckedUpdateManyWithoutProjectInput>
  }

  export type ApplicationFormScalarWhereInput = {
    AND?: ApplicationFormScalarWhereInput | ApplicationFormScalarWhereInput[]
    OR?: ApplicationFormScalarWhereInput[]
    NOT?: ApplicationFormScalarWhereInput | ApplicationFormScalarWhereInput[]
    id?: BigIntFilter<"ApplicationForm"> | bigint | number
    projectId?: BigIntFilter<"ApplicationForm"> | bigint | number
    title?: StringFilter<"ApplicationForm"> | string
    description?: StringNullableFilter<"ApplicationForm"> | string | null
    isActive?: BoolFilter<"ApplicationForm"> | boolean
    createdAt?: DateTimeFilter<"ApplicationForm"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationForm"> | Date | string
  }

  export type ProjectCreateWithoutMembersInput = {
    id?: bigint | number
    name: string
    description?: string | null
    logoImageUrl?: string | null
    bannerImageUrl?: string | null
    planTo: number
    designTo: number
    webTo: number
    androidTo: number
    iosTo: number
    springbootTo: number
    nodejsTo: number
    createdAt?: Date | string
    updatedAt?: Date | string
    chapter: ChapterCreateNestedOneWithoutProjectsInput
    applicationForms?: ApplicationFormCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMembersInput = {
    id?: bigint | number
    name: string
    description?: string | null
    chapterId: bigint | number
    logoImageUrl?: string | null
    bannerImageUrl?: string | null
    planTo: number
    designTo: number
    webTo: number
    androidTo: number
    iosTo: number
    springbootTo: number
    nodejsTo: number
    createdAt?: Date | string
    updatedAt?: Date | string
    applicationForms?: ApplicationFormUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMembersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
  }

  export type ChallengerCreateWithoutProjectMembersInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutChallengersInput
    gisuRoles?: ChallengerGisuCreateNestedManyWithoutChallengerInput
    ledGisuSchools?: GisuSchoolCreateNestedManyWithoutLeaderInput
    viceLedGisuSchools?: GisuSchoolCreateNestedManyWithoutViceLeaderInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
  }

  export type ChallengerUncheckedCreateWithoutProjectMembersInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    schoolId: bigint | number
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuRoles?: ChallengerGisuUncheckedCreateNestedManyWithoutChallengerInput
    ledGisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutLeaderInput
    viceLedGisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutViceLeaderInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ChallengerCreateOrConnectWithoutProjectMembersInput = {
    where: ChallengerWhereUniqueInput
    create: XOR<ChallengerCreateWithoutProjectMembersInput, ChallengerUncheckedCreateWithoutProjectMembersInput>
  }

  export type ProjectUpsertWithoutMembersInput = {
    update: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMembersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectUpdateWithoutMembersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    planTo?: IntFieldUpdateOperationsInput | number
    designTo?: IntFieldUpdateOperationsInput | number
    webTo?: IntFieldUpdateOperationsInput | number
    androidTo?: IntFieldUpdateOperationsInput | number
    iosTo?: IntFieldUpdateOperationsInput | number
    springbootTo?: IntFieldUpdateOperationsInput | number
    nodejsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutProjectsNestedInput
    applicationForms?: ApplicationFormUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMembersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapterId?: BigIntFieldUpdateOperationsInput | bigint | number
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    planTo?: IntFieldUpdateOperationsInput | number
    designTo?: IntFieldUpdateOperationsInput | number
    webTo?: IntFieldUpdateOperationsInput | number
    androidTo?: IntFieldUpdateOperationsInput | number
    iosTo?: IntFieldUpdateOperationsInput | number
    springbootTo?: IntFieldUpdateOperationsInput | number
    nodejsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationForms?: ApplicationFormUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ChallengerUpsertWithoutProjectMembersInput = {
    update: XOR<ChallengerUpdateWithoutProjectMembersInput, ChallengerUncheckedUpdateWithoutProjectMembersInput>
    create: XOR<ChallengerCreateWithoutProjectMembersInput, ChallengerUncheckedCreateWithoutProjectMembersInput>
    where?: ChallengerWhereInput
  }

  export type ChallengerUpdateToOneWithWhereWithoutProjectMembersInput = {
    where?: ChallengerWhereInput
    data: XOR<ChallengerUpdateWithoutProjectMembersInput, ChallengerUncheckedUpdateWithoutProjectMembersInput>
  }

  export type ChallengerUpdateWithoutProjectMembersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutChallengersNestedInput
    gisuRoles?: ChallengerGisuUpdateManyWithoutChallengerNestedInput
    ledGisuSchools?: GisuSchoolUpdateManyWithoutLeaderNestedInput
    viceLedGisuSchools?: GisuSchoolUpdateManyWithoutViceLeaderNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
  }

  export type ChallengerUncheckedUpdateWithoutProjectMembersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuRoles?: ChallengerGisuUncheckedUpdateManyWithoutChallengerNestedInput
    ledGisuSchools?: GisuSchoolUncheckedUpdateManyWithoutLeaderNestedInput
    viceLedGisuSchools?: GisuSchoolUncheckedUpdateManyWithoutViceLeaderNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ProjectCreateWithoutApplicationFormsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    logoImageUrl?: string | null
    bannerImageUrl?: string | null
    planTo: number
    designTo: number
    webTo: number
    androidTo: number
    iosTo: number
    springbootTo: number
    nodejsTo: number
    createdAt?: Date | string
    updatedAt?: Date | string
    chapter: ChapterCreateNestedOneWithoutProjectsInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutApplicationFormsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    chapterId: bigint | number
    logoImageUrl?: string | null
    bannerImageUrl?: string | null
    planTo: number
    designTo: number
    webTo: number
    androidTo: number
    iosTo: number
    springbootTo: number
    nodejsTo: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutApplicationFormsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutApplicationFormsInput, ProjectUncheckedCreateWithoutApplicationFormsInput>
  }

  export type FormQuestionCreateWithoutFormInput = {
    id?: bigint | number
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ApplicationResponseCreateNestedManyWithoutQuestionInput
  }

  export type FormQuestionUncheckedCreateWithoutFormInput = {
    id?: bigint | number
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ApplicationResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type FormQuestionCreateOrConnectWithoutFormInput = {
    where: FormQuestionWhereUniqueInput
    create: XOR<FormQuestionCreateWithoutFormInput, FormQuestionUncheckedCreateWithoutFormInput>
  }

  export type FormQuestionCreateManyFormInputEnvelope = {
    data: FormQuestionCreateManyFormInput | FormQuestionCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutApplicationFormsInput = {
    update: XOR<ProjectUpdateWithoutApplicationFormsInput, ProjectUncheckedUpdateWithoutApplicationFormsInput>
    create: XOR<ProjectCreateWithoutApplicationFormsInput, ProjectUncheckedCreateWithoutApplicationFormsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutApplicationFormsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutApplicationFormsInput, ProjectUncheckedUpdateWithoutApplicationFormsInput>
  }

  export type ProjectUpdateWithoutApplicationFormsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    planTo?: IntFieldUpdateOperationsInput | number
    designTo?: IntFieldUpdateOperationsInput | number
    webTo?: IntFieldUpdateOperationsInput | number
    androidTo?: IntFieldUpdateOperationsInput | number
    iosTo?: IntFieldUpdateOperationsInput | number
    springbootTo?: IntFieldUpdateOperationsInput | number
    nodejsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutProjectsNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutApplicationFormsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapterId?: BigIntFieldUpdateOperationsInput | bigint | number
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    planTo?: IntFieldUpdateOperationsInput | number
    designTo?: IntFieldUpdateOperationsInput | number
    webTo?: IntFieldUpdateOperationsInput | number
    androidTo?: IntFieldUpdateOperationsInput | number
    iosTo?: IntFieldUpdateOperationsInput | number
    springbootTo?: IntFieldUpdateOperationsInput | number
    nodejsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
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
    id?: BigIntFilter<"FormQuestion"> | bigint | number
    formId?: BigIntFilter<"FormQuestion"> | bigint | number
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

  export type ApplicationFormCreateWithoutQuestionsInput = {
    id?: bigint | number
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutApplicationFormsInput
  }

  export type ApplicationFormUncheckedCreateWithoutQuestionsInput = {
    id?: bigint | number
    projectId: bigint | number
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationFormCreateOrConnectWithoutQuestionsInput = {
    where: ApplicationFormWhereUniqueInput
    create: XOR<ApplicationFormCreateWithoutQuestionsInput, ApplicationFormUncheckedCreateWithoutQuestionsInput>
  }

  export type ApplicationResponseCreateWithoutQuestionInput = {
    id?: bigint | number
    value?: ApplicationResponseCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutResponsesInput
  }

  export type ApplicationResponseUncheckedCreateWithoutQuestionInput = {
    id?: bigint | number
    applicationId: bigint | number
    value?: ApplicationResponseCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationResponseCreateOrConnectWithoutQuestionInput = {
    where: ApplicationResponseWhereUniqueInput
    create: XOR<ApplicationResponseCreateWithoutQuestionInput, ApplicationResponseUncheckedCreateWithoutQuestionInput>
  }

  export type ApplicationResponseCreateManyQuestionInputEnvelope = {
    data: ApplicationResponseCreateManyQuestionInput | ApplicationResponseCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationFormUpsertWithoutQuestionsInput = {
    update: XOR<ApplicationFormUpdateWithoutQuestionsInput, ApplicationFormUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ApplicationFormCreateWithoutQuestionsInput, ApplicationFormUncheckedCreateWithoutQuestionsInput>
    where?: ApplicationFormWhereInput
  }

  export type ApplicationFormUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ApplicationFormWhereInput
    data: XOR<ApplicationFormUpdateWithoutQuestionsInput, ApplicationFormUncheckedUpdateWithoutQuestionsInput>
  }

  export type ApplicationFormUpdateWithoutQuestionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutApplicationFormsNestedInput
  }

  export type ApplicationFormUncheckedUpdateWithoutQuestionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projectId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationResponseUpsertWithWhereUniqueWithoutQuestionInput = {
    where: ApplicationResponseWhereUniqueInput
    update: XOR<ApplicationResponseUpdateWithoutQuestionInput, ApplicationResponseUncheckedUpdateWithoutQuestionInput>
    create: XOR<ApplicationResponseCreateWithoutQuestionInput, ApplicationResponseUncheckedCreateWithoutQuestionInput>
  }

  export type ApplicationResponseUpdateWithWhereUniqueWithoutQuestionInput = {
    where: ApplicationResponseWhereUniqueInput
    data: XOR<ApplicationResponseUpdateWithoutQuestionInput, ApplicationResponseUncheckedUpdateWithoutQuestionInput>
  }

  export type ApplicationResponseUpdateManyWithWhereWithoutQuestionInput = {
    where: ApplicationResponseScalarWhereInput
    data: XOR<ApplicationResponseUpdateManyMutationInput, ApplicationResponseUncheckedUpdateManyWithoutQuestionInput>
  }

  export type ApplicationResponseScalarWhereInput = {
    AND?: ApplicationResponseScalarWhereInput | ApplicationResponseScalarWhereInput[]
    OR?: ApplicationResponseScalarWhereInput[]
    NOT?: ApplicationResponseScalarWhereInput | ApplicationResponseScalarWhereInput[]
    id?: BigIntFilter<"ApplicationResponse"> | bigint | number
    applicationId?: BigIntFilter<"ApplicationResponse"> | bigint | number
    questionId?: BigIntFilter<"ApplicationResponse"> | bigint | number
    value?: StringNullableListFilter<"ApplicationResponse">
    createdAt?: DateTimeFilter<"ApplicationResponse"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationResponse"> | Date | string
  }

  export type ChallengerCreateWithoutApplicationsInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutChallengersInput
    gisuRoles?: ChallengerGisuCreateNestedManyWithoutChallengerInput
    ledGisuSchools?: GisuSchoolCreateNestedManyWithoutLeaderInput
    viceLedGisuSchools?: GisuSchoolCreateNestedManyWithoutViceLeaderInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutChallengerInput
  }

  export type ChallengerUncheckedCreateWithoutApplicationsInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    schoolId: bigint | number
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gisuRoles?: ChallengerGisuUncheckedCreateNestedManyWithoutChallengerInput
    ledGisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutLeaderInput
    viceLedGisuSchools?: GisuSchoolUncheckedCreateNestedManyWithoutViceLeaderInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutChallengerInput
  }

  export type ChallengerCreateOrConnectWithoutApplicationsInput = {
    where: ChallengerWhereUniqueInput
    create: XOR<ChallengerCreateWithoutApplicationsInput, ChallengerUncheckedCreateWithoutApplicationsInput>
  }

  export type MatchingRoundCreateWithoutApplicationsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchingRoundUncheckedCreateWithoutApplicationsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    startAt: Date | string
    endAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchingRoundCreateOrConnectWithoutApplicationsInput = {
    where: MatchingRoundWhereUniqueInput
    create: XOR<MatchingRoundCreateWithoutApplicationsInput, MatchingRoundUncheckedCreateWithoutApplicationsInput>
  }

  export type ApplicationResponseCreateWithoutApplicationInput = {
    id?: bigint | number
    value?: ApplicationResponseCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    question: FormQuestionCreateNestedOneWithoutResponsesInput
  }

  export type ApplicationResponseUncheckedCreateWithoutApplicationInput = {
    id?: bigint | number
    questionId: bigint | number
    value?: ApplicationResponseCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationResponseCreateOrConnectWithoutApplicationInput = {
    where: ApplicationResponseWhereUniqueInput
    create: XOR<ApplicationResponseCreateWithoutApplicationInput, ApplicationResponseUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationResponseCreateManyApplicationInputEnvelope = {
    data: ApplicationResponseCreateManyApplicationInput | ApplicationResponseCreateManyApplicationInput[]
    skipDuplicates?: boolean
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
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutChallengersNestedInput
    gisuRoles?: ChallengerGisuUpdateManyWithoutChallengerNestedInput
    ledGisuSchools?: GisuSchoolUpdateManyWithoutLeaderNestedInput
    viceLedGisuSchools?: GisuSchoolUpdateManyWithoutViceLeaderNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutChallengerNestedInput
  }

  export type ChallengerUncheckedUpdateWithoutApplicationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuRoles?: ChallengerGisuUncheckedUpdateManyWithoutChallengerNestedInput
    ledGisuSchools?: GisuSchoolUncheckedUpdateManyWithoutLeaderNestedInput
    viceLedGisuSchools?: GisuSchoolUncheckedUpdateManyWithoutViceLeaderNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutChallengerNestedInput
  }

  export type MatchingRoundUpsertWithoutApplicationsInput = {
    update: XOR<MatchingRoundUpdateWithoutApplicationsInput, MatchingRoundUncheckedUpdateWithoutApplicationsInput>
    create: XOR<MatchingRoundCreateWithoutApplicationsInput, MatchingRoundUncheckedCreateWithoutApplicationsInput>
    where?: MatchingRoundWhereInput
  }

  export type MatchingRoundUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: MatchingRoundWhereInput
    data: XOR<MatchingRoundUpdateWithoutApplicationsInput, MatchingRoundUncheckedUpdateWithoutApplicationsInput>
  }

  export type MatchingRoundUpdateWithoutApplicationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchingRoundUncheckedUpdateWithoutApplicationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationResponseUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationResponseWhereUniqueInput
    update: XOR<ApplicationResponseUpdateWithoutApplicationInput, ApplicationResponseUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationResponseCreateWithoutApplicationInput, ApplicationResponseUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationResponseUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationResponseWhereUniqueInput
    data: XOR<ApplicationResponseUpdateWithoutApplicationInput, ApplicationResponseUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationResponseUpdateManyWithWhereWithoutApplicationInput = {
    where: ApplicationResponseScalarWhereInput
    data: XOR<ApplicationResponseUpdateManyMutationInput, ApplicationResponseUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicationCreateWithoutResponsesInput = {
    id?: bigint | number
    status: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ChallengerCreateNestedOneWithoutApplicationsInput
    matchingRound: MatchingRoundCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutResponsesInput = {
    id?: bigint | number
    applicantId: bigint | number
    matchingRoundId: bigint | number
    status: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutResponsesInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutResponsesInput, ApplicationUncheckedCreateWithoutResponsesInput>
  }

  export type FormQuestionCreateWithoutResponsesInput = {
    id?: bigint | number
    questionNo: number
    title: string
    description?: string | null
    type: $Enums.QuestionTypeEnum
    options?: FormQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    form: ApplicationFormCreateNestedOneWithoutQuestionsInput
  }

  export type FormQuestionUncheckedCreateWithoutResponsesInput = {
    id?: bigint | number
    formId: bigint | number
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

  export type FormQuestionCreateOrConnectWithoutResponsesInput = {
    where: FormQuestionWhereUniqueInput
    create: XOR<FormQuestionCreateWithoutResponsesInput, FormQuestionUncheckedCreateWithoutResponsesInput>
  }

  export type ApplicationUpsertWithoutResponsesInput = {
    update: XOR<ApplicationUpdateWithoutResponsesInput, ApplicationUncheckedUpdateWithoutResponsesInput>
    create: XOR<ApplicationCreateWithoutResponsesInput, ApplicationUncheckedCreateWithoutResponsesInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutResponsesInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutResponsesInput, ApplicationUncheckedUpdateWithoutResponsesInput>
  }

  export type ApplicationUpdateWithoutResponsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ChallengerUpdateOneRequiredWithoutApplicationsNestedInput
    matchingRound?: MatchingRoundUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutResponsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applicantId?: BigIntFieldUpdateOperationsInput | bigint | number
    matchingRoundId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormQuestionUpsertWithoutResponsesInput = {
    update: XOR<FormQuestionUpdateWithoutResponsesInput, FormQuestionUncheckedUpdateWithoutResponsesInput>
    create: XOR<FormQuestionCreateWithoutResponsesInput, FormQuestionUncheckedCreateWithoutResponsesInput>
    where?: FormQuestionWhereInput
  }

  export type FormQuestionUpdateToOneWithWhereWithoutResponsesInput = {
    where?: FormQuestionWhereInput
    data: XOR<FormQuestionUpdateWithoutResponsesInput, FormQuestionUncheckedUpdateWithoutResponsesInput>
  }

  export type FormQuestionUpdateWithoutResponsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: ApplicationFormUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type FormQuestionUncheckedUpdateWithoutResponsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    formId?: BigIntFieldUpdateOperationsInput | bigint | number
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

  export type ApplicationCreateWithoutMatchingRoundInput = {
    id?: bigint | number
    status: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ChallengerCreateNestedOneWithoutApplicationsInput
    responses?: ApplicationResponseCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutMatchingRoundInput = {
    id?: bigint | number
    applicantId: bigint | number
    status: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ApplicationResponseUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutMatchingRoundInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutMatchingRoundInput, ApplicationUncheckedCreateWithoutMatchingRoundInput>
  }

  export type ApplicationCreateManyMatchingRoundInputEnvelope = {
    data: ApplicationCreateManyMatchingRoundInput | ApplicationCreateManyMatchingRoundInput[]
    skipDuplicates?: boolean
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

  export type ChallengerGisuCreateManyChallengerInput = {
    id?: bigint | number
    gisuId: bigint | number
    isSchoolAdmin: boolean
    isChapterAdmin: boolean
    isCentralAdmin: boolean
    schoolAdminType?: string | null
    chapterAdminType?: string | null
    centralAdminType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GisuSchoolCreateManyLeaderInput = {
    id?: bigint | number
    gisuId: bigint | number
    schoolId: bigint | number
    viceLeaderId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GisuSchoolCreateManyViceLeaderInput = {
    id?: bigint | number
    gisuId: bigint | number
    schoolId: bigint | number
    leaderId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberCreateManyChallengerInput = {
    id?: bigint | number
    projectId: bigint | number
    role: $Enums.UserPartEnum
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateManyApplicantInput = {
    id?: bigint | number
    matchingRoundId: bigint | number
    status: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengerGisuUpdateWithoutChallengerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isSchoolAdmin?: BoolFieldUpdateOperationsInput | boolean
    isChapterAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCentralAdmin?: BoolFieldUpdateOperationsInput | boolean
    schoolAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    chapterAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    centralAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisu?: GisuUpdateOneRequiredWithoutChallengerGisusNestedInput
  }

  export type ChallengerGisuUncheckedUpdateWithoutChallengerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    isSchoolAdmin?: BoolFieldUpdateOperationsInput | boolean
    isChapterAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCentralAdmin?: BoolFieldUpdateOperationsInput | boolean
    schoolAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    chapterAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    centralAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengerGisuUncheckedUpdateManyWithoutChallengerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    isSchoolAdmin?: BoolFieldUpdateOperationsInput | boolean
    isChapterAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCentralAdmin?: BoolFieldUpdateOperationsInput | boolean
    schoolAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    chapterAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    centralAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuSchoolUpdateWithoutLeaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisu?: GisuUpdateOneRequiredWithoutGisuSchoolsNestedInput
    school?: SchoolUpdateOneRequiredWithoutGisuSchoolsNestedInput
    viceLeader?: ChallengerUpdateOneWithoutViceLedGisuSchoolsNestedInput
  }

  export type GisuSchoolUncheckedUpdateWithoutLeaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    viceLeaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuSchoolUncheckedUpdateManyWithoutLeaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    viceLeaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuSchoolUpdateWithoutViceLeaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisu?: GisuUpdateOneRequiredWithoutGisuSchoolsNestedInput
    school?: SchoolUpdateOneRequiredWithoutGisuSchoolsNestedInput
    leader?: ChallengerUpdateOneRequiredWithoutLedGisuSchoolsNestedInput
  }

  export type GisuSchoolUncheckedUpdateWithoutViceLeaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    leaderId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuSchoolUncheckedUpdateManyWithoutViceLeaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    leaderId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUpdateWithoutChallengerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutChallengerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projectId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutChallengerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    projectId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutApplicantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchingRound?: MatchingRoundUpdateOneRequiredWithoutApplicationsNestedInput
    responses?: ApplicationResponseUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    matchingRoundId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ApplicationResponseUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    matchingRoundId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuSchoolCreateManyGisuInput = {
    id?: bigint | number
    schoolId: bigint | number
    leaderId: bigint | number
    viceLeaderId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterCreateManyGisuInput = {
    id?: bigint | number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengerGisuCreateManyGisuInput = {
    id?: bigint | number
    challengerId: bigint | number
    isSchoolAdmin: boolean
    isChapterAdmin: boolean
    isCentralAdmin: boolean
    schoolAdminType?: string | null
    chapterAdminType?: string | null
    centralAdminType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GisuSchoolUpdateWithoutGisuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutGisuSchoolsNestedInput
    leader?: ChallengerUpdateOneRequiredWithoutLedGisuSchoolsNestedInput
    viceLeader?: ChallengerUpdateOneWithoutViceLedGisuSchoolsNestedInput
  }

  export type GisuSchoolUncheckedUpdateWithoutGisuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    leaderId?: BigIntFieldUpdateOperationsInput | bigint | number
    viceLeaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuSchoolUncheckedUpdateManyWithoutGisuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    schoolId?: BigIntFieldUpdateOperationsInput | bigint | number
    leaderId?: BigIntFieldUpdateOperationsInput | bigint | number
    viceLeaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUpdateWithoutGisuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutGisuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateManyWithoutGisuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengerGisuUpdateWithoutGisuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isSchoolAdmin?: BoolFieldUpdateOperationsInput | boolean
    isChapterAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCentralAdmin?: BoolFieldUpdateOperationsInput | boolean
    schoolAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    chapterAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    centralAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenger?: ChallengerUpdateOneRequiredWithoutGisuRolesNestedInput
  }

  export type ChallengerGisuUncheckedUpdateWithoutGisuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    challengerId?: BigIntFieldUpdateOperationsInput | bigint | number
    isSchoolAdmin?: BoolFieldUpdateOperationsInput | boolean
    isChapterAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCentralAdmin?: BoolFieldUpdateOperationsInput | boolean
    schoolAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    chapterAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    centralAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengerGisuUncheckedUpdateManyWithoutGisuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    challengerId?: BigIntFieldUpdateOperationsInput | bigint | number
    isSchoolAdmin?: BoolFieldUpdateOperationsInput | boolean
    isChapterAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCentralAdmin?: BoolFieldUpdateOperationsInput | boolean
    schoolAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    chapterAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    centralAdminType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengerCreateManySchoolInput = {
    id?: bigint | number
    umsbId: number
    name: string
    nickname: string
    gender: $Enums.GenderEnum
    studentId: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GisuSchoolCreateManySchoolInput = {
    id?: bigint | number
    gisuId: bigint | number
    leaderId: bigint | number
    viceLeaderId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengerUpdateWithoutSchoolInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuRoles?: ChallengerGisuUpdateManyWithoutChallengerNestedInput
    ledGisuSchools?: GisuSchoolUpdateManyWithoutLeaderNestedInput
    viceLedGisuSchools?: GisuSchoolUpdateManyWithoutViceLeaderNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutChallengerNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
  }

  export type ChallengerUncheckedUpdateWithoutSchoolInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisuRoles?: ChallengerGisuUncheckedUpdateManyWithoutChallengerNestedInput
    ledGisuSchools?: GisuSchoolUncheckedUpdateManyWithoutLeaderNestedInput
    viceLedGisuSchools?: GisuSchoolUncheckedUpdateManyWithoutViceLeaderNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutChallengerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ChallengerUncheckedUpdateManyWithoutSchoolInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    umsbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum
    studentId?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuSchoolUpdateWithoutSchoolInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gisu?: GisuUpdateOneRequiredWithoutGisuSchoolsNestedInput
    leader?: ChallengerUpdateOneRequiredWithoutLedGisuSchoolsNestedInput
    viceLeader?: ChallengerUpdateOneWithoutViceLedGisuSchoolsNestedInput
  }

  export type GisuSchoolUncheckedUpdateWithoutSchoolInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    leaderId?: BigIntFieldUpdateOperationsInput | bigint | number
    viceLeaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GisuSchoolUncheckedUpdateManyWithoutSchoolInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    gisuId?: BigIntFieldUpdateOperationsInput | bigint | number
    leaderId?: BigIntFieldUpdateOperationsInput | bigint | number
    viceLeaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyChapterInput = {
    id?: bigint | number
    name: string
    description?: string | null
    logoImageUrl?: string | null
    bannerImageUrl?: string | null
    planTo: number
    designTo: number
    webTo: number
    androidTo: number
    iosTo: number
    springbootTo: number
    nodejsTo: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutChapterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    planTo?: IntFieldUpdateOperationsInput | number
    designTo?: IntFieldUpdateOperationsInput | number
    webTo?: IntFieldUpdateOperationsInput | number
    androidTo?: IntFieldUpdateOperationsInput | number
    iosTo?: IntFieldUpdateOperationsInput | number
    springbootTo?: IntFieldUpdateOperationsInput | number
    nodejsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    applicationForms?: ApplicationFormUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutChapterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    planTo?: IntFieldUpdateOperationsInput | number
    designTo?: IntFieldUpdateOperationsInput | number
    webTo?: IntFieldUpdateOperationsInput | number
    androidTo?: IntFieldUpdateOperationsInput | number
    iosTo?: IntFieldUpdateOperationsInput | number
    springbootTo?: IntFieldUpdateOperationsInput | number
    nodejsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    applicationForms?: ApplicationFormUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutChapterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    planTo?: IntFieldUpdateOperationsInput | number
    designTo?: IntFieldUpdateOperationsInput | number
    webTo?: IntFieldUpdateOperationsInput | number
    androidTo?: IntFieldUpdateOperationsInput | number
    iosTo?: IntFieldUpdateOperationsInput | number
    springbootTo?: IntFieldUpdateOperationsInput | number
    nodejsTo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateManyProjectInput = {
    id?: bigint | number
    challengerId: bigint | number
    role: $Enums.UserPartEnum
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationFormCreateManyProjectInput = {
    id?: bigint | number
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberUpdateWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenger?: ChallengerUpdateOneRequiredWithoutProjectMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    challengerId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    challengerId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumUserPartEnumFieldUpdateOperationsInput | $Enums.UserPartEnum
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationFormUpdateWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: FormQuestionUpdateManyWithoutFormNestedInput
  }

  export type ApplicationFormUncheckedUpdateWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: FormQuestionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type ApplicationFormUncheckedUpdateManyWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormQuestionCreateManyFormInput = {
    id?: bigint | number
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

  export type FormQuestionUpdateWithoutFormInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ApplicationResponseUpdateManyWithoutQuestionNestedInput
  }

  export type FormQuestionUncheckedUpdateWithoutFormInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    questionNo?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeEnumFieldUpdateOperationsInput | $Enums.QuestionTypeEnum
    options?: FormQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ApplicationResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type FormQuestionUncheckedUpdateManyWithoutFormInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
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

  export type ApplicationResponseCreateManyQuestionInput = {
    id?: bigint | number
    applicationId: bigint | number
    value?: ApplicationResponseCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationResponseUpdateWithoutQuestionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: ApplicationResponseUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ApplicationResponseUncheckedUpdateWithoutQuestionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applicationId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: ApplicationResponseUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationResponseUncheckedUpdateManyWithoutQuestionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applicationId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: ApplicationResponseUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationResponseCreateManyApplicationInput = {
    id?: bigint | number
    questionId: bigint | number
    value?: ApplicationResponseCreatevalueInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationResponseUpdateWithoutApplicationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: ApplicationResponseUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: FormQuestionUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ApplicationResponseUncheckedUpdateWithoutApplicationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    questionId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: ApplicationResponseUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationResponseUncheckedUpdateManyWithoutApplicationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    questionId?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: ApplicationResponseUpdatevalueInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyMatchingRoundInput = {
    id?: bigint | number
    applicantId: bigint | number
    status: $Enums.ApplicationStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateWithoutMatchingRoundInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ChallengerUpdateOneRequiredWithoutApplicationsNestedInput
    responses?: ApplicationResponseUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutMatchingRoundInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applicantId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ApplicationResponseUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutMatchingRoundInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applicantId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumApplicationStatusEnumFieldUpdateOperationsInput | $Enums.ApplicationStatusEnum
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