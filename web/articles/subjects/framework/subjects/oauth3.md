#OAuth 2.0授权框架 – 3. 访问令牌和刷新令牌

##访问令牌 (Access Token)
访问令牌是用于访问受保护资源的凭据。访问令牌是一个字符串，它代表了客户端获得的授权。该字符串通常对于客户端是不透明的。令牌代表了有具体范围以及期限的访问权限，由资源所有者许可，并由资源服务器和授权服务器实施。

令牌可以表示一个用于检索授权信息的标识符，或者可以自包含授权信息（即令牌字符串由数据和签名组成）。客户端使用令牌时，有可能被要求提供额外的身份验证凭据。

访问令牌提供了一个抽象层，用单一的资源服务器能理解的令牌代替不同的授权结构。这种抽象使得颁发访问令牌比颁发用于获取令牌的授权许可更受限制，同时消除了资源服务器理解各种各样身份认证方法的需要。

基于资源服务器的安全要求，访问令牌可以有不同的格式、结构及采用的方法（如，加密属性）。访问令牌的属性和用于访问受保护资源的方法在RFC6750规范中定义。

##刷新令牌 (Refresh Token)
刷新令牌是用于获取访问令牌的凭据。刷新令牌由授权服务器颁发给客户端，用于在当前访问令牌失效或过期时，获取一个新的访问令牌，或者获得相等或更窄范围的额外的访问令牌（访问令牌可能具有比资源所有者所授权的更短的生命周期和更少的权限）。颁发刷新令牌是可选的，由授权服务器决定。如果授权服务器颁发刷新令牌，在颁发访问令牌时它被包含在内。

刷新令牌是一个代表由资源所有者给客户端许可的授权的字符串。该字符串通常对于客户端是不透明的。该令牌表示一个用于检索授权信息的标识符。不同于访问令牌，刷新令牌设计只与授权服务器使用，并不会发送到资源服务器。

     +--------+                                                        +---------------+
     |        |--(A)-- 请求访问令牌(出示授权许可)------------------------->|               |
     |        |                                                        |               |
     |        |<-(B)-- 颁发访问令牌 &　刷新令牌　--------------------------|               |
     |        |                                                        |               |
     |        |                                                        |               |
     |        |                                                        |               |
     |        |--(C)-- 请求访问资源             +----------+             |   授权服务器　  |
     | 客户端  |        (出示访问令牌)---------->|          |             |               |
     |        |                               |          |             |               |
     |        |<-(D)-- 许可访问资源 ------------|          |             |               |
     |        |                               |          |             |               |
     |        |                               |资源服务器　|             |               |
     |        |                               |          |             |               |
     |        |--(E)-- 请求访问资源             |          |             |               |
     |        |      　(出示过期访问令牌)------->|          |             |               |
     |        |                               |          |             |               |
     |        |<-(F)-- 返回无效令牌错误　--------|          |             |               |
     |        |                               +----------+             |               |
     |        |                                                        |               |
     |        |--(G)-- 请求访问令牌(出示刷新令牌)------------------------->|               |
     |        |                                                        |               |
     |        |                                                        |               |
     |        |<-(H)-- 颁发访问令牌    ----------------------------------|               |
     |        |                                                        |               |
     +--------+                                                        +---------------+

                                    图7：刷新过期的访问令牌

- （A）客户端向授权服务器请求访问令牌并出示资源所有者的密码凭据
- （B）授权服务器对客户端进行身份验证并验证授权许可，若有效则颁发访问令牌和刷新令牌
- （C）客户端向资源服务器请求受保护资源并出示访问令牌进行身份验证
- （D）资源服务器验证访问令牌，若有效则处理该请求
- （E）如果客户端知道访问令牌已过期，跳到步骤G，否则它将请求访问资源并出示已过期的访问令牌
- （F）由于访问令牌是无效的，资源服务器返回无效令牌错误。
- （G）客户端通过与授权服务器进行身份验证并出示刷新令牌，请求一个新的访问令牌。
- （H）授权服务器对客户端进行身份验证并验证刷新令牌，若有效则颁发一个新的访问令牌和一个新的刷新令牌（可选）

##参考资料
1. RFC6749 – The OAuth 2.0 Authorization Framework
1. OAuth 2.0 授权框架