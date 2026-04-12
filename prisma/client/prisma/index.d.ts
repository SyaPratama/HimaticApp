
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Sessions
 * 
 */
export type Sessions = $Result.DefaultSelection<Prisma.$SessionsPayload>
/**
 * Model Countdowns
 * 
 */
export type Countdowns = $Result.DefaultSelection<Prisma.$CountdownsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FilePath
 * 
 */
export type FilePath = $Result.DefaultSelection<Prisma.$FilePathPayload>
/**
 * Model FilesOnProfiles
 * 
 */
export type FilesOnProfiles = $Result.DefaultSelection<Prisma.$FilesOnProfilesPayload>
/**
 * Model Profiles
 * 
 */
export type Profiles = $Result.DefaultSelection<Prisma.$ProfilesPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Provider: {
  FACEBOOK: 'FACEBOOK',
  GOOGLE: 'GOOGLE'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Sessions
 * const sessions = await prisma.sessions.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Sessions
   * const sessions = await prisma.sessions.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sessions`: Exposes CRUD operations for the **Sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.SessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.countdowns`: Exposes CRUD operations for the **Countdowns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countdowns
    * const countdowns = await prisma.countdowns.findMany()
    * ```
    */
  get countdowns(): Prisma.CountdownsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filePath`: Exposes CRUD operations for the **FilePath** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilePaths
    * const filePaths = await prisma.filePath.findMany()
    * ```
    */
  get filePath(): Prisma.FilePathDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filesOnProfiles`: Exposes CRUD operations for the **FilesOnProfiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilesOnProfiles
    * const filesOnProfiles = await prisma.filesOnProfiles.findMany()
    * ```
    */
  get filesOnProfiles(): Prisma.FilesOnProfilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **Profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.ProfilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Sessions: 'Sessions',
    Countdowns: 'Countdowns',
    User: 'User',
    FilePath: 'FilePath',
    FilesOnProfiles: 'FilesOnProfiles',
    Profiles: 'Profiles',
    Activity: 'Activity',
    Account: 'Account'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sessions" | "countdowns" | "user" | "filePath" | "filesOnProfiles" | "profiles" | "activity" | "account"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sessions: {
        payload: Prisma.$SessionsPayload<ExtArgs>
        fields: Prisma.SessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findFirst: {
            args: Prisma.SessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findMany: {
            args: Prisma.SessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          create: {
            args: Prisma.SessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          createMany: {
            args: Prisma.SessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          delete: {
            args: Prisma.SessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          update: {
            args: Prisma.SessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          deleteMany: {
            args: Prisma.SessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          upsert: {
            args: Prisma.SessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.SessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      Countdowns: {
        payload: Prisma.$CountdownsPayload<ExtArgs>
        fields: Prisma.CountdownsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountdownsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountdownsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountdownsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountdownsPayload>
          }
          findFirst: {
            args: Prisma.CountdownsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountdownsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountdownsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountdownsPayload>
          }
          findMany: {
            args: Prisma.CountdownsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountdownsPayload>[]
          }
          create: {
            args: Prisma.CountdownsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountdownsPayload>
          }
          createMany: {
            args: Prisma.CountdownsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountdownsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountdownsPayload>[]
          }
          delete: {
            args: Prisma.CountdownsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountdownsPayload>
          }
          update: {
            args: Prisma.CountdownsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountdownsPayload>
          }
          deleteMany: {
            args: Prisma.CountdownsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountdownsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountdownsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountdownsPayload>[]
          }
          upsert: {
            args: Prisma.CountdownsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountdownsPayload>
          }
          aggregate: {
            args: Prisma.CountdownsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountdowns>
          }
          groupBy: {
            args: Prisma.CountdownsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountdownsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountdownsCountArgs<ExtArgs>
            result: $Utils.Optional<CountdownsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FilePath: {
        payload: Prisma.$FilePathPayload<ExtArgs>
        fields: Prisma.FilePathFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilePathFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePathPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilePathFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePathPayload>
          }
          findFirst: {
            args: Prisma.FilePathFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePathPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilePathFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePathPayload>
          }
          findMany: {
            args: Prisma.FilePathFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePathPayload>[]
          }
          create: {
            args: Prisma.FilePathCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePathPayload>
          }
          createMany: {
            args: Prisma.FilePathCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilePathCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePathPayload>[]
          }
          delete: {
            args: Prisma.FilePathDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePathPayload>
          }
          update: {
            args: Prisma.FilePathUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePathPayload>
          }
          deleteMany: {
            args: Prisma.FilePathDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilePathUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilePathUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePathPayload>[]
          }
          upsert: {
            args: Prisma.FilePathUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePathPayload>
          }
          aggregate: {
            args: Prisma.FilePathAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilePath>
          }
          groupBy: {
            args: Prisma.FilePathGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilePathGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilePathCountArgs<ExtArgs>
            result: $Utils.Optional<FilePathCountAggregateOutputType> | number
          }
        }
      }
      FilesOnProfiles: {
        payload: Prisma.$FilesOnProfilesPayload<ExtArgs>
        fields: Prisma.FilesOnProfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilesOnProfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesOnProfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilesOnProfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesOnProfilesPayload>
          }
          findFirst: {
            args: Prisma.FilesOnProfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesOnProfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilesOnProfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesOnProfilesPayload>
          }
          findMany: {
            args: Prisma.FilesOnProfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesOnProfilesPayload>[]
          }
          create: {
            args: Prisma.FilesOnProfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesOnProfilesPayload>
          }
          createMany: {
            args: Prisma.FilesOnProfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilesOnProfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesOnProfilesPayload>[]
          }
          delete: {
            args: Prisma.FilesOnProfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesOnProfilesPayload>
          }
          update: {
            args: Prisma.FilesOnProfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesOnProfilesPayload>
          }
          deleteMany: {
            args: Prisma.FilesOnProfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilesOnProfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilesOnProfilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesOnProfilesPayload>[]
          }
          upsert: {
            args: Prisma.FilesOnProfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesOnProfilesPayload>
          }
          aggregate: {
            args: Prisma.FilesOnProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilesOnProfiles>
          }
          groupBy: {
            args: Prisma.FilesOnProfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilesOnProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilesOnProfilesCountArgs<ExtArgs>
            result: $Utils.Optional<FilesOnProfilesCountAggregateOutputType> | number
          }
        }
      }
      Profiles: {
        payload: Prisma.$ProfilesPayload<ExtArgs>
        fields: Prisma.ProfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          findFirst: {
            args: Prisma.ProfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          findMany: {
            args: Prisma.ProfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          create: {
            args: Prisma.ProfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          createMany: {
            args: Prisma.ProfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          delete: {
            args: Prisma.ProfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          update: {
            args: Prisma.ProfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          deleteMany: {
            args: Prisma.ProfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          upsert: {
            args: Prisma.ProfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.ProfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    sessions?: SessionsOmit
    countdowns?: CountdownsOmit
    user?: UserOmit
    filePath?: FilePathOmit
    filesOnProfiles?: FilesOnProfilesOmit
    profiles?: ProfilesOmit
    activity?: ActivityOmit
    account?: AccountOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    activityLog: number
    session: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityLog?: boolean | UserCountOutputTypeCountActivityLogArgs
    session?: boolean | UserCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
  }


  /**
   * Count Type FilePathCountOutputType
   */

  export type FilePathCountOutputType = {
    avatarFiles: number
  }

  export type FilePathCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatarFiles?: boolean | FilePathCountOutputTypeCountAvatarFilesArgs
  }

  // Custom InputTypes
  /**
   * FilePathCountOutputType without action
   */
  export type FilePathCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePathCountOutputType
     */
    select?: FilePathCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilePathCountOutputType without action
   */
  export type FilePathCountOutputTypeCountAvatarFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesOnProfilesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    refreshExpiresAt: number | null
    accessExpiresAt: number | null
  }

  export type SessionsSumAggregateOutputType = {
    refreshExpiresAt: number | null
    accessExpiresAt: number | null
  }

  export type SessionsMinAggregateOutputType = {
    id: string | null
    refreshToken: string | null
    refreshExpiresAt: number | null
    accessToken: string | null
    accessExpiresAt: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: string | null
    refreshToken: string | null
    refreshExpiresAt: number | null
    accessToken: string | null
    accessExpiresAt: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    refreshToken: number
    refreshExpiresAt: number
    accessToken: number
    accessExpiresAt: number
    userId: number
    createdAt: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    refreshExpiresAt?: true
    accessExpiresAt?: true
  }

  export type SessionsSumAggregateInputType = {
    refreshExpiresAt?: true
    accessExpiresAt?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    refreshToken?: true
    refreshExpiresAt?: true
    accessToken?: true
    accessExpiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    refreshToken?: true
    refreshExpiresAt?: true
    accessToken?: true
    accessExpiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    refreshToken?: true
    refreshExpiresAt?: true
    accessToken?: true
    accessExpiresAt?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to aggregate.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type SessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithAggregationInput | SessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: SessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: string
    refreshToken: string
    refreshExpiresAt: number | null
    accessToken: string
    accessExpiresAt: number | null
    userId: string
    createdAt: Date
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends SessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type SessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    refreshExpiresAt?: boolean
    accessToken?: boolean
    accessExpiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    refreshExpiresAt?: boolean
    accessToken?: boolean
    accessExpiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    refreshExpiresAt?: boolean
    accessToken?: boolean
    accessExpiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectScalar = {
    id?: boolean
    refreshToken?: boolean
    refreshExpiresAt?: boolean
    accessToken?: boolean
    accessExpiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type SessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "refreshToken" | "refreshExpiresAt" | "accessToken" | "accessExpiresAt" | "userId" | "createdAt", ExtArgs["result"]["sessions"]>
  export type SessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      refreshToken: string
      refreshExpiresAt: number | null
      accessToken: string
      accessExpiresAt: number | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type SessionsGetPayload<S extends boolean | null | undefined | SessionsDefaultArgs> = $Result.GetResult<Prisma.$SessionsPayload, S>

  type SessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface SessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessions'], meta: { name: 'Sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {SessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionsFindUniqueArgs>(args: SelectSubset<T, SessionsFindUniqueArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionsFindFirstArgs>(args?: SelectSubset<T, SessionsFindFirstArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionsFindManyArgs>(args?: SelectSubset<T, SessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {SessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends SessionsCreateArgs>(args: SelectSubset<T, SessionsCreateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionsCreateManyArgs>(args?: SelectSubset<T, SessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {SessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends SessionsDeleteArgs>(args: SelectSubset<T, SessionsDeleteArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {SessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionsUpdateArgs>(args: SelectSubset<T, SessionsUpdateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionsDeleteManyArgs>(args?: SelectSubset<T, SessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionsUpdateManyArgs>(args: SelectSubset<T, SessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {SessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends SessionsUpsertArgs>(args: SelectSubset<T, SessionsUpsertArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionsCountArgs>(
      args?: Subset<T, SessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsGroupByArgs} args - Group by arguments.
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
      T extends SessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionsGroupByArgs['orderBy'] }
        : { orderBy?: SessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessions model
   */
  readonly fields: SessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sessions model
   */
  interface SessionsFieldRefs {
    readonly id: FieldRef<"Sessions", 'String'>
    readonly refreshToken: FieldRef<"Sessions", 'String'>
    readonly refreshExpiresAt: FieldRef<"Sessions", 'Int'>
    readonly accessToken: FieldRef<"Sessions", 'String'>
    readonly accessExpiresAt: FieldRef<"Sessions", 'Int'>
    readonly userId: FieldRef<"Sessions", 'String'>
    readonly createdAt: FieldRef<"Sessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sessions findUnique
   */
  export type SessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findUniqueOrThrow
   */
  export type SessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findFirst
   */
  export type SessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findFirstOrThrow
   */
  export type SessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findMany
   */
  export type SessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions create
   */
  export type SessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Sessions.
     */
    data: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
  }

  /**
   * Sessions createMany
   */
  export type SessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessions createManyAndReturn
   */
  export type SessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions update
   */
  export type SessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Sessions.
     */
    data: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
    /**
     * Choose, which Sessions to update.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions updateMany
   */
  export type SessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Sessions updateManyAndReturn
   */
  export type SessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions upsert
   */
  export type SessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Sessions to update in case it exists.
     */
    where: SessionsWhereUniqueInput
    /**
     * In case the Sessions found by the `where` argument doesn't exist, create a new Sessions with this data.
     */
    create: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
    /**
     * In case the Sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
  }

  /**
   * Sessions delete
   */
  export type SessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter which Sessions to delete.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions deleteMany
   */
  export type SessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Sessions without action
   */
  export type SessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
  }


  /**
   * Model Countdowns
   */

  export type AggregateCountdowns = {
    _count: CountdownsCountAggregateOutputType | null
    _avg: CountdownsAvgAggregateOutputType | null
    _sum: CountdownsSumAggregateOutputType | null
    _min: CountdownsMinAggregateOutputType | null
    _max: CountdownsMaxAggregateOutputType | null
  }

  export type CountdownsAvgAggregateOutputType = {
    countdown: number | null
  }

  export type CountdownsSumAggregateOutputType = {
    countdown: number | null
  }

  export type CountdownsMinAggregateOutputType = {
    id: string | null
    countdown: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountdownsMaxAggregateOutputType = {
    id: string | null
    countdown: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountdownsCountAggregateOutputType = {
    id: number
    countdown: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CountdownsAvgAggregateInputType = {
    countdown?: true
  }

  export type CountdownsSumAggregateInputType = {
    countdown?: true
  }

  export type CountdownsMinAggregateInputType = {
    id?: true
    countdown?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountdownsMaxAggregateInputType = {
    id?: true
    countdown?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountdownsCountAggregateInputType = {
    id?: true
    countdown?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CountdownsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countdowns to aggregate.
     */
    where?: CountdownsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countdowns to fetch.
     */
    orderBy?: CountdownsOrderByWithRelationInput | CountdownsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountdownsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countdowns
    **/
    _count?: true | CountdownsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountdownsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountdownsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountdownsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountdownsMaxAggregateInputType
  }

  export type GetCountdownsAggregateType<T extends CountdownsAggregateArgs> = {
        [P in keyof T & keyof AggregateCountdowns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountdowns[P]>
      : GetScalarType<T[P], AggregateCountdowns[P]>
  }




  export type CountdownsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountdownsWhereInput
    orderBy?: CountdownsOrderByWithAggregationInput | CountdownsOrderByWithAggregationInput[]
    by: CountdownsScalarFieldEnum[] | CountdownsScalarFieldEnum
    having?: CountdownsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountdownsCountAggregateInputType | true
    _avg?: CountdownsAvgAggregateInputType
    _sum?: CountdownsSumAggregateInputType
    _min?: CountdownsMinAggregateInputType
    _max?: CountdownsMaxAggregateInputType
  }

  export type CountdownsGroupByOutputType = {
    id: string
    countdown: number
    createdAt: Date
    updatedAt: Date
    _count: CountdownsCountAggregateOutputType | null
    _avg: CountdownsAvgAggregateOutputType | null
    _sum: CountdownsSumAggregateOutputType | null
    _min: CountdownsMinAggregateOutputType | null
    _max: CountdownsMaxAggregateOutputType | null
  }

  type GetCountdownsGroupByPayload<T extends CountdownsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountdownsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountdownsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountdownsGroupByOutputType[P]>
            : GetScalarType<T[P], CountdownsGroupByOutputType[P]>
        }
      >
    >


  export type CountdownsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countdown?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["countdowns"]>

  export type CountdownsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countdown?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["countdowns"]>

  export type CountdownsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countdown?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["countdowns"]>

  export type CountdownsSelectScalar = {
    id?: boolean
    countdown?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CountdownsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "countdown" | "createdAt" | "updatedAt", ExtArgs["result"]["countdowns"]>

  export type $CountdownsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Countdowns"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      countdown: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["countdowns"]>
    composites: {}
  }

  type CountdownsGetPayload<S extends boolean | null | undefined | CountdownsDefaultArgs> = $Result.GetResult<Prisma.$CountdownsPayload, S>

  type CountdownsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountdownsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountdownsCountAggregateInputType | true
    }

  export interface CountdownsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Countdowns'], meta: { name: 'Countdowns' } }
    /**
     * Find zero or one Countdowns that matches the filter.
     * @param {CountdownsFindUniqueArgs} args - Arguments to find a Countdowns
     * @example
     * // Get one Countdowns
     * const countdowns = await prisma.countdowns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountdownsFindUniqueArgs>(args: SelectSubset<T, CountdownsFindUniqueArgs<ExtArgs>>): Prisma__CountdownsClient<$Result.GetResult<Prisma.$CountdownsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Countdowns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountdownsFindUniqueOrThrowArgs} args - Arguments to find a Countdowns
     * @example
     * // Get one Countdowns
     * const countdowns = await prisma.countdowns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountdownsFindUniqueOrThrowArgs>(args: SelectSubset<T, CountdownsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountdownsClient<$Result.GetResult<Prisma.$CountdownsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Countdowns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountdownsFindFirstArgs} args - Arguments to find a Countdowns
     * @example
     * // Get one Countdowns
     * const countdowns = await prisma.countdowns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountdownsFindFirstArgs>(args?: SelectSubset<T, CountdownsFindFirstArgs<ExtArgs>>): Prisma__CountdownsClient<$Result.GetResult<Prisma.$CountdownsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Countdowns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountdownsFindFirstOrThrowArgs} args - Arguments to find a Countdowns
     * @example
     * // Get one Countdowns
     * const countdowns = await prisma.countdowns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountdownsFindFirstOrThrowArgs>(args?: SelectSubset<T, CountdownsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountdownsClient<$Result.GetResult<Prisma.$CountdownsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countdowns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountdownsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countdowns
     * const countdowns = await prisma.countdowns.findMany()
     * 
     * // Get first 10 Countdowns
     * const countdowns = await prisma.countdowns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countdownsWithIdOnly = await prisma.countdowns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountdownsFindManyArgs>(args?: SelectSubset<T, CountdownsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountdownsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Countdowns.
     * @param {CountdownsCreateArgs} args - Arguments to create a Countdowns.
     * @example
     * // Create one Countdowns
     * const Countdowns = await prisma.countdowns.create({
     *   data: {
     *     // ... data to create a Countdowns
     *   }
     * })
     * 
     */
    create<T extends CountdownsCreateArgs>(args: SelectSubset<T, CountdownsCreateArgs<ExtArgs>>): Prisma__CountdownsClient<$Result.GetResult<Prisma.$CountdownsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countdowns.
     * @param {CountdownsCreateManyArgs} args - Arguments to create many Countdowns.
     * @example
     * // Create many Countdowns
     * const countdowns = await prisma.countdowns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountdownsCreateManyArgs>(args?: SelectSubset<T, CountdownsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countdowns and returns the data saved in the database.
     * @param {CountdownsCreateManyAndReturnArgs} args - Arguments to create many Countdowns.
     * @example
     * // Create many Countdowns
     * const countdowns = await prisma.countdowns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countdowns and only return the `id`
     * const countdownsWithIdOnly = await prisma.countdowns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountdownsCreateManyAndReturnArgs>(args?: SelectSubset<T, CountdownsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountdownsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Countdowns.
     * @param {CountdownsDeleteArgs} args - Arguments to delete one Countdowns.
     * @example
     * // Delete one Countdowns
     * const Countdowns = await prisma.countdowns.delete({
     *   where: {
     *     // ... filter to delete one Countdowns
     *   }
     * })
     * 
     */
    delete<T extends CountdownsDeleteArgs>(args: SelectSubset<T, CountdownsDeleteArgs<ExtArgs>>): Prisma__CountdownsClient<$Result.GetResult<Prisma.$CountdownsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Countdowns.
     * @param {CountdownsUpdateArgs} args - Arguments to update one Countdowns.
     * @example
     * // Update one Countdowns
     * const countdowns = await prisma.countdowns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountdownsUpdateArgs>(args: SelectSubset<T, CountdownsUpdateArgs<ExtArgs>>): Prisma__CountdownsClient<$Result.GetResult<Prisma.$CountdownsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countdowns.
     * @param {CountdownsDeleteManyArgs} args - Arguments to filter Countdowns to delete.
     * @example
     * // Delete a few Countdowns
     * const { count } = await prisma.countdowns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountdownsDeleteManyArgs>(args?: SelectSubset<T, CountdownsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countdowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountdownsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countdowns
     * const countdowns = await prisma.countdowns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountdownsUpdateManyArgs>(args: SelectSubset<T, CountdownsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countdowns and returns the data updated in the database.
     * @param {CountdownsUpdateManyAndReturnArgs} args - Arguments to update many Countdowns.
     * @example
     * // Update many Countdowns
     * const countdowns = await prisma.countdowns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countdowns and only return the `id`
     * const countdownsWithIdOnly = await prisma.countdowns.updateManyAndReturn({
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
    updateManyAndReturn<T extends CountdownsUpdateManyAndReturnArgs>(args: SelectSubset<T, CountdownsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountdownsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Countdowns.
     * @param {CountdownsUpsertArgs} args - Arguments to update or create a Countdowns.
     * @example
     * // Update or create a Countdowns
     * const countdowns = await prisma.countdowns.upsert({
     *   create: {
     *     // ... data to create a Countdowns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Countdowns we want to update
     *   }
     * })
     */
    upsert<T extends CountdownsUpsertArgs>(args: SelectSubset<T, CountdownsUpsertArgs<ExtArgs>>): Prisma__CountdownsClient<$Result.GetResult<Prisma.$CountdownsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countdowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountdownsCountArgs} args - Arguments to filter Countdowns to count.
     * @example
     * // Count the number of Countdowns
     * const count = await prisma.countdowns.count({
     *   where: {
     *     // ... the filter for the Countdowns we want to count
     *   }
     * })
    **/
    count<T extends CountdownsCountArgs>(
      args?: Subset<T, CountdownsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountdownsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Countdowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountdownsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountdownsAggregateArgs>(args: Subset<T, CountdownsAggregateArgs>): Prisma.PrismaPromise<GetCountdownsAggregateType<T>>

    /**
     * Group by Countdowns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountdownsGroupByArgs} args - Group by arguments.
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
      T extends CountdownsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountdownsGroupByArgs['orderBy'] }
        : { orderBy?: CountdownsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountdownsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountdownsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Countdowns model
   */
  readonly fields: CountdownsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Countdowns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountdownsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Countdowns model
   */
  interface CountdownsFieldRefs {
    readonly id: FieldRef<"Countdowns", 'String'>
    readonly countdown: FieldRef<"Countdowns", 'Int'>
    readonly createdAt: FieldRef<"Countdowns", 'DateTime'>
    readonly updatedAt: FieldRef<"Countdowns", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Countdowns findUnique
   */
  export type CountdownsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countdowns
     */
    select?: CountdownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countdowns
     */
    omit?: CountdownsOmit<ExtArgs> | null
    /**
     * Filter, which Countdowns to fetch.
     */
    where: CountdownsWhereUniqueInput
  }

  /**
   * Countdowns findUniqueOrThrow
   */
  export type CountdownsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countdowns
     */
    select?: CountdownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countdowns
     */
    omit?: CountdownsOmit<ExtArgs> | null
    /**
     * Filter, which Countdowns to fetch.
     */
    where: CountdownsWhereUniqueInput
  }

  /**
   * Countdowns findFirst
   */
  export type CountdownsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countdowns
     */
    select?: CountdownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countdowns
     */
    omit?: CountdownsOmit<ExtArgs> | null
    /**
     * Filter, which Countdowns to fetch.
     */
    where?: CountdownsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countdowns to fetch.
     */
    orderBy?: CountdownsOrderByWithRelationInput | CountdownsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countdowns.
     */
    cursor?: CountdownsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countdowns.
     */
    distinct?: CountdownsScalarFieldEnum | CountdownsScalarFieldEnum[]
  }

  /**
   * Countdowns findFirstOrThrow
   */
  export type CountdownsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countdowns
     */
    select?: CountdownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countdowns
     */
    omit?: CountdownsOmit<ExtArgs> | null
    /**
     * Filter, which Countdowns to fetch.
     */
    where?: CountdownsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countdowns to fetch.
     */
    orderBy?: CountdownsOrderByWithRelationInput | CountdownsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countdowns.
     */
    cursor?: CountdownsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countdowns.
     */
    distinct?: CountdownsScalarFieldEnum | CountdownsScalarFieldEnum[]
  }

  /**
   * Countdowns findMany
   */
  export type CountdownsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countdowns
     */
    select?: CountdownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countdowns
     */
    omit?: CountdownsOmit<ExtArgs> | null
    /**
     * Filter, which Countdowns to fetch.
     */
    where?: CountdownsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countdowns to fetch.
     */
    orderBy?: CountdownsOrderByWithRelationInput | CountdownsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countdowns.
     */
    cursor?: CountdownsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countdowns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countdowns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countdowns.
     */
    distinct?: CountdownsScalarFieldEnum | CountdownsScalarFieldEnum[]
  }

  /**
   * Countdowns create
   */
  export type CountdownsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countdowns
     */
    select?: CountdownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countdowns
     */
    omit?: CountdownsOmit<ExtArgs> | null
    /**
     * The data needed to create a Countdowns.
     */
    data: XOR<CountdownsCreateInput, CountdownsUncheckedCreateInput>
  }

  /**
   * Countdowns createMany
   */
  export type CountdownsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countdowns.
     */
    data: CountdownsCreateManyInput | CountdownsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Countdowns createManyAndReturn
   */
  export type CountdownsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countdowns
     */
    select?: CountdownsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Countdowns
     */
    omit?: CountdownsOmit<ExtArgs> | null
    /**
     * The data used to create many Countdowns.
     */
    data: CountdownsCreateManyInput | CountdownsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Countdowns update
   */
  export type CountdownsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countdowns
     */
    select?: CountdownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countdowns
     */
    omit?: CountdownsOmit<ExtArgs> | null
    /**
     * The data needed to update a Countdowns.
     */
    data: XOR<CountdownsUpdateInput, CountdownsUncheckedUpdateInput>
    /**
     * Choose, which Countdowns to update.
     */
    where: CountdownsWhereUniqueInput
  }

  /**
   * Countdowns updateMany
   */
  export type CountdownsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countdowns.
     */
    data: XOR<CountdownsUpdateManyMutationInput, CountdownsUncheckedUpdateManyInput>
    /**
     * Filter which Countdowns to update
     */
    where?: CountdownsWhereInput
    /**
     * Limit how many Countdowns to update.
     */
    limit?: number
  }

  /**
   * Countdowns updateManyAndReturn
   */
  export type CountdownsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countdowns
     */
    select?: CountdownsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Countdowns
     */
    omit?: CountdownsOmit<ExtArgs> | null
    /**
     * The data used to update Countdowns.
     */
    data: XOR<CountdownsUpdateManyMutationInput, CountdownsUncheckedUpdateManyInput>
    /**
     * Filter which Countdowns to update
     */
    where?: CountdownsWhereInput
    /**
     * Limit how many Countdowns to update.
     */
    limit?: number
  }

  /**
   * Countdowns upsert
   */
  export type CountdownsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countdowns
     */
    select?: CountdownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countdowns
     */
    omit?: CountdownsOmit<ExtArgs> | null
    /**
     * The filter to search for the Countdowns to update in case it exists.
     */
    where: CountdownsWhereUniqueInput
    /**
     * In case the Countdowns found by the `where` argument doesn't exist, create a new Countdowns with this data.
     */
    create: XOR<CountdownsCreateInput, CountdownsUncheckedCreateInput>
    /**
     * In case the Countdowns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountdownsUpdateInput, CountdownsUncheckedUpdateInput>
  }

  /**
   * Countdowns delete
   */
  export type CountdownsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countdowns
     */
    select?: CountdownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countdowns
     */
    omit?: CountdownsOmit<ExtArgs> | null
    /**
     * Filter which Countdowns to delete.
     */
    where: CountdownsWhereUniqueInput
  }

  /**
   * Countdowns deleteMany
   */
  export type CountdownsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countdowns to delete
     */
    where?: CountdownsWhereInput
    /**
     * Limit how many Countdowns to delete.
     */
    limit?: number
  }

  /**
   * Countdowns without action
   */
  export type CountdownsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countdowns
     */
    select?: CountdownsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Countdowns
     */
    omit?: CountdownsOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string | null
    emailVerified: Date | null
    password: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | User$accountArgs<ExtArgs>
    activityLog?: boolean | User$activityLogArgs<ExtArgs>
    profileUser?: boolean | User$profileUserArgs<ExtArgs>
    session?: boolean | User$sessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | User$accountArgs<ExtArgs>
    activityLog?: boolean | User$activityLogArgs<ExtArgs>
    profileUser?: boolean | User$profileUserArgs<ExtArgs>
    session?: boolean | User$sessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
      activityLog: Prisma.$ActivityPayload<ExtArgs>[]
      profileUser: Prisma.$ProfilesPayload<ExtArgs> | null
      session: Prisma.$SessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      emailVerified: Date | null
      password: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends User$accountArgs<ExtArgs> = {}>(args?: Subset<T, User$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    activityLog<T extends User$activityLogArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profileUser<T extends User$profileUserArgs<ExtArgs> = {}>(args?: Subset<T, User$profileUserArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    session<T extends User$sessionArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.account
   */
  export type User$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * User.activityLog
   */
  export type User$activityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * User.profileUser
   */
  export type User$profileUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    where?: ProfilesWhereInput
  }

  /**
   * User.session
   */
  export type User$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    cursor?: SessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model FilePath
   */

  export type AggregateFilePath = {
    _count: FilePathCountAggregateOutputType | null
    _avg: FilePathAvgAggregateOutputType | null
    _sum: FilePathSumAggregateOutputType | null
    _min: FilePathMinAggregateOutputType | null
    _max: FilePathMaxAggregateOutputType | null
  }

  export type FilePathAvgAggregateOutputType = {
    size: number | null
  }

  export type FilePathSumAggregateOutputType = {
    size: number | null
  }

  export type FilePathMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    filePath: string | null
    size: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FilePathMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    filePath: string | null
    size: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FilePathCountAggregateOutputType = {
    id: number
    name: number
    type: number
    filePath: number
    size: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FilePathAvgAggregateInputType = {
    size?: true
  }

  export type FilePathSumAggregateInputType = {
    size?: true
  }

  export type FilePathMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    filePath?: true
    size?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FilePathMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    filePath?: true
    size?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FilePathCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    filePath?: true
    size?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FilePathAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilePath to aggregate.
     */
    where?: FilePathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilePaths to fetch.
     */
    orderBy?: FilePathOrderByWithRelationInput | FilePathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilePathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilePaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilePaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilePaths
    **/
    _count?: true | FilePathCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilePathAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilePathSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilePathMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilePathMaxAggregateInputType
  }

  export type GetFilePathAggregateType<T extends FilePathAggregateArgs> = {
        [P in keyof T & keyof AggregateFilePath]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilePath[P]>
      : GetScalarType<T[P], AggregateFilePath[P]>
  }




  export type FilePathGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilePathWhereInput
    orderBy?: FilePathOrderByWithAggregationInput | FilePathOrderByWithAggregationInput[]
    by: FilePathScalarFieldEnum[] | FilePathScalarFieldEnum
    having?: FilePathScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilePathCountAggregateInputType | true
    _avg?: FilePathAvgAggregateInputType
    _sum?: FilePathSumAggregateInputType
    _min?: FilePathMinAggregateInputType
    _max?: FilePathMaxAggregateInputType
  }

  export type FilePathGroupByOutputType = {
    id: string
    name: string
    type: string
    filePath: string
    size: number
    createdAt: Date
    updatedAt: Date
    _count: FilePathCountAggregateOutputType | null
    _avg: FilePathAvgAggregateOutputType | null
    _sum: FilePathSumAggregateOutputType | null
    _min: FilePathMinAggregateOutputType | null
    _max: FilePathMaxAggregateOutputType | null
  }

  type GetFilePathGroupByPayload<T extends FilePathGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilePathGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilePathGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilePathGroupByOutputType[P]>
            : GetScalarType<T[P], FilePathGroupByOutputType[P]>
        }
      >
    >


  export type FilePathSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    filePath?: boolean
    size?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avatarFiles?: boolean | FilePath$avatarFilesArgs<ExtArgs>
    _count?: boolean | FilePathCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filePath"]>

  export type FilePathSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    filePath?: boolean
    size?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["filePath"]>

  export type FilePathSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    filePath?: boolean
    size?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["filePath"]>

  export type FilePathSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    filePath?: boolean
    size?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FilePathOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "filePath" | "size" | "createdAt" | "updatedAt", ExtArgs["result"]["filePath"]>
  export type FilePathInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatarFiles?: boolean | FilePath$avatarFilesArgs<ExtArgs>
    _count?: boolean | FilePathCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FilePathIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FilePathIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FilePathPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilePath"
    objects: {
      avatarFiles: Prisma.$FilesOnProfilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      filePath: string
      size: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["filePath"]>
    composites: {}
  }

  type FilePathGetPayload<S extends boolean | null | undefined | FilePathDefaultArgs> = $Result.GetResult<Prisma.$FilePathPayload, S>

  type FilePathCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilePathFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilePathCountAggregateInputType | true
    }

  export interface FilePathDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilePath'], meta: { name: 'FilePath' } }
    /**
     * Find zero or one FilePath that matches the filter.
     * @param {FilePathFindUniqueArgs} args - Arguments to find a FilePath
     * @example
     * // Get one FilePath
     * const filePath = await prisma.filePath.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilePathFindUniqueArgs>(args: SelectSubset<T, FilePathFindUniqueArgs<ExtArgs>>): Prisma__FilePathClient<$Result.GetResult<Prisma.$FilePathPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilePath that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilePathFindUniqueOrThrowArgs} args - Arguments to find a FilePath
     * @example
     * // Get one FilePath
     * const filePath = await prisma.filePath.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilePathFindUniqueOrThrowArgs>(args: SelectSubset<T, FilePathFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilePathClient<$Result.GetResult<Prisma.$FilePathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilePath that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilePathFindFirstArgs} args - Arguments to find a FilePath
     * @example
     * // Get one FilePath
     * const filePath = await prisma.filePath.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilePathFindFirstArgs>(args?: SelectSubset<T, FilePathFindFirstArgs<ExtArgs>>): Prisma__FilePathClient<$Result.GetResult<Prisma.$FilePathPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilePath that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilePathFindFirstOrThrowArgs} args - Arguments to find a FilePath
     * @example
     * // Get one FilePath
     * const filePath = await prisma.filePath.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilePathFindFirstOrThrowArgs>(args?: SelectSubset<T, FilePathFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilePathClient<$Result.GetResult<Prisma.$FilePathPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilePaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilePathFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilePaths
     * const filePaths = await prisma.filePath.findMany()
     * 
     * // Get first 10 FilePaths
     * const filePaths = await prisma.filePath.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filePathWithIdOnly = await prisma.filePath.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilePathFindManyArgs>(args?: SelectSubset<T, FilePathFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePathPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilePath.
     * @param {FilePathCreateArgs} args - Arguments to create a FilePath.
     * @example
     * // Create one FilePath
     * const FilePath = await prisma.filePath.create({
     *   data: {
     *     // ... data to create a FilePath
     *   }
     * })
     * 
     */
    create<T extends FilePathCreateArgs>(args: SelectSubset<T, FilePathCreateArgs<ExtArgs>>): Prisma__FilePathClient<$Result.GetResult<Prisma.$FilePathPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilePaths.
     * @param {FilePathCreateManyArgs} args - Arguments to create many FilePaths.
     * @example
     * // Create many FilePaths
     * const filePath = await prisma.filePath.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilePathCreateManyArgs>(args?: SelectSubset<T, FilePathCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FilePaths and returns the data saved in the database.
     * @param {FilePathCreateManyAndReturnArgs} args - Arguments to create many FilePaths.
     * @example
     * // Create many FilePaths
     * const filePath = await prisma.filePath.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FilePaths and only return the `id`
     * const filePathWithIdOnly = await prisma.filePath.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilePathCreateManyAndReturnArgs>(args?: SelectSubset<T, FilePathCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePathPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FilePath.
     * @param {FilePathDeleteArgs} args - Arguments to delete one FilePath.
     * @example
     * // Delete one FilePath
     * const FilePath = await prisma.filePath.delete({
     *   where: {
     *     // ... filter to delete one FilePath
     *   }
     * })
     * 
     */
    delete<T extends FilePathDeleteArgs>(args: SelectSubset<T, FilePathDeleteArgs<ExtArgs>>): Prisma__FilePathClient<$Result.GetResult<Prisma.$FilePathPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilePath.
     * @param {FilePathUpdateArgs} args - Arguments to update one FilePath.
     * @example
     * // Update one FilePath
     * const filePath = await prisma.filePath.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilePathUpdateArgs>(args: SelectSubset<T, FilePathUpdateArgs<ExtArgs>>): Prisma__FilePathClient<$Result.GetResult<Prisma.$FilePathPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilePaths.
     * @param {FilePathDeleteManyArgs} args - Arguments to filter FilePaths to delete.
     * @example
     * // Delete a few FilePaths
     * const { count } = await prisma.filePath.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilePathDeleteManyArgs>(args?: SelectSubset<T, FilePathDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilePaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilePathUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilePaths
     * const filePath = await prisma.filePath.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilePathUpdateManyArgs>(args: SelectSubset<T, FilePathUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilePaths and returns the data updated in the database.
     * @param {FilePathUpdateManyAndReturnArgs} args - Arguments to update many FilePaths.
     * @example
     * // Update many FilePaths
     * const filePath = await prisma.filePath.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FilePaths and only return the `id`
     * const filePathWithIdOnly = await prisma.filePath.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilePathUpdateManyAndReturnArgs>(args: SelectSubset<T, FilePathUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePathPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FilePath.
     * @param {FilePathUpsertArgs} args - Arguments to update or create a FilePath.
     * @example
     * // Update or create a FilePath
     * const filePath = await prisma.filePath.upsert({
     *   create: {
     *     // ... data to create a FilePath
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilePath we want to update
     *   }
     * })
     */
    upsert<T extends FilePathUpsertArgs>(args: SelectSubset<T, FilePathUpsertArgs<ExtArgs>>): Prisma__FilePathClient<$Result.GetResult<Prisma.$FilePathPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FilePaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilePathCountArgs} args - Arguments to filter FilePaths to count.
     * @example
     * // Count the number of FilePaths
     * const count = await prisma.filePath.count({
     *   where: {
     *     // ... the filter for the FilePaths we want to count
     *   }
     * })
    **/
    count<T extends FilePathCountArgs>(
      args?: Subset<T, FilePathCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilePathCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilePath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilePathAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilePathAggregateArgs>(args: Subset<T, FilePathAggregateArgs>): Prisma.PrismaPromise<GetFilePathAggregateType<T>>

    /**
     * Group by FilePath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilePathGroupByArgs} args - Group by arguments.
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
      T extends FilePathGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilePathGroupByArgs['orderBy'] }
        : { orderBy?: FilePathGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilePathGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilePathGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilePath model
   */
  readonly fields: FilePathFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilePath.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilePathClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avatarFiles<T extends FilePath$avatarFilesArgs<ExtArgs> = {}>(args?: Subset<T, FilePath$avatarFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FilePath model
   */
  interface FilePathFieldRefs {
    readonly id: FieldRef<"FilePath", 'String'>
    readonly name: FieldRef<"FilePath", 'String'>
    readonly type: FieldRef<"FilePath", 'String'>
    readonly filePath: FieldRef<"FilePath", 'String'>
    readonly size: FieldRef<"FilePath", 'Int'>
    readonly createdAt: FieldRef<"FilePath", 'DateTime'>
    readonly updatedAt: FieldRef<"FilePath", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FilePath findUnique
   */
  export type FilePathFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePath
     */
    select?: FilePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilePath
     */
    omit?: FilePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilePathInclude<ExtArgs> | null
    /**
     * Filter, which FilePath to fetch.
     */
    where: FilePathWhereUniqueInput
  }

  /**
   * FilePath findUniqueOrThrow
   */
  export type FilePathFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePath
     */
    select?: FilePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilePath
     */
    omit?: FilePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilePathInclude<ExtArgs> | null
    /**
     * Filter, which FilePath to fetch.
     */
    where: FilePathWhereUniqueInput
  }

  /**
   * FilePath findFirst
   */
  export type FilePathFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePath
     */
    select?: FilePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilePath
     */
    omit?: FilePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilePathInclude<ExtArgs> | null
    /**
     * Filter, which FilePath to fetch.
     */
    where?: FilePathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilePaths to fetch.
     */
    orderBy?: FilePathOrderByWithRelationInput | FilePathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilePaths.
     */
    cursor?: FilePathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilePaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilePaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilePaths.
     */
    distinct?: FilePathScalarFieldEnum | FilePathScalarFieldEnum[]
  }

  /**
   * FilePath findFirstOrThrow
   */
  export type FilePathFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePath
     */
    select?: FilePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilePath
     */
    omit?: FilePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilePathInclude<ExtArgs> | null
    /**
     * Filter, which FilePath to fetch.
     */
    where?: FilePathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilePaths to fetch.
     */
    orderBy?: FilePathOrderByWithRelationInput | FilePathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilePaths.
     */
    cursor?: FilePathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilePaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilePaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilePaths.
     */
    distinct?: FilePathScalarFieldEnum | FilePathScalarFieldEnum[]
  }

  /**
   * FilePath findMany
   */
  export type FilePathFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePath
     */
    select?: FilePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilePath
     */
    omit?: FilePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilePathInclude<ExtArgs> | null
    /**
     * Filter, which FilePaths to fetch.
     */
    where?: FilePathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilePaths to fetch.
     */
    orderBy?: FilePathOrderByWithRelationInput | FilePathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilePaths.
     */
    cursor?: FilePathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilePaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilePaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilePaths.
     */
    distinct?: FilePathScalarFieldEnum | FilePathScalarFieldEnum[]
  }

  /**
   * FilePath create
   */
  export type FilePathCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePath
     */
    select?: FilePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilePath
     */
    omit?: FilePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilePathInclude<ExtArgs> | null
    /**
     * The data needed to create a FilePath.
     */
    data: XOR<FilePathCreateInput, FilePathUncheckedCreateInput>
  }

  /**
   * FilePath createMany
   */
  export type FilePathCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilePaths.
     */
    data: FilePathCreateManyInput | FilePathCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FilePath createManyAndReturn
   */
  export type FilePathCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePath
     */
    select?: FilePathSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilePath
     */
    omit?: FilePathOmit<ExtArgs> | null
    /**
     * The data used to create many FilePaths.
     */
    data: FilePathCreateManyInput | FilePathCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FilePath update
   */
  export type FilePathUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePath
     */
    select?: FilePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilePath
     */
    omit?: FilePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilePathInclude<ExtArgs> | null
    /**
     * The data needed to update a FilePath.
     */
    data: XOR<FilePathUpdateInput, FilePathUncheckedUpdateInput>
    /**
     * Choose, which FilePath to update.
     */
    where: FilePathWhereUniqueInput
  }

  /**
   * FilePath updateMany
   */
  export type FilePathUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilePaths.
     */
    data: XOR<FilePathUpdateManyMutationInput, FilePathUncheckedUpdateManyInput>
    /**
     * Filter which FilePaths to update
     */
    where?: FilePathWhereInput
    /**
     * Limit how many FilePaths to update.
     */
    limit?: number
  }

  /**
   * FilePath updateManyAndReturn
   */
  export type FilePathUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePath
     */
    select?: FilePathSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilePath
     */
    omit?: FilePathOmit<ExtArgs> | null
    /**
     * The data used to update FilePaths.
     */
    data: XOR<FilePathUpdateManyMutationInput, FilePathUncheckedUpdateManyInput>
    /**
     * Filter which FilePaths to update
     */
    where?: FilePathWhereInput
    /**
     * Limit how many FilePaths to update.
     */
    limit?: number
  }

  /**
   * FilePath upsert
   */
  export type FilePathUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePath
     */
    select?: FilePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilePath
     */
    omit?: FilePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilePathInclude<ExtArgs> | null
    /**
     * The filter to search for the FilePath to update in case it exists.
     */
    where: FilePathWhereUniqueInput
    /**
     * In case the FilePath found by the `where` argument doesn't exist, create a new FilePath with this data.
     */
    create: XOR<FilePathCreateInput, FilePathUncheckedCreateInput>
    /**
     * In case the FilePath was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilePathUpdateInput, FilePathUncheckedUpdateInput>
  }

  /**
   * FilePath delete
   */
  export type FilePathDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePath
     */
    select?: FilePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilePath
     */
    omit?: FilePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilePathInclude<ExtArgs> | null
    /**
     * Filter which FilePath to delete.
     */
    where: FilePathWhereUniqueInput
  }

  /**
   * FilePath deleteMany
   */
  export type FilePathDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilePaths to delete
     */
    where?: FilePathWhereInput
    /**
     * Limit how many FilePaths to delete.
     */
    limit?: number
  }

  /**
   * FilePath.avatarFiles
   */
  export type FilePath$avatarFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesInclude<ExtArgs> | null
    where?: FilesOnProfilesWhereInput
    orderBy?: FilesOnProfilesOrderByWithRelationInput | FilesOnProfilesOrderByWithRelationInput[]
    cursor?: FilesOnProfilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilesOnProfilesScalarFieldEnum | FilesOnProfilesScalarFieldEnum[]
  }

  /**
   * FilePath without action
   */
  export type FilePathDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilePath
     */
    select?: FilePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilePath
     */
    omit?: FilePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilePathInclude<ExtArgs> | null
  }


  /**
   * Model FilesOnProfiles
   */

  export type AggregateFilesOnProfiles = {
    _count: FilesOnProfilesCountAggregateOutputType | null
    _min: FilesOnProfilesMinAggregateOutputType | null
    _max: FilesOnProfilesMaxAggregateOutputType | null
  }

  export type FilesOnProfilesMinAggregateOutputType = {
    id: string | null
    fileImagePath: string | null
    profileId: string | null
  }

  export type FilesOnProfilesMaxAggregateOutputType = {
    id: string | null
    fileImagePath: string | null
    profileId: string | null
  }

  export type FilesOnProfilesCountAggregateOutputType = {
    id: number
    fileImagePath: number
    profileId: number
    _all: number
  }


  export type FilesOnProfilesMinAggregateInputType = {
    id?: true
    fileImagePath?: true
    profileId?: true
  }

  export type FilesOnProfilesMaxAggregateInputType = {
    id?: true
    fileImagePath?: true
    profileId?: true
  }

  export type FilesOnProfilesCountAggregateInputType = {
    id?: true
    fileImagePath?: true
    profileId?: true
    _all?: true
  }

  export type FilesOnProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilesOnProfiles to aggregate.
     */
    where?: FilesOnProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilesOnProfiles to fetch.
     */
    orderBy?: FilesOnProfilesOrderByWithRelationInput | FilesOnProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilesOnProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilesOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilesOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilesOnProfiles
    **/
    _count?: true | FilesOnProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesOnProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesOnProfilesMaxAggregateInputType
  }

  export type GetFilesOnProfilesAggregateType<T extends FilesOnProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFilesOnProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilesOnProfiles[P]>
      : GetScalarType<T[P], AggregateFilesOnProfiles[P]>
  }




  export type FilesOnProfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesOnProfilesWhereInput
    orderBy?: FilesOnProfilesOrderByWithAggregationInput | FilesOnProfilesOrderByWithAggregationInput[]
    by: FilesOnProfilesScalarFieldEnum[] | FilesOnProfilesScalarFieldEnum
    having?: FilesOnProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilesOnProfilesCountAggregateInputType | true
    _min?: FilesOnProfilesMinAggregateInputType
    _max?: FilesOnProfilesMaxAggregateInputType
  }

  export type FilesOnProfilesGroupByOutputType = {
    id: string
    fileImagePath: string
    profileId: string
    _count: FilesOnProfilesCountAggregateOutputType | null
    _min: FilesOnProfilesMinAggregateOutputType | null
    _max: FilesOnProfilesMaxAggregateOutputType | null
  }

  type GetFilesOnProfilesGroupByPayload<T extends FilesOnProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilesOnProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilesOnProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilesOnProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], FilesOnProfilesGroupByOutputType[P]>
        }
      >
    >


  export type FilesOnProfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileImagePath?: boolean
    profileId?: boolean
    filePath?: boolean | FilePathDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filesOnProfiles"]>

  export type FilesOnProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileImagePath?: boolean
    profileId?: boolean
    filePath?: boolean | FilePathDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filesOnProfiles"]>

  export type FilesOnProfilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileImagePath?: boolean
    profileId?: boolean
    filePath?: boolean | FilePathDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filesOnProfiles"]>

  export type FilesOnProfilesSelectScalar = {
    id?: boolean
    fileImagePath?: boolean
    profileId?: boolean
  }

  export type FilesOnProfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileImagePath" | "profileId", ExtArgs["result"]["filesOnProfiles"]>
  export type FilesOnProfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filePath?: boolean | FilePathDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
  }
  export type FilesOnProfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filePath?: boolean | FilePathDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
  }
  export type FilesOnProfilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filePath?: boolean | FilePathDefaultArgs<ExtArgs>
    profile?: boolean | ProfilesDefaultArgs<ExtArgs>
  }

  export type $FilesOnProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilesOnProfiles"
    objects: {
      filePath: Prisma.$FilePathPayload<ExtArgs>
      profile: Prisma.$ProfilesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileImagePath: string
      profileId: string
    }, ExtArgs["result"]["filesOnProfiles"]>
    composites: {}
  }

  type FilesOnProfilesGetPayload<S extends boolean | null | undefined | FilesOnProfilesDefaultArgs> = $Result.GetResult<Prisma.$FilesOnProfilesPayload, S>

  type FilesOnProfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilesOnProfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilesOnProfilesCountAggregateInputType | true
    }

  export interface FilesOnProfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilesOnProfiles'], meta: { name: 'FilesOnProfiles' } }
    /**
     * Find zero or one FilesOnProfiles that matches the filter.
     * @param {FilesOnProfilesFindUniqueArgs} args - Arguments to find a FilesOnProfiles
     * @example
     * // Get one FilesOnProfiles
     * const filesOnProfiles = await prisma.filesOnProfiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilesOnProfilesFindUniqueArgs>(args: SelectSubset<T, FilesOnProfilesFindUniqueArgs<ExtArgs>>): Prisma__FilesOnProfilesClient<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilesOnProfiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilesOnProfilesFindUniqueOrThrowArgs} args - Arguments to find a FilesOnProfiles
     * @example
     * // Get one FilesOnProfiles
     * const filesOnProfiles = await prisma.filesOnProfiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilesOnProfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, FilesOnProfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilesOnProfilesClient<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilesOnProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesOnProfilesFindFirstArgs} args - Arguments to find a FilesOnProfiles
     * @example
     * // Get one FilesOnProfiles
     * const filesOnProfiles = await prisma.filesOnProfiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilesOnProfilesFindFirstArgs>(args?: SelectSubset<T, FilesOnProfilesFindFirstArgs<ExtArgs>>): Prisma__FilesOnProfilesClient<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilesOnProfiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesOnProfilesFindFirstOrThrowArgs} args - Arguments to find a FilesOnProfiles
     * @example
     * // Get one FilesOnProfiles
     * const filesOnProfiles = await prisma.filesOnProfiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilesOnProfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, FilesOnProfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilesOnProfilesClient<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilesOnProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesOnProfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilesOnProfiles
     * const filesOnProfiles = await prisma.filesOnProfiles.findMany()
     * 
     * // Get first 10 FilesOnProfiles
     * const filesOnProfiles = await prisma.filesOnProfiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filesOnProfilesWithIdOnly = await prisma.filesOnProfiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilesOnProfilesFindManyArgs>(args?: SelectSubset<T, FilesOnProfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilesOnProfiles.
     * @param {FilesOnProfilesCreateArgs} args - Arguments to create a FilesOnProfiles.
     * @example
     * // Create one FilesOnProfiles
     * const FilesOnProfiles = await prisma.filesOnProfiles.create({
     *   data: {
     *     // ... data to create a FilesOnProfiles
     *   }
     * })
     * 
     */
    create<T extends FilesOnProfilesCreateArgs>(args: SelectSubset<T, FilesOnProfilesCreateArgs<ExtArgs>>): Prisma__FilesOnProfilesClient<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilesOnProfiles.
     * @param {FilesOnProfilesCreateManyArgs} args - Arguments to create many FilesOnProfiles.
     * @example
     * // Create many FilesOnProfiles
     * const filesOnProfiles = await prisma.filesOnProfiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilesOnProfilesCreateManyArgs>(args?: SelectSubset<T, FilesOnProfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FilesOnProfiles and returns the data saved in the database.
     * @param {FilesOnProfilesCreateManyAndReturnArgs} args - Arguments to create many FilesOnProfiles.
     * @example
     * // Create many FilesOnProfiles
     * const filesOnProfiles = await prisma.filesOnProfiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FilesOnProfiles and only return the `id`
     * const filesOnProfilesWithIdOnly = await prisma.filesOnProfiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilesOnProfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, FilesOnProfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FilesOnProfiles.
     * @param {FilesOnProfilesDeleteArgs} args - Arguments to delete one FilesOnProfiles.
     * @example
     * // Delete one FilesOnProfiles
     * const FilesOnProfiles = await prisma.filesOnProfiles.delete({
     *   where: {
     *     // ... filter to delete one FilesOnProfiles
     *   }
     * })
     * 
     */
    delete<T extends FilesOnProfilesDeleteArgs>(args: SelectSubset<T, FilesOnProfilesDeleteArgs<ExtArgs>>): Prisma__FilesOnProfilesClient<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilesOnProfiles.
     * @param {FilesOnProfilesUpdateArgs} args - Arguments to update one FilesOnProfiles.
     * @example
     * // Update one FilesOnProfiles
     * const filesOnProfiles = await prisma.filesOnProfiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilesOnProfilesUpdateArgs>(args: SelectSubset<T, FilesOnProfilesUpdateArgs<ExtArgs>>): Prisma__FilesOnProfilesClient<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilesOnProfiles.
     * @param {FilesOnProfilesDeleteManyArgs} args - Arguments to filter FilesOnProfiles to delete.
     * @example
     * // Delete a few FilesOnProfiles
     * const { count } = await prisma.filesOnProfiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilesOnProfilesDeleteManyArgs>(args?: SelectSubset<T, FilesOnProfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilesOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesOnProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilesOnProfiles
     * const filesOnProfiles = await prisma.filesOnProfiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilesOnProfilesUpdateManyArgs>(args: SelectSubset<T, FilesOnProfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilesOnProfiles and returns the data updated in the database.
     * @param {FilesOnProfilesUpdateManyAndReturnArgs} args - Arguments to update many FilesOnProfiles.
     * @example
     * // Update many FilesOnProfiles
     * const filesOnProfiles = await prisma.filesOnProfiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FilesOnProfiles and only return the `id`
     * const filesOnProfilesWithIdOnly = await prisma.filesOnProfiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilesOnProfilesUpdateManyAndReturnArgs>(args: SelectSubset<T, FilesOnProfilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FilesOnProfiles.
     * @param {FilesOnProfilesUpsertArgs} args - Arguments to update or create a FilesOnProfiles.
     * @example
     * // Update or create a FilesOnProfiles
     * const filesOnProfiles = await prisma.filesOnProfiles.upsert({
     *   create: {
     *     // ... data to create a FilesOnProfiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilesOnProfiles we want to update
     *   }
     * })
     */
    upsert<T extends FilesOnProfilesUpsertArgs>(args: SelectSubset<T, FilesOnProfilesUpsertArgs<ExtArgs>>): Prisma__FilesOnProfilesClient<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FilesOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesOnProfilesCountArgs} args - Arguments to filter FilesOnProfiles to count.
     * @example
     * // Count the number of FilesOnProfiles
     * const count = await prisma.filesOnProfiles.count({
     *   where: {
     *     // ... the filter for the FilesOnProfiles we want to count
     *   }
     * })
    **/
    count<T extends FilesOnProfilesCountArgs>(
      args?: Subset<T, FilesOnProfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesOnProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilesOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesOnProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilesOnProfilesAggregateArgs>(args: Subset<T, FilesOnProfilesAggregateArgs>): Prisma.PrismaPromise<GetFilesOnProfilesAggregateType<T>>

    /**
     * Group by FilesOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesOnProfilesGroupByArgs} args - Group by arguments.
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
      T extends FilesOnProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilesOnProfilesGroupByArgs['orderBy'] }
        : { orderBy?: FilesOnProfilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilesOnProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesOnProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilesOnProfiles model
   */
  readonly fields: FilesOnProfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilesOnProfiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilesOnProfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filePath<T extends FilePathDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilePathDefaultArgs<ExtArgs>>): Prisma__FilePathClient<$Result.GetResult<Prisma.$FilePathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends ProfilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfilesDefaultArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FilesOnProfiles model
   */
  interface FilesOnProfilesFieldRefs {
    readonly id: FieldRef<"FilesOnProfiles", 'String'>
    readonly fileImagePath: FieldRef<"FilesOnProfiles", 'String'>
    readonly profileId: FieldRef<"FilesOnProfiles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FilesOnProfiles findUnique
   */
  export type FilesOnProfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesInclude<ExtArgs> | null
    /**
     * Filter, which FilesOnProfiles to fetch.
     */
    where: FilesOnProfilesWhereUniqueInput
  }

  /**
   * FilesOnProfiles findUniqueOrThrow
   */
  export type FilesOnProfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesInclude<ExtArgs> | null
    /**
     * Filter, which FilesOnProfiles to fetch.
     */
    where: FilesOnProfilesWhereUniqueInput
  }

  /**
   * FilesOnProfiles findFirst
   */
  export type FilesOnProfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesInclude<ExtArgs> | null
    /**
     * Filter, which FilesOnProfiles to fetch.
     */
    where?: FilesOnProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilesOnProfiles to fetch.
     */
    orderBy?: FilesOnProfilesOrderByWithRelationInput | FilesOnProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilesOnProfiles.
     */
    cursor?: FilesOnProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilesOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilesOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilesOnProfiles.
     */
    distinct?: FilesOnProfilesScalarFieldEnum | FilesOnProfilesScalarFieldEnum[]
  }

  /**
   * FilesOnProfiles findFirstOrThrow
   */
  export type FilesOnProfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesInclude<ExtArgs> | null
    /**
     * Filter, which FilesOnProfiles to fetch.
     */
    where?: FilesOnProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilesOnProfiles to fetch.
     */
    orderBy?: FilesOnProfilesOrderByWithRelationInput | FilesOnProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilesOnProfiles.
     */
    cursor?: FilesOnProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilesOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilesOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilesOnProfiles.
     */
    distinct?: FilesOnProfilesScalarFieldEnum | FilesOnProfilesScalarFieldEnum[]
  }

  /**
   * FilesOnProfiles findMany
   */
  export type FilesOnProfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesInclude<ExtArgs> | null
    /**
     * Filter, which FilesOnProfiles to fetch.
     */
    where?: FilesOnProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilesOnProfiles to fetch.
     */
    orderBy?: FilesOnProfilesOrderByWithRelationInput | FilesOnProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilesOnProfiles.
     */
    cursor?: FilesOnProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilesOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilesOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilesOnProfiles.
     */
    distinct?: FilesOnProfilesScalarFieldEnum | FilesOnProfilesScalarFieldEnum[]
  }

  /**
   * FilesOnProfiles create
   */
  export type FilesOnProfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a FilesOnProfiles.
     */
    data: XOR<FilesOnProfilesCreateInput, FilesOnProfilesUncheckedCreateInput>
  }

  /**
   * FilesOnProfiles createMany
   */
  export type FilesOnProfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilesOnProfiles.
     */
    data: FilesOnProfilesCreateManyInput | FilesOnProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FilesOnProfiles createManyAndReturn
   */
  export type FilesOnProfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * The data used to create many FilesOnProfiles.
     */
    data: FilesOnProfilesCreateManyInput | FilesOnProfilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FilesOnProfiles update
   */
  export type FilesOnProfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a FilesOnProfiles.
     */
    data: XOR<FilesOnProfilesUpdateInput, FilesOnProfilesUncheckedUpdateInput>
    /**
     * Choose, which FilesOnProfiles to update.
     */
    where: FilesOnProfilesWhereUniqueInput
  }

  /**
   * FilesOnProfiles updateMany
   */
  export type FilesOnProfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilesOnProfiles.
     */
    data: XOR<FilesOnProfilesUpdateManyMutationInput, FilesOnProfilesUncheckedUpdateManyInput>
    /**
     * Filter which FilesOnProfiles to update
     */
    where?: FilesOnProfilesWhereInput
    /**
     * Limit how many FilesOnProfiles to update.
     */
    limit?: number
  }

  /**
   * FilesOnProfiles updateManyAndReturn
   */
  export type FilesOnProfilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * The data used to update FilesOnProfiles.
     */
    data: XOR<FilesOnProfilesUpdateManyMutationInput, FilesOnProfilesUncheckedUpdateManyInput>
    /**
     * Filter which FilesOnProfiles to update
     */
    where?: FilesOnProfilesWhereInput
    /**
     * Limit how many FilesOnProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FilesOnProfiles upsert
   */
  export type FilesOnProfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the FilesOnProfiles to update in case it exists.
     */
    where: FilesOnProfilesWhereUniqueInput
    /**
     * In case the FilesOnProfiles found by the `where` argument doesn't exist, create a new FilesOnProfiles with this data.
     */
    create: XOR<FilesOnProfilesCreateInput, FilesOnProfilesUncheckedCreateInput>
    /**
     * In case the FilesOnProfiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilesOnProfilesUpdateInput, FilesOnProfilesUncheckedUpdateInput>
  }

  /**
   * FilesOnProfiles delete
   */
  export type FilesOnProfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesInclude<ExtArgs> | null
    /**
     * Filter which FilesOnProfiles to delete.
     */
    where: FilesOnProfilesWhereUniqueInput
  }

  /**
   * FilesOnProfiles deleteMany
   */
  export type FilesOnProfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilesOnProfiles to delete
     */
    where?: FilesOnProfilesWhereInput
    /**
     * Limit how many FilesOnProfiles to delete.
     */
    limit?: number
  }

  /**
   * FilesOnProfiles without action
   */
  export type FilesOnProfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesInclude<ExtArgs> | null
  }


  /**
   * Model Profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: string | null
    username: string | null
    userId: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: string | null
    username: string | null
    userId: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    username: number
    userId: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfilesMinAggregateInputType = {
    id?: true
    username?: true
    userId?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    username?: true
    userId?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    username?: true
    userId?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to aggregate.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type ProfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilesWhereInput
    orderBy?: ProfilesOrderByWithAggregationInput | ProfilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: ProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: string
    username: string
    userId: string
    phoneNumber: string
    createdAt: Date
    updatedAt: Date
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends ProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type ProfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    userId?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    avatarPath?: boolean | Profiles$avatarPathArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    userId?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    userId?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectScalar = {
    id?: boolean
    username?: boolean
    userId?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "userId" | "phoneNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["profiles"]>
  export type ProfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    avatarPath?: boolean | Profiles$avatarPathArgs<ExtArgs>
  }
  export type ProfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profiles"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      avatarPath: Prisma.$FilesOnProfilesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      userId: string
      phoneNumber: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type ProfilesGetPayload<S extends boolean | null | undefined | ProfilesDefaultArgs> = $Result.GetResult<Prisma.$ProfilesPayload, S>

  type ProfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface ProfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profiles'], meta: { name: 'Profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {ProfilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfilesFindUniqueArgs>(args: SelectSubset<T, ProfilesFindUniqueArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfilesFindFirstArgs>(args?: SelectSubset<T, ProfilesFindFirstArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfilesFindManyArgs>(args?: SelectSubset<T, ProfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {ProfilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends ProfilesCreateArgs>(args: SelectSubset<T, ProfilesCreateArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfilesCreateManyArgs>(args?: SelectSubset<T, ProfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profiles.
     * @param {ProfilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends ProfilesDeleteArgs>(args: SelectSubset<T, ProfilesDeleteArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {ProfilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfilesUpdateArgs>(args: SelectSubset<T, ProfilesUpdateArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfilesDeleteManyArgs>(args?: SelectSubset<T, ProfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfilesUpdateManyArgs>(args: SelectSubset<T, ProfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfilesUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfilesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profiles.
     * @param {ProfilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends ProfilesUpsertArgs>(args: SelectSubset<T, ProfilesUpsertArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfilesCountArgs>(
      args?: Subset<T, ProfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesGroupByArgs} args - Group by arguments.
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
      T extends ProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilesGroupByArgs['orderBy'] }
        : { orderBy?: ProfilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profiles model
   */
  readonly fields: ProfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    avatarPath<T extends Profiles$avatarPathArgs<ExtArgs> = {}>(args?: Subset<T, Profiles$avatarPathArgs<ExtArgs>>): Prisma__FilesOnProfilesClient<$Result.GetResult<Prisma.$FilesOnProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profiles model
   */
  interface ProfilesFieldRefs {
    readonly id: FieldRef<"Profiles", 'String'>
    readonly username: FieldRef<"Profiles", 'String'>
    readonly userId: FieldRef<"Profiles", 'String'>
    readonly phoneNumber: FieldRef<"Profiles", 'String'>
    readonly createdAt: FieldRef<"Profiles", 'DateTime'>
    readonly updatedAt: FieldRef<"Profiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profiles findUnique
   */
  export type ProfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findUniqueOrThrow
   */
  export type ProfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findFirst
   */
  export type ProfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles findFirstOrThrow
   */
  export type ProfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles findMany
   */
  export type ProfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles create
   */
  export type ProfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a Profiles.
     */
    data: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
  }

  /**
   * Profiles createMany
   */
  export type ProfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfilesCreateManyInput | ProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profiles createManyAndReturn
   */
  export type ProfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfilesCreateManyInput | ProfilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profiles update
   */
  export type ProfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a Profiles.
     */
    data: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
    /**
     * Choose, which Profiles to update.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles updateMany
   */
  export type ProfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profiles updateManyAndReturn
   */
  export type ProfilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profiles upsert
   */
  export type ProfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the Profiles to update in case it exists.
     */
    where: ProfilesWhereUniqueInput
    /**
     * In case the Profiles found by the `where` argument doesn't exist, create a new Profiles with this data.
     */
    create: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
    /**
     * In case the Profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
  }

  /**
   * Profiles delete
   */
  export type ProfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter which Profiles to delete.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles deleteMany
   */
  export type ProfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profiles.avatarPath
   */
  export type Profiles$avatarPathArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesOnProfiles
     */
    select?: FilesOnProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilesOnProfiles
     */
    omit?: FilesOnProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesOnProfilesInclude<ExtArgs> | null
    where?: FilesOnProfilesWhereInput
  }

  /**
   * Profiles without action
   */
  export type ProfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    description: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    description?: true
    userId?: true
    createdAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    description?: true
    userId?: true
    createdAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    description?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    description: string
    userId: string
    createdAt: Date
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "userId" | "createdAt", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly userId: FieldRef<"Activity", 'String'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: $Enums.Provider | null
    providerAccountId: string | null
    createdAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: $Enums.Provider | null
    providerAccountId: string | null
    createdAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerAccountId: number
    createdAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    createdAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    createdAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    createdAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    provider: $Enums.Provider
    providerAccountId: string
    createdAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerAccountId" | "createdAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: $Enums.Provider
      providerAccountId: string
      createdAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'Provider'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
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


  export const SessionsScalarFieldEnum: {
    id: 'id',
    refreshToken: 'refreshToken',
    refreshExpiresAt: 'refreshExpiresAt',
    accessToken: 'accessToken',
    accessExpiresAt: 'accessExpiresAt',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const CountdownsScalarFieldEnum: {
    id: 'id',
    countdown: 'countdown',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CountdownsScalarFieldEnum = (typeof CountdownsScalarFieldEnum)[keyof typeof CountdownsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FilePathScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    filePath: 'filePath',
    size: 'size',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FilePathScalarFieldEnum = (typeof FilePathScalarFieldEnum)[keyof typeof FilePathScalarFieldEnum]


  export const FilesOnProfilesScalarFieldEnum: {
    id: 'id',
    fileImagePath: 'fileImagePath',
    profileId: 'profileId'
  };

  export type FilesOnProfilesScalarFieldEnum = (typeof FilesOnProfilesScalarFieldEnum)[keyof typeof FilesOnProfilesScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    username: 'username',
    userId: 'userId',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    createdAt: 'createdAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider[]'>
    


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


  export type SessionsWhereInput = {
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    id?: StringFilter<"Sessions"> | string
    refreshToken?: StringFilter<"Sessions"> | string
    refreshExpiresAt?: IntNullableFilter<"Sessions"> | number | null
    accessToken?: StringFilter<"Sessions"> | string
    accessExpiresAt?: IntNullableFilter<"Sessions"> | number | null
    userId?: StringFilter<"Sessions"> | string
    createdAt?: DateTimeFilter<"Sessions"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionsOrderByWithRelationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    refreshExpiresAt?: SortOrderInput | SortOrder
    accessToken?: SortOrder
    accessExpiresAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    refreshToken?: StringFilter<"Sessions"> | string
    refreshExpiresAt?: IntNullableFilter<"Sessions"> | number | null
    accessToken?: StringFilter<"Sessions"> | string
    accessExpiresAt?: IntNullableFilter<"Sessions"> | number | null
    userId?: StringFilter<"Sessions"> | string
    createdAt?: DateTimeFilter<"Sessions"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionsOrderByWithAggregationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    refreshExpiresAt?: SortOrderInput | SortOrder
    accessToken?: SortOrder
    accessExpiresAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: SessionsCountOrderByAggregateInput
    _avg?: SessionsAvgOrderByAggregateInput
    _max?: SessionsMaxOrderByAggregateInput
    _min?: SessionsMinOrderByAggregateInput
    _sum?: SessionsSumOrderByAggregateInput
  }

  export type SessionsScalarWhereWithAggregatesInput = {
    AND?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    OR?: SessionsScalarWhereWithAggregatesInput[]
    NOT?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sessions"> | string
    refreshToken?: StringWithAggregatesFilter<"Sessions"> | string
    refreshExpiresAt?: IntNullableWithAggregatesFilter<"Sessions"> | number | null
    accessToken?: StringWithAggregatesFilter<"Sessions"> | string
    accessExpiresAt?: IntNullableWithAggregatesFilter<"Sessions"> | number | null
    userId?: StringWithAggregatesFilter<"Sessions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sessions"> | Date | string
  }

  export type CountdownsWhereInput = {
    AND?: CountdownsWhereInput | CountdownsWhereInput[]
    OR?: CountdownsWhereInput[]
    NOT?: CountdownsWhereInput | CountdownsWhereInput[]
    id?: StringFilter<"Countdowns"> | string
    countdown?: IntFilter<"Countdowns"> | number
    createdAt?: DateTimeFilter<"Countdowns"> | Date | string
    updatedAt?: DateTimeFilter<"Countdowns"> | Date | string
  }

  export type CountdownsOrderByWithRelationInput = {
    id?: SortOrder
    countdown?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountdownsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CountdownsWhereInput | CountdownsWhereInput[]
    OR?: CountdownsWhereInput[]
    NOT?: CountdownsWhereInput | CountdownsWhereInput[]
    countdown?: IntFilter<"Countdowns"> | number
    createdAt?: DateTimeFilter<"Countdowns"> | Date | string
    updatedAt?: DateTimeFilter<"Countdowns"> | Date | string
  }, "id">

  export type CountdownsOrderByWithAggregationInput = {
    id?: SortOrder
    countdown?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CountdownsCountOrderByAggregateInput
    _avg?: CountdownsAvgOrderByAggregateInput
    _max?: CountdownsMaxOrderByAggregateInput
    _min?: CountdownsMinOrderByAggregateInput
    _sum?: CountdownsSumOrderByAggregateInput
  }

  export type CountdownsScalarWhereWithAggregatesInput = {
    AND?: CountdownsScalarWhereWithAggregatesInput | CountdownsScalarWhereWithAggregatesInput[]
    OR?: CountdownsScalarWhereWithAggregatesInput[]
    NOT?: CountdownsScalarWhereWithAggregatesInput | CountdownsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Countdowns"> | string
    countdown?: IntWithAggregatesFilter<"Countdowns"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Countdowns"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Countdowns"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    activityLog?: ActivityListRelationFilter
    profileUser?: XOR<ProfilesNullableScalarRelationFilter, ProfilesWhereInput> | null
    session?: SessionsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: AccountOrderByWithRelationInput
    activityLog?: ActivityOrderByRelationAggregateInput
    profileUser?: ProfilesOrderByWithRelationInput
    session?: SessionsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    activityLog?: ActivityListRelationFilter
    profileUser?: XOR<ProfilesNullableScalarRelationFilter, ProfilesWhereInput> | null
    session?: SessionsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FilePathWhereInput = {
    AND?: FilePathWhereInput | FilePathWhereInput[]
    OR?: FilePathWhereInput[]
    NOT?: FilePathWhereInput | FilePathWhereInput[]
    id?: StringFilter<"FilePath"> | string
    name?: StringFilter<"FilePath"> | string
    type?: StringFilter<"FilePath"> | string
    filePath?: StringFilter<"FilePath"> | string
    size?: IntFilter<"FilePath"> | number
    createdAt?: DateTimeFilter<"FilePath"> | Date | string
    updatedAt?: DateTimeFilter<"FilePath"> | Date | string
    avatarFiles?: FilesOnProfilesListRelationFilter
  }

  export type FilePathOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatarFiles?: FilesOnProfilesOrderByRelationAggregateInput
  }

  export type FilePathWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FilePathWhereInput | FilePathWhereInput[]
    OR?: FilePathWhereInput[]
    NOT?: FilePathWhereInput | FilePathWhereInput[]
    name?: StringFilter<"FilePath"> | string
    type?: StringFilter<"FilePath"> | string
    filePath?: StringFilter<"FilePath"> | string
    size?: IntFilter<"FilePath"> | number
    createdAt?: DateTimeFilter<"FilePath"> | Date | string
    updatedAt?: DateTimeFilter<"FilePath"> | Date | string
    avatarFiles?: FilesOnProfilesListRelationFilter
  }, "id">

  export type FilePathOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FilePathCountOrderByAggregateInput
    _avg?: FilePathAvgOrderByAggregateInput
    _max?: FilePathMaxOrderByAggregateInput
    _min?: FilePathMinOrderByAggregateInput
    _sum?: FilePathSumOrderByAggregateInput
  }

  export type FilePathScalarWhereWithAggregatesInput = {
    AND?: FilePathScalarWhereWithAggregatesInput | FilePathScalarWhereWithAggregatesInput[]
    OR?: FilePathScalarWhereWithAggregatesInput[]
    NOT?: FilePathScalarWhereWithAggregatesInput | FilePathScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FilePath"> | string
    name?: StringWithAggregatesFilter<"FilePath"> | string
    type?: StringWithAggregatesFilter<"FilePath"> | string
    filePath?: StringWithAggregatesFilter<"FilePath"> | string
    size?: IntWithAggregatesFilter<"FilePath"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FilePath"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FilePath"> | Date | string
  }

  export type FilesOnProfilesWhereInput = {
    AND?: FilesOnProfilesWhereInput | FilesOnProfilesWhereInput[]
    OR?: FilesOnProfilesWhereInput[]
    NOT?: FilesOnProfilesWhereInput | FilesOnProfilesWhereInput[]
    id?: StringFilter<"FilesOnProfiles"> | string
    fileImagePath?: StringFilter<"FilesOnProfiles"> | string
    profileId?: StringFilter<"FilesOnProfiles"> | string
    filePath?: XOR<FilePathScalarRelationFilter, FilePathWhereInput>
    profile?: XOR<ProfilesScalarRelationFilter, ProfilesWhereInput>
  }

  export type FilesOnProfilesOrderByWithRelationInput = {
    id?: SortOrder
    fileImagePath?: SortOrder
    profileId?: SortOrder
    filePath?: FilePathOrderByWithRelationInput
    profile?: ProfilesOrderByWithRelationInput
  }

  export type FilesOnProfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId?: string
    fileImagePath_profileId?: FilesOnProfilesFileImagePathProfileIdCompoundUniqueInput
    AND?: FilesOnProfilesWhereInput | FilesOnProfilesWhereInput[]
    OR?: FilesOnProfilesWhereInput[]
    NOT?: FilesOnProfilesWhereInput | FilesOnProfilesWhereInput[]
    fileImagePath?: StringFilter<"FilesOnProfiles"> | string
    filePath?: XOR<FilePathScalarRelationFilter, FilePathWhereInput>
    profile?: XOR<ProfilesScalarRelationFilter, ProfilesWhereInput>
  }, "id" | "profileId" | "fileImagePath_profileId">

  export type FilesOnProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    fileImagePath?: SortOrder
    profileId?: SortOrder
    _count?: FilesOnProfilesCountOrderByAggregateInput
    _max?: FilesOnProfilesMaxOrderByAggregateInput
    _min?: FilesOnProfilesMinOrderByAggregateInput
  }

  export type FilesOnProfilesScalarWhereWithAggregatesInput = {
    AND?: FilesOnProfilesScalarWhereWithAggregatesInput | FilesOnProfilesScalarWhereWithAggregatesInput[]
    OR?: FilesOnProfilesScalarWhereWithAggregatesInput[]
    NOT?: FilesOnProfilesScalarWhereWithAggregatesInput | FilesOnProfilesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FilesOnProfiles"> | string
    fileImagePath?: StringWithAggregatesFilter<"FilesOnProfiles"> | string
    profileId?: StringWithAggregatesFilter<"FilesOnProfiles"> | string
  }

  export type ProfilesWhereInput = {
    AND?: ProfilesWhereInput | ProfilesWhereInput[]
    OR?: ProfilesWhereInput[]
    NOT?: ProfilesWhereInput | ProfilesWhereInput[]
    id?: StringFilter<"Profiles"> | string
    username?: StringFilter<"Profiles"> | string
    userId?: StringFilter<"Profiles"> | string
    phoneNumber?: StringFilter<"Profiles"> | string
    createdAt?: DateTimeFilter<"Profiles"> | Date | string
    updatedAt?: DateTimeFilter<"Profiles"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    avatarPath?: XOR<FilesOnProfilesNullableScalarRelationFilter, FilesOnProfilesWhereInput> | null
  }

  export type ProfilesOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    userId?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    avatarPath?: FilesOnProfilesOrderByWithRelationInput
  }

  export type ProfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    userId?: string
    AND?: ProfilesWhereInput | ProfilesWhereInput[]
    OR?: ProfilesWhereInput[]
    NOT?: ProfilesWhereInput | ProfilesWhereInput[]
    phoneNumber?: StringFilter<"Profiles"> | string
    createdAt?: DateTimeFilter<"Profiles"> | Date | string
    updatedAt?: DateTimeFilter<"Profiles"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    avatarPath?: XOR<FilesOnProfilesNullableScalarRelationFilter, FilesOnProfilesWhereInput> | null
  }, "id" | "username" | "userId">

  export type ProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    userId?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfilesCountOrderByAggregateInput
    _max?: ProfilesMaxOrderByAggregateInput
    _min?: ProfilesMinOrderByAggregateInput
  }

  export type ProfilesScalarWhereWithAggregatesInput = {
    AND?: ProfilesScalarWhereWithAggregatesInput | ProfilesScalarWhereWithAggregatesInput[]
    OR?: ProfilesScalarWhereWithAggregatesInput[]
    NOT?: ProfilesScalarWhereWithAggregatesInput | ProfilesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profiles"> | string
    username?: StringWithAggregatesFilter<"Profiles"> | string
    userId?: StringWithAggregatesFilter<"Profiles"> | string
    phoneNumber?: StringWithAggregatesFilter<"Profiles"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profiles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profiles"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    userId?: StringFilter<"Activity"> | string
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    description?: StringFilter<"Activity"> | string
    userId?: StringFilter<"Activity"> | string
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringWithAggregatesFilter<"Activity"> | string
    userId?: StringWithAggregatesFilter<"Activity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    provider?: EnumProviderFilter<"Account"> | $Enums.Provider
    providerAccountId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    provider?: EnumProviderFilter<"Account"> | $Enums.Provider
    providerAccountId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    provider?: EnumProviderWithAggregatesFilter<"Account"> | $Enums.Provider
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionsCreateInput = {
    id?: string
    refreshToken: string
    refreshExpiresAt?: number | null
    accessToken: string
    accessExpiresAt?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionsUncheckedCreateInput = {
    id?: string
    refreshToken: string
    refreshExpiresAt?: number | null
    accessToken: string
    accessExpiresAt?: number | null
    userId: string
    createdAt?: Date | string
  }

  export type SessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    refreshExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    accessToken?: StringFieldUpdateOperationsInput | string
    accessExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    refreshExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    accessToken?: StringFieldUpdateOperationsInput | string
    accessExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsCreateManyInput = {
    id?: string
    refreshToken: string
    refreshExpiresAt?: number | null
    accessToken: string
    accessExpiresAt?: number | null
    userId: string
    createdAt?: Date | string
  }

  export type SessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    refreshExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    accessToken?: StringFieldUpdateOperationsInput | string
    accessExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    refreshExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    accessToken?: StringFieldUpdateOperationsInput | string
    accessExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountdownsCreateInput = {
    id?: string
    countdown: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountdownsUncheckedCreateInput = {
    id?: string
    countdown: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountdownsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countdown?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountdownsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countdown?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountdownsCreateManyInput = {
    id?: string
    countdown: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountdownsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    countdown?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountdownsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    countdown?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutUserInput
    activityLog?: ActivityCreateNestedManyWithoutUserInput
    profileUser?: ProfilesCreateNestedOneWithoutUserInput
    session?: SessionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountUncheckedCreateNestedOneWithoutUserInput
    activityLog?: ActivityUncheckedCreateNestedManyWithoutUserInput
    profileUser?: ProfilesUncheckedCreateNestedOneWithoutUserInput
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutUserNestedInput
    activityLog?: ActivityUpdateManyWithoutUserNestedInput
    profileUser?: ProfilesUpdateOneWithoutUserNestedInput
    session?: SessionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateOneWithoutUserNestedInput
    activityLog?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    profileUser?: ProfilesUncheckedUpdateOneWithoutUserNestedInput
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilePathCreateInput = {
    id?: string
    name: string
    type: string
    filePath: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
    avatarFiles?: FilesOnProfilesCreateNestedManyWithoutFilePathInput
  }

  export type FilePathUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    filePath: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
    avatarFiles?: FilesOnProfilesUncheckedCreateNestedManyWithoutFilePathInput
  }

  export type FilePathUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarFiles?: FilesOnProfilesUpdateManyWithoutFilePathNestedInput
  }

  export type FilePathUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarFiles?: FilesOnProfilesUncheckedUpdateManyWithoutFilePathNestedInput
  }

  export type FilePathCreateManyInput = {
    id?: string
    name: string
    type: string
    filePath: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FilePathUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilePathUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesOnProfilesCreateInput = {
    id?: string
    filePath: FilePathCreateNestedOneWithoutAvatarFilesInput
    profile: ProfilesCreateNestedOneWithoutAvatarPathInput
  }

  export type FilesOnProfilesUncheckedCreateInput = {
    id?: string
    fileImagePath: string
    profileId: string
  }

  export type FilesOnProfilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: FilePathUpdateOneRequiredWithoutAvatarFilesNestedInput
    profile?: ProfilesUpdateOneRequiredWithoutAvatarPathNestedInput
  }

  export type FilesOnProfilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileImagePath?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type FilesOnProfilesCreateManyInput = {
    id?: string
    fileImagePath: string
    profileId: string
  }

  export type FilesOnProfilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FilesOnProfilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileImagePath?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfilesCreateInput = {
    id?: string
    username: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileUserInput
    avatarPath?: FilesOnProfilesCreateNestedOneWithoutProfileInput
  }

  export type ProfilesUncheckedCreateInput = {
    id?: string
    username: string
    userId: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    avatarPath?: FilesOnProfilesUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileUserNestedInput
    avatarPath?: FilesOnProfilesUpdateOneWithoutProfileNestedInput
  }

  export type ProfilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarPath?: FilesOnProfilesUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type ProfilesCreateManyInput = {
    id?: string
    username: string
    userId: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id?: string
    description: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutActivityLogInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    description: string
    userId: string
    createdAt?: Date | string
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivityLogNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyInput = {
    id?: string
    description: string
    userId: string
    createdAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    provider: $Enums.Provider
    providerAccountId: string
    createdAt: Date | string
    user: UserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    provider: $Enums.Provider
    providerAccountId: string
    createdAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    provider: $Enums.Provider
    providerAccountId: string
    createdAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionsCountOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    refreshExpiresAt?: SortOrder
    accessToken?: SortOrder
    accessExpiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionsAvgOrderByAggregateInput = {
    refreshExpiresAt?: SortOrder
    accessExpiresAt?: SortOrder
  }

  export type SessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    refreshExpiresAt?: SortOrder
    accessToken?: SortOrder
    accessExpiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionsMinOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    refreshExpiresAt?: SortOrder
    accessToken?: SortOrder
    accessExpiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionsSumOrderByAggregateInput = {
    refreshExpiresAt?: SortOrder
    accessExpiresAt?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type CountdownsCountOrderByAggregateInput = {
    id?: SortOrder
    countdown?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountdownsAvgOrderByAggregateInput = {
    countdown?: SortOrder
  }

  export type CountdownsMaxOrderByAggregateInput = {
    id?: SortOrder
    countdown?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountdownsMinOrderByAggregateInput = {
    id?: SortOrder
    countdown?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountdownsSumOrderByAggregateInput = {
    countdown?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type ProfilesNullableScalarRelationFilter = {
    is?: ProfilesWhereInput | null
    isNot?: ProfilesWhereInput | null
  }

  export type SessionsListRelationFilter = {
    every?: SessionsWhereInput
    some?: SessionsWhereInput
    none?: SessionsWhereInput
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FilesOnProfilesListRelationFilter = {
    every?: FilesOnProfilesWhereInput
    some?: FilesOnProfilesWhereInput
    none?: FilesOnProfilesWhereInput
  }

  export type FilesOnProfilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilePathCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FilePathAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FilePathMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FilePathMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FilePathSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FilePathScalarRelationFilter = {
    is?: FilePathWhereInput
    isNot?: FilePathWhereInput
  }

  export type ProfilesScalarRelationFilter = {
    is?: ProfilesWhereInput
    isNot?: ProfilesWhereInput
  }

  export type FilesOnProfilesFileImagePathProfileIdCompoundUniqueInput = {
    fileImagePath: string
    profileId: string
  }

  export type FilesOnProfilesCountOrderByAggregateInput = {
    id?: SortOrder
    fileImagePath?: SortOrder
    profileId?: SortOrder
  }

  export type FilesOnProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    fileImagePath?: SortOrder
    profileId?: SortOrder
  }

  export type FilesOnProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    fileImagePath?: SortOrder
    profileId?: SortOrder
  }

  export type FilesOnProfilesNullableScalarRelationFilter = {
    is?: FilesOnProfilesWhereInput | null
    isNot?: FilesOnProfilesWhereInput | null
  }

  export type ProfilesCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    userId?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    userId?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    userId?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountCreateNestedOneWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    connect?: AccountWhereUniqueInput
  }

  export type ActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ProfilesCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput
    connect?: ProfilesWhereUniqueInput
  }

  export type SessionsCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    connect?: AccountWhereUniqueInput
  }

  export type ActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ProfilesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput
    connect?: ProfilesWhereUniqueInput
  }

  export type SessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AccountUpdateOneWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    upsert?: AccountUpsertWithoutUserInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutUserInput, AccountUpdateWithoutUserInput>, AccountUncheckedUpdateWithoutUserInput>
  }

  export type ActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ProfilesUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput
    upsert?: ProfilesUpsertWithoutUserInput
    disconnect?: ProfilesWhereInput | boolean
    delete?: ProfilesWhereInput | boolean
    connect?: ProfilesWhereUniqueInput
    update?: XOR<XOR<ProfilesUpdateToOneWithWhereWithoutUserInput, ProfilesUpdateWithoutUserInput>, ProfilesUncheckedUpdateWithoutUserInput>
  }

  export type SessionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutUserInput | SessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutUserInput | SessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutUserInput | SessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type AccountUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    upsert?: AccountUpsertWithoutUserInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutUserInput, AccountUpdateWithoutUserInput>, AccountUncheckedUpdateWithoutUserInput>
  }

  export type ActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ProfilesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput
    upsert?: ProfilesUpsertWithoutUserInput
    disconnect?: ProfilesWhereInput | boolean
    delete?: ProfilesWhereInput | boolean
    connect?: ProfilesWhereUniqueInput
    update?: XOR<XOR<ProfilesUpdateToOneWithWhereWithoutUserInput, ProfilesUpdateWithoutUserInput>, ProfilesUncheckedUpdateWithoutUserInput>
  }

  export type SessionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutUserInput | SessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutUserInput | SessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutUserInput | SessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type FilesOnProfilesCreateNestedManyWithoutFilePathInput = {
    create?: XOR<FilesOnProfilesCreateWithoutFilePathInput, FilesOnProfilesUncheckedCreateWithoutFilePathInput> | FilesOnProfilesCreateWithoutFilePathInput[] | FilesOnProfilesUncheckedCreateWithoutFilePathInput[]
    connectOrCreate?: FilesOnProfilesCreateOrConnectWithoutFilePathInput | FilesOnProfilesCreateOrConnectWithoutFilePathInput[]
    createMany?: FilesOnProfilesCreateManyFilePathInputEnvelope
    connect?: FilesOnProfilesWhereUniqueInput | FilesOnProfilesWhereUniqueInput[]
  }

  export type FilesOnProfilesUncheckedCreateNestedManyWithoutFilePathInput = {
    create?: XOR<FilesOnProfilesCreateWithoutFilePathInput, FilesOnProfilesUncheckedCreateWithoutFilePathInput> | FilesOnProfilesCreateWithoutFilePathInput[] | FilesOnProfilesUncheckedCreateWithoutFilePathInput[]
    connectOrCreate?: FilesOnProfilesCreateOrConnectWithoutFilePathInput | FilesOnProfilesCreateOrConnectWithoutFilePathInput[]
    createMany?: FilesOnProfilesCreateManyFilePathInputEnvelope
    connect?: FilesOnProfilesWhereUniqueInput | FilesOnProfilesWhereUniqueInput[]
  }

  export type FilesOnProfilesUpdateManyWithoutFilePathNestedInput = {
    create?: XOR<FilesOnProfilesCreateWithoutFilePathInput, FilesOnProfilesUncheckedCreateWithoutFilePathInput> | FilesOnProfilesCreateWithoutFilePathInput[] | FilesOnProfilesUncheckedCreateWithoutFilePathInput[]
    connectOrCreate?: FilesOnProfilesCreateOrConnectWithoutFilePathInput | FilesOnProfilesCreateOrConnectWithoutFilePathInput[]
    upsert?: FilesOnProfilesUpsertWithWhereUniqueWithoutFilePathInput | FilesOnProfilesUpsertWithWhereUniqueWithoutFilePathInput[]
    createMany?: FilesOnProfilesCreateManyFilePathInputEnvelope
    set?: FilesOnProfilesWhereUniqueInput | FilesOnProfilesWhereUniqueInput[]
    disconnect?: FilesOnProfilesWhereUniqueInput | FilesOnProfilesWhereUniqueInput[]
    delete?: FilesOnProfilesWhereUniqueInput | FilesOnProfilesWhereUniqueInput[]
    connect?: FilesOnProfilesWhereUniqueInput | FilesOnProfilesWhereUniqueInput[]
    update?: FilesOnProfilesUpdateWithWhereUniqueWithoutFilePathInput | FilesOnProfilesUpdateWithWhereUniqueWithoutFilePathInput[]
    updateMany?: FilesOnProfilesUpdateManyWithWhereWithoutFilePathInput | FilesOnProfilesUpdateManyWithWhereWithoutFilePathInput[]
    deleteMany?: FilesOnProfilesScalarWhereInput | FilesOnProfilesScalarWhereInput[]
  }

  export type FilesOnProfilesUncheckedUpdateManyWithoutFilePathNestedInput = {
    create?: XOR<FilesOnProfilesCreateWithoutFilePathInput, FilesOnProfilesUncheckedCreateWithoutFilePathInput> | FilesOnProfilesCreateWithoutFilePathInput[] | FilesOnProfilesUncheckedCreateWithoutFilePathInput[]
    connectOrCreate?: FilesOnProfilesCreateOrConnectWithoutFilePathInput | FilesOnProfilesCreateOrConnectWithoutFilePathInput[]
    upsert?: FilesOnProfilesUpsertWithWhereUniqueWithoutFilePathInput | FilesOnProfilesUpsertWithWhereUniqueWithoutFilePathInput[]
    createMany?: FilesOnProfilesCreateManyFilePathInputEnvelope
    set?: FilesOnProfilesWhereUniqueInput | FilesOnProfilesWhereUniqueInput[]
    disconnect?: FilesOnProfilesWhereUniqueInput | FilesOnProfilesWhereUniqueInput[]
    delete?: FilesOnProfilesWhereUniqueInput | FilesOnProfilesWhereUniqueInput[]
    connect?: FilesOnProfilesWhereUniqueInput | FilesOnProfilesWhereUniqueInput[]
    update?: FilesOnProfilesUpdateWithWhereUniqueWithoutFilePathInput | FilesOnProfilesUpdateWithWhereUniqueWithoutFilePathInput[]
    updateMany?: FilesOnProfilesUpdateManyWithWhereWithoutFilePathInput | FilesOnProfilesUpdateManyWithWhereWithoutFilePathInput[]
    deleteMany?: FilesOnProfilesScalarWhereInput | FilesOnProfilesScalarWhereInput[]
  }

  export type FilePathCreateNestedOneWithoutAvatarFilesInput = {
    create?: XOR<FilePathCreateWithoutAvatarFilesInput, FilePathUncheckedCreateWithoutAvatarFilesInput>
    connectOrCreate?: FilePathCreateOrConnectWithoutAvatarFilesInput
    connect?: FilePathWhereUniqueInput
  }

  export type ProfilesCreateNestedOneWithoutAvatarPathInput = {
    create?: XOR<ProfilesCreateWithoutAvatarPathInput, ProfilesUncheckedCreateWithoutAvatarPathInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutAvatarPathInput
    connect?: ProfilesWhereUniqueInput
  }

  export type FilePathUpdateOneRequiredWithoutAvatarFilesNestedInput = {
    create?: XOR<FilePathCreateWithoutAvatarFilesInput, FilePathUncheckedCreateWithoutAvatarFilesInput>
    connectOrCreate?: FilePathCreateOrConnectWithoutAvatarFilesInput
    upsert?: FilePathUpsertWithoutAvatarFilesInput
    connect?: FilePathWhereUniqueInput
    update?: XOR<XOR<FilePathUpdateToOneWithWhereWithoutAvatarFilesInput, FilePathUpdateWithoutAvatarFilesInput>, FilePathUncheckedUpdateWithoutAvatarFilesInput>
  }

  export type ProfilesUpdateOneRequiredWithoutAvatarPathNestedInput = {
    create?: XOR<ProfilesCreateWithoutAvatarPathInput, ProfilesUncheckedCreateWithoutAvatarPathInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutAvatarPathInput
    upsert?: ProfilesUpsertWithoutAvatarPathInput
    connect?: ProfilesWhereUniqueInput
    update?: XOR<XOR<ProfilesUpdateToOneWithWhereWithoutAvatarPathInput, ProfilesUpdateWithoutAvatarPathInput>, ProfilesUncheckedUpdateWithoutAvatarPathInput>
  }

  export type UserCreateNestedOneWithoutProfileUserInput = {
    create?: XOR<UserCreateWithoutProfileUserInput, UserUncheckedCreateWithoutProfileUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileUserInput
    connect?: UserWhereUniqueInput
  }

  export type FilesOnProfilesCreateNestedOneWithoutProfileInput = {
    create?: XOR<FilesOnProfilesCreateWithoutProfileInput, FilesOnProfilesUncheckedCreateWithoutProfileInput>
    connectOrCreate?: FilesOnProfilesCreateOrConnectWithoutProfileInput
    connect?: FilesOnProfilesWhereUniqueInput
  }

  export type FilesOnProfilesUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<FilesOnProfilesCreateWithoutProfileInput, FilesOnProfilesUncheckedCreateWithoutProfileInput>
    connectOrCreate?: FilesOnProfilesCreateOrConnectWithoutProfileInput
    connect?: FilesOnProfilesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileUserNestedInput = {
    create?: XOR<UserCreateWithoutProfileUserInput, UserUncheckedCreateWithoutProfileUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileUserInput
    upsert?: UserUpsertWithoutProfileUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileUserInput, UserUpdateWithoutProfileUserInput>, UserUncheckedUpdateWithoutProfileUserInput>
  }

  export type FilesOnProfilesUpdateOneWithoutProfileNestedInput = {
    create?: XOR<FilesOnProfilesCreateWithoutProfileInput, FilesOnProfilesUncheckedCreateWithoutProfileInput>
    connectOrCreate?: FilesOnProfilesCreateOrConnectWithoutProfileInput
    upsert?: FilesOnProfilesUpsertWithoutProfileInput
    disconnect?: FilesOnProfilesWhereInput | boolean
    delete?: FilesOnProfilesWhereInput | boolean
    connect?: FilesOnProfilesWhereUniqueInput
    update?: XOR<XOR<FilesOnProfilesUpdateToOneWithWhereWithoutProfileInput, FilesOnProfilesUpdateWithoutProfileInput>, FilesOnProfilesUncheckedUpdateWithoutProfileInput>
  }

  export type FilesOnProfilesUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<FilesOnProfilesCreateWithoutProfileInput, FilesOnProfilesUncheckedCreateWithoutProfileInput>
    connectOrCreate?: FilesOnProfilesCreateOrConnectWithoutProfileInput
    upsert?: FilesOnProfilesUpsertWithoutProfileInput
    disconnect?: FilesOnProfilesWhereInput | boolean
    delete?: FilesOnProfilesWhereInput | boolean
    connect?: FilesOnProfilesWhereUniqueInput
    update?: XOR<XOR<FilesOnProfilesUpdateToOneWithWhereWithoutProfileInput, FilesOnProfilesUpdateWithoutProfileInput>, FilesOnProfilesUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutActivityLogInput = {
    create?: XOR<UserCreateWithoutActivityLogInput, UserUncheckedCreateWithoutActivityLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivityLogNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogInput, UserUncheckedCreateWithoutActivityLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogInput
    upsert?: UserUpsertWithoutActivityLogInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogInput, UserUpdateWithoutActivityLogInput>, UserUncheckedUpdateWithoutActivityLogInput>
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type UserUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    name: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutUserInput
    activityLog?: ActivityCreateNestedManyWithoutUserInput
    profileUser?: ProfilesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    name: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountUncheckedCreateNestedOneWithoutUserInput
    activityLog?: ActivityUncheckedCreateNestedManyWithoutUserInput
    profileUser?: ProfilesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutUserNestedInput
    activityLog?: ActivityUpdateManyWithoutUserNestedInput
    profileUser?: ProfilesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateOneWithoutUserNestedInput
    activityLog?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    profileUser?: ProfilesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    provider: $Enums.Provider
    providerAccountId: string
    createdAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    provider: $Enums.Provider
    providerAccountId: string
    createdAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type ActivityCreateWithoutUserInput = {
    id?: string
    description: string
    createdAt?: Date | string
  }

  export type ActivityUncheckedCreateWithoutUserInput = {
    id?: string
    description: string
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutUserInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityCreateManyUserInputEnvelope = {
    data: ActivityCreateManyUserInput | ActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfilesCreateWithoutUserInput = {
    id?: string
    username: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    avatarPath?: FilesOnProfilesCreateNestedOneWithoutProfileInput
  }

  export type ProfilesUncheckedCreateWithoutUserInput = {
    id?: string
    username: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    avatarPath?: FilesOnProfilesUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfilesCreateOrConnectWithoutUserInput = {
    where: ProfilesWhereUniqueInput
    create: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
  }

  export type SessionsCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    refreshExpiresAt?: number | null
    accessToken: string
    accessExpiresAt?: number | null
    createdAt?: Date | string
  }

  export type SessionsUncheckedCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    refreshExpiresAt?: number | null
    accessToken: string
    accessExpiresAt?: number | null
    createdAt?: Date | string
  }

  export type SessionsCreateOrConnectWithoutUserInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput>
  }

  export type SessionsCreateManyUserInputEnvelope = {
    data: SessionsCreateManyUserInput | SessionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutUserInput = {
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutUserInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
  }

  export type ActivityUpdateManyWithWhereWithoutUserInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    userId?: StringFilter<"Activity"> | string
    createdAt?: DateTimeFilter<"Activity"> | Date | string
  }

  export type ProfilesUpsertWithoutUserInput = {
    update: XOR<ProfilesUpdateWithoutUserInput, ProfilesUncheckedUpdateWithoutUserInput>
    create: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    where?: ProfilesWhereInput
  }

  export type ProfilesUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfilesWhereInput
    data: XOR<ProfilesUpdateWithoutUserInput, ProfilesUncheckedUpdateWithoutUserInput>
  }

  export type ProfilesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarPath?: FilesOnProfilesUpdateOneWithoutProfileNestedInput
  }

  export type ProfilesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarPath?: FilesOnProfilesUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type SessionsUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionsWhereUniqueInput
    update: XOR<SessionsUpdateWithoutUserInput, SessionsUncheckedUpdateWithoutUserInput>
    create: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput>
  }

  export type SessionsUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionsWhereUniqueInput
    data: XOR<SessionsUpdateWithoutUserInput, SessionsUncheckedUpdateWithoutUserInput>
  }

  export type SessionsUpdateManyWithWhereWithoutUserInput = {
    where: SessionsScalarWhereInput
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionsScalarWhereInput = {
    AND?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    OR?: SessionsScalarWhereInput[]
    NOT?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    id?: StringFilter<"Sessions"> | string
    refreshToken?: StringFilter<"Sessions"> | string
    refreshExpiresAt?: IntNullableFilter<"Sessions"> | number | null
    accessToken?: StringFilter<"Sessions"> | string
    accessExpiresAt?: IntNullableFilter<"Sessions"> | number | null
    userId?: StringFilter<"Sessions"> | string
    createdAt?: DateTimeFilter<"Sessions"> | Date | string
  }

  export type FilesOnProfilesCreateWithoutFilePathInput = {
    id?: string
    profile: ProfilesCreateNestedOneWithoutAvatarPathInput
  }

  export type FilesOnProfilesUncheckedCreateWithoutFilePathInput = {
    id?: string
    profileId: string
  }

  export type FilesOnProfilesCreateOrConnectWithoutFilePathInput = {
    where: FilesOnProfilesWhereUniqueInput
    create: XOR<FilesOnProfilesCreateWithoutFilePathInput, FilesOnProfilesUncheckedCreateWithoutFilePathInput>
  }

  export type FilesOnProfilesCreateManyFilePathInputEnvelope = {
    data: FilesOnProfilesCreateManyFilePathInput | FilesOnProfilesCreateManyFilePathInput[]
    skipDuplicates?: boolean
  }

  export type FilesOnProfilesUpsertWithWhereUniqueWithoutFilePathInput = {
    where: FilesOnProfilesWhereUniqueInput
    update: XOR<FilesOnProfilesUpdateWithoutFilePathInput, FilesOnProfilesUncheckedUpdateWithoutFilePathInput>
    create: XOR<FilesOnProfilesCreateWithoutFilePathInput, FilesOnProfilesUncheckedCreateWithoutFilePathInput>
  }

  export type FilesOnProfilesUpdateWithWhereUniqueWithoutFilePathInput = {
    where: FilesOnProfilesWhereUniqueInput
    data: XOR<FilesOnProfilesUpdateWithoutFilePathInput, FilesOnProfilesUncheckedUpdateWithoutFilePathInput>
  }

  export type FilesOnProfilesUpdateManyWithWhereWithoutFilePathInput = {
    where: FilesOnProfilesScalarWhereInput
    data: XOR<FilesOnProfilesUpdateManyMutationInput, FilesOnProfilesUncheckedUpdateManyWithoutFilePathInput>
  }

  export type FilesOnProfilesScalarWhereInput = {
    AND?: FilesOnProfilesScalarWhereInput | FilesOnProfilesScalarWhereInput[]
    OR?: FilesOnProfilesScalarWhereInput[]
    NOT?: FilesOnProfilesScalarWhereInput | FilesOnProfilesScalarWhereInput[]
    id?: StringFilter<"FilesOnProfiles"> | string
    fileImagePath?: StringFilter<"FilesOnProfiles"> | string
    profileId?: StringFilter<"FilesOnProfiles"> | string
  }

  export type FilePathCreateWithoutAvatarFilesInput = {
    id?: string
    name: string
    type: string
    filePath: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FilePathUncheckedCreateWithoutAvatarFilesInput = {
    id?: string
    name: string
    type: string
    filePath: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FilePathCreateOrConnectWithoutAvatarFilesInput = {
    where: FilePathWhereUniqueInput
    create: XOR<FilePathCreateWithoutAvatarFilesInput, FilePathUncheckedCreateWithoutAvatarFilesInput>
  }

  export type ProfilesCreateWithoutAvatarPathInput = {
    id?: string
    username: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileUserInput
  }

  export type ProfilesUncheckedCreateWithoutAvatarPathInput = {
    id?: string
    username: string
    userId: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilesCreateOrConnectWithoutAvatarPathInput = {
    where: ProfilesWhereUniqueInput
    create: XOR<ProfilesCreateWithoutAvatarPathInput, ProfilesUncheckedCreateWithoutAvatarPathInput>
  }

  export type FilePathUpsertWithoutAvatarFilesInput = {
    update: XOR<FilePathUpdateWithoutAvatarFilesInput, FilePathUncheckedUpdateWithoutAvatarFilesInput>
    create: XOR<FilePathCreateWithoutAvatarFilesInput, FilePathUncheckedCreateWithoutAvatarFilesInput>
    where?: FilePathWhereInput
  }

  export type FilePathUpdateToOneWithWhereWithoutAvatarFilesInput = {
    where?: FilePathWhereInput
    data: XOR<FilePathUpdateWithoutAvatarFilesInput, FilePathUncheckedUpdateWithoutAvatarFilesInput>
  }

  export type FilePathUpdateWithoutAvatarFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilePathUncheckedUpdateWithoutAvatarFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesUpsertWithoutAvatarPathInput = {
    update: XOR<ProfilesUpdateWithoutAvatarPathInput, ProfilesUncheckedUpdateWithoutAvatarPathInput>
    create: XOR<ProfilesCreateWithoutAvatarPathInput, ProfilesUncheckedCreateWithoutAvatarPathInput>
    where?: ProfilesWhereInput
  }

  export type ProfilesUpdateToOneWithWhereWithoutAvatarPathInput = {
    where?: ProfilesWhereInput
    data: XOR<ProfilesUpdateWithoutAvatarPathInput, ProfilesUncheckedUpdateWithoutAvatarPathInput>
  }

  export type ProfilesUpdateWithoutAvatarPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileUserNestedInput
  }

  export type ProfilesUncheckedUpdateWithoutAvatarPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutProfileUserInput = {
    id?: string
    name: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutUserInput
    activityLog?: ActivityCreateNestedManyWithoutUserInput
    session?: SessionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileUserInput = {
    id?: string
    name: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountUncheckedCreateNestedOneWithoutUserInput
    activityLog?: ActivityUncheckedCreateNestedManyWithoutUserInput
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileUserInput, UserUncheckedCreateWithoutProfileUserInput>
  }

  export type FilesOnProfilesCreateWithoutProfileInput = {
    id?: string
    filePath: FilePathCreateNestedOneWithoutAvatarFilesInput
  }

  export type FilesOnProfilesUncheckedCreateWithoutProfileInput = {
    id?: string
    fileImagePath: string
  }

  export type FilesOnProfilesCreateOrConnectWithoutProfileInput = {
    where: FilesOnProfilesWhereUniqueInput
    create: XOR<FilesOnProfilesCreateWithoutProfileInput, FilesOnProfilesUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileUserInput = {
    update: XOR<UserUpdateWithoutProfileUserInput, UserUncheckedUpdateWithoutProfileUserInput>
    create: XOR<UserCreateWithoutProfileUserInput, UserUncheckedCreateWithoutProfileUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileUserInput, UserUncheckedUpdateWithoutProfileUserInput>
  }

  export type UserUpdateWithoutProfileUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutUserNestedInput
    activityLog?: ActivityUpdateManyWithoutUserNestedInput
    session?: SessionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateOneWithoutUserNestedInput
    activityLog?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FilesOnProfilesUpsertWithoutProfileInput = {
    update: XOR<FilesOnProfilesUpdateWithoutProfileInput, FilesOnProfilesUncheckedUpdateWithoutProfileInput>
    create: XOR<FilesOnProfilesCreateWithoutProfileInput, FilesOnProfilesUncheckedCreateWithoutProfileInput>
    where?: FilesOnProfilesWhereInput
  }

  export type FilesOnProfilesUpdateToOneWithWhereWithoutProfileInput = {
    where?: FilesOnProfilesWhereInput
    data: XOR<FilesOnProfilesUpdateWithoutProfileInput, FilesOnProfilesUncheckedUpdateWithoutProfileInput>
  }

  export type FilesOnProfilesUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: FilePathUpdateOneRequiredWithoutAvatarFilesNestedInput
  }

  export type FilesOnProfilesUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileImagePath?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutActivityLogInput = {
    id?: string
    name: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutUserInput
    profileUser?: ProfilesCreateNestedOneWithoutUserInput
    session?: SessionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogInput = {
    id?: string
    name: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountUncheckedCreateNestedOneWithoutUserInput
    profileUser?: ProfilesUncheckedCreateNestedOneWithoutUserInput
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogInput, UserUncheckedCreateWithoutActivityLogInput>
  }

  export type UserUpsertWithoutActivityLogInput = {
    update: XOR<UserUpdateWithoutActivityLogInput, UserUncheckedUpdateWithoutActivityLogInput>
    create: XOR<UserCreateWithoutActivityLogInput, UserUncheckedCreateWithoutActivityLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogInput, UserUncheckedUpdateWithoutActivityLogInput>
  }

  export type UserUpdateWithoutActivityLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutUserNestedInput
    profileUser?: ProfilesUpdateOneWithoutUserNestedInput
    session?: SessionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateOneWithoutUserNestedInput
    profileUser?: ProfilesUncheckedUpdateOneWithoutUserNestedInput
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountInput = {
    id?: string
    name: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLog?: ActivityCreateNestedManyWithoutUserInput
    profileUser?: ProfilesCreateNestedOneWithoutUserInput
    session?: SessionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLog?: ActivityUncheckedCreateNestedManyWithoutUserInput
    profileUser?: ProfilesUncheckedCreateNestedOneWithoutUserInput
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLog?: ActivityUpdateManyWithoutUserNestedInput
    profileUser?: ProfilesUpdateOneWithoutUserNestedInput
    session?: SessionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLog?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    profileUser?: ProfilesUncheckedUpdateOneWithoutUserNestedInput
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ActivityCreateManyUserInput = {
    id?: string
    description: string
    createdAt?: Date | string
  }

  export type SessionsCreateManyUserInput = {
    id?: string
    refreshToken: string
    refreshExpiresAt?: number | null
    accessToken: string
    accessExpiresAt?: number | null
    createdAt?: Date | string
  }

  export type ActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    refreshExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    accessToken?: StringFieldUpdateOperationsInput | string
    accessExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    refreshExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    accessToken?: StringFieldUpdateOperationsInput | string
    accessExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    refreshExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    accessToken?: StringFieldUpdateOperationsInput | string
    accessExpiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesOnProfilesCreateManyFilePathInput = {
    id?: string
    profileId: string
  }

  export type FilesOnProfilesUpdateWithoutFilePathInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile?: ProfilesUpdateOneRequiredWithoutAvatarPathNestedInput
  }

  export type FilesOnProfilesUncheckedUpdateWithoutFilePathInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type FilesOnProfilesUncheckedUpdateManyWithoutFilePathInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
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