using System;
using System.Text;

namespace Lab2.Helpers
{
    public class Helper
    {
        public static String Sqrt(Double n, Double A, Boolean withPow, Double eps = 0.0001)
        {
            try
            {
                Double x0 = A / n;
                Double x1;

                if (withPow)
                {
                    x1 = (1 / n) * ((n - 1) * x0 + A / Math.Pow(x0, (int)n - 1));
                }
                else
                {
                    x1 = (1 / n) * ((n - 1) * x0 + A / Pow(x0, (int)n - 1));
                }

                while (Math.Abs((Double)x1 - x0) > eps)
                {
                    x0 = (Double)x1;

                    if (withPow)
                    {
                        x1 = (1 / n) * ((n - 1) * x0 + A / Math.Pow(x0, (int)n - 1));
                    }
                    else
                    {
                        x1 = (1 / n) * ((n - 1) * x0 + A / Pow(x0, (int)n - 1));
                    }
                }

                return x1.ToString();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return null;
        }

        public static String convert(UInt64 unsignedNumber)
        {
            StringBuilder sb = new StringBuilder();

            while (unsignedNumber != 0)
            {
                sb.Append((unsignedNumber % 2));

                unsignedNumber /= 2;
            }

            char[] arr = sb.ToString().ToCharArray();

            Array.Reverse(arr);

            return new String(arr);
        }

        private static Double Pow(Double a, Int32 pow)
        {
            Double result = 1;

            for (Int32 i = 0; i < pow; i++)
            {
                result *= a;
            }

            return result;
        }
    }
}
