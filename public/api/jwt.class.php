<?php
class JWT
{
    private $secret;

    public function __construct($secret)
    {
        $this->secret = $secret;
    }

    // Generate JWT token
    public function generate(array $payload, int $expirySeconds = 3600): string
    {
        $header = [
            'alg' => 'HS256',
            'typ' => 'JWT'
        ];

        $payload['iat'] = time();
        $payload['exp'] = time() + $expirySeconds;

        $base64UrlHeader = $this->base64url_encode(json_encode($header));
        $base64UrlPayload = $this->base64url_encode(json_encode($payload));

        $signature = hash_hmac(
            'sha256',
            "$base64UrlHeader.$base64UrlPayload",
            $this->secret,
            true
        );

        $base64UrlSignature = $this->base64url_encode($signature);

        return "$base64UrlHeader.$base64UrlPayload.$base64UrlSignature";
    }

    // Verify and decode JWT token
    public function verify(string $token): array|false
    {
        $parts = explode('.', $token);
        if (count($parts) !== 3) {
            return false;
        }

        list($base64UrlHeader, $base64UrlPayload, $base64UrlSignature) = $parts;

        $signature = hash_hmac(
            'sha256',
            "$base64UrlHeader.$base64UrlPayload",
            $this->secret,
            true
        );
        $expectedSignature = $this->base64url_encode($signature);

        if (!hash_equals($expectedSignature, $base64UrlSignature)) {
            return false;
        }

        $payload = json_decode($this->base64url_decode($base64UrlPayload), true);

        if (!$payload || (isset($payload['exp']) && time() > $payload['exp'])) {
            return false;
        }

        return $payload;
    }

    // Helper: base64url encode
    public function base64url_encode(string $data): string
    {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    // Helper: base64url decode
    public function base64url_decode(string $data): string
    {
        $remainder = strlen($data) % 4;
        if ($remainder) {
            $padlen = 4 - $remainder;
            $data .= str_repeat('=', $padlen);
        }
        return base64_decode(strtr($data, '-_', '+/'));
    }
}

?>