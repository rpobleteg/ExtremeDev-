variable "aws_region" {
  description = "Región AWS para los recursos"
  type        = string
  default     = "us-east-1" # Requerido por ACM + CloudFront
}

variable "bucket_name" {
  description = "Nombre del bucket S3"
  type        = string
  default     = "extremedev-website"
}

variable "environment" {
  description = "Ambiente de despliegue"
  type        = string
  default     = "production"
}

variable "domain_names" {
  description = "Dominios asociados a CloudFront"
  type        = list(string)
  default     = ["extremedev.cl", "www.extremedev.cl"]
}

variable "acm_certificate_arn" {
  description = "ARN del certificado ACM (debe estar en us-east-1)"
  type        = string
}
