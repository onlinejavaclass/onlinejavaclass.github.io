# Creational design patterns
## Builder pattern

Separate the construction of a complex object from its representation so that the same construction process can create different representations.

``
Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.
``
 
Usage examples: Imagine a character generator for a role playing game. The easiest option is to let computer create the character for you. But if you want to select the character details like profession, gender, hair color etc. the character generation becomes a step-by-step process that completes when all the selections are ready.

Wikipedia says

``
The builder pattern is an object creation software design pattern with the intentions of finding a solution to the telescoping constructor anti-pattern.
``

Having said that let me add a bit about what telescoping constructor anti-pattern is. At one point or the other we have all seen a constructor like below:

~
public Hero(Profession profession, String name, HairType hairType, HairColor hairColor, Armor armor, Weapon weapon) {
}
~

Benefits:

    1. Best usecase for builder is creating immutable objects. Once object created the values can't be altered;
    2. Fast to create complex objects without needed different arguments in constroctors.
    3. The object is thread-safe hence it is an immutable object. 

### Programmatic Example

The sane alternative is to use the Builder pattern. First of all we have our hero that we want to create

~
public final class Hero {
      private final Profession profession;
      private final String name;
      private final HairType hairType;
      private final HairColor hairColor;
      private final Armor armor;
      private final Weapon weapon;
    
      private Hero(Builder builder) {
        this.profession = builder.profession;
        this.name = builder.name;
        this.hairColor = builder.hairColor;
        this.hairType = builder.hairType;
        this.weapon = builder.weapon;
        this.armor = builder.armor;
      }
    }
}
~


~
public final class Hero {
  private final Profession profession;
  private final String name;
  private final HairType hairType;
  private final HairColor hairColor;
  private final Armor armor;
  private final Weapon weapon;

  private Hero(Builder builder) {
    this.profession = builder.profession;
    this.name = builder.name;
    this.hairColor = builder.hairColor;
    this.hairType = builder.hairType;
    this.weapon = builder.weapon;
    this.armor = builder.armor;
  }
}
~

And then we have the static builder inside the ***Hero*** class; 

~
package com.metao.dp.builder;

public final class Hero {
    private final String profession;
    private final String name;
    private final String hairType;
    private final String hairColor;
    private final String armor;
    private final String weapon;

    private Hero(HeroBuilder heroBuilder) {
        this.profession = heroBuilder.profession;
        this.name = heroBuilder.name;
        this.hairColor = heroBuilder.hairColor;
        this.hairType = heroBuilder.hairType;
        this.weapon = heroBuilder.weapon;
        this.armor = heroBuilder.armor;
    }

    public static class HeroBuilder {
        private final String profession;
        private final String name;
        private String hairType;
        private String hairColor;
        private String armor;
        private String weapon;

        public HeroBuilder(String name, String profession) {
            this.name = name;
            this.profession = profession;
        }

        public HeroBuilder hairType(String hairType) {
            this.hairType = hairType;
            return this;
        }

        public HeroBuilder hairColor(String hairColor) {
            this.hairColor = hairColor;
            return this;
        }

        public HeroBuilder armor(String armor) {
            this.armor = armor;
            return this;
        }

        public HeroBuilder weapon(String weapon) {
            this.weapon = weapon;
            return this;
        }

        public static HeroBuilder builder(String name, String profession) {
            return new HeroBuilder(name, profession);
        }

        public Hero build() {
            return new Hero(this);
        }
    }

    public String getArmor() {
        return armor;
    }

    public String getHairColor() {
        return hairColor;
    }

    public String getHairType() {
        return hairType;
    }

    public String getName() {
        return name;
    }

    public String getProfession() {
        return profession;
    }

    public String getWeapon() {
        return weapon;
    }
}
~

And then it can be used as:

~
package com.metao.dp.builder;

public class Main {
    public static void main(String[] args) {
        Hero crazyFrog = Hero.HeroBuilder
                .builder("Crazy Frog", "fighter")
                .hairColor("Black")
                .armor("Knife")
                .hairType("Blond")
                .weapon("DAGGER")
                .build();

        System.out.println(crazyFrog.getName() + " is a " + crazyFrog.getProfession());
    }
}
~

#### Real world examples
```
java.lang.StringBuilder
java.nio.ByteBuffer as well as similar buffers such as FloatBuffer, IntBuffer and so on.
java.lang.StringBuffer
All implementations of java.lang.Appendable
Apache Camel builders
Apache Commons Option.Builder
```

That was all about the builder design pattern! As always thanks for reading this article.
You can find the whole code of this article at [this address](https://github.com/metao1/design-patterns/tree/master/src/main/java/com/metao/dp/builder).
Also another deign pattern examples are in [this repository](https://github.com/metao1)

To support me simply give me a star [GitHub project of this project](https://github.com/metao1/design-patterns)


