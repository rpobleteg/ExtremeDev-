output "s3_bucket_name" {
  description = "Nombre del bucket S3"
  value       = aws_s3_bucket.website.id
}

output "cloudfront_distribution_id" {
  description = "ID de la distribución CloudFront"
  value       = aws_cloudfront_distribution.website.id
}

output "cloudfront_domain_name" {
  description = "Dominio de CloudFront (para configurar DNS)"
  value       = aws_cloudfront_distribution.website.domain_name
}

output "github_actions_role_arn" {
  description = "ARN del IAM Role para GitHub Actions"
  value       = data.aws_iam_role.github_actions.arn
}
