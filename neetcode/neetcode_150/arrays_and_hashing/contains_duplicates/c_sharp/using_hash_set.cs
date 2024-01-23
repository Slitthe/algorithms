using System;
using System.Collections.Generic;

namespace ConsoleApplication1
{
    internal class Program
    {
        public static bool ContainsDuplicate(int[] nums)
        {
            var foundNums = new HashSet<int>();

            foreach (var num in nums)
            {
                if (foundNums.Contains(num))
                {
                    return true;
                }

                foundNums.Add(num);
            }
            return false;
        }

        public static void Main(string[] args)
        {
            int[] nums = {1,2,3,4,5,6,7,8,9, 1};
            bool contains = ContainsDuplicate(nums);
            Console.WriteLine(contains);
        }
    }
}