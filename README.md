# validator-package

A simple package to hash password and verify if the passwords match

## Installation

```
yarn add validator-package
```

## Usage

```javascript
import { validatePassword, hashPassword } from "validator-package";

const { hash, salt } = hashPassword("YOUR PASSWORD");
const isValid = validatePassword("YOUR PASSWORD", salt, hash);
```

## Functions

<dl>
<dt><a href="#validatePassword">validatePassword(inputPassword, salt, storedHash)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given an input password a salt and a hash
Does the given password match with the hash?</p>
</dd>
<dt><a href="#hashPassword">hashPassword(password)</a> ⇒ <code><a href="#hashAndSalt">hashAndSalt</a></code></dt>
<dd><p>Given a password, hash it with a salt and return the hash and salt</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#hashAndSalt">hashAndSalt</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="validatePassword"></a>

## validatePassword(inputPassword, salt, storedHash) ⇒ <code>boolean</code>

Given an input password a salt and a hash
Does the given password match with the hash?

**Kind**: global function

| Param         | Type                |
| ------------- | ------------------- |
| inputPassword | <code>string</code> |
| salt          | <code>string</code> |
| storedHash    | <code>string</code> |

<a name="hashPassword"></a>

## hashPassword(password) ⇒ [<code>hashAndSalt</code>](#hashAndSalt)

Given a password, hash it with a salt and return the hash and salt

**Kind**: global function
**Returns**: [<code>hashAndSalt</code>](#hashAndSalt) - Object containing hash and salt used

| Param    | Type                |
| -------- | ------------------- |
| password | <code>string</code> |

<a name="hashAndSalt"></a>

## hashAndSalt : <code>Object</code>

**Kind**: global typedef
**Properties**

| Name | Type                | Description               |
| ---- | ------------------- | ------------------------- |
| hash | <code>string</code> | The hash                  |
| salt | <code>string</code> | The salt used for hashing |

```

```
